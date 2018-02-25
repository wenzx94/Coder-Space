const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const problemService = require('../services/problemService');
const nodeRestClient = require('node-rest-client').Client;
const restClient = new nodeRestClient();

EXECUTOR_SERVER_URL = 'http://localhost:5000/build_and_run';
restClient.registerMethod('build_and_run', EXECUTOR_SERVER_URL, 'post');

//GET /api/v1/problem
router.get('/problems', function(req, res) {
    problemService.getProblems()
        .then(problems => res.json(problems));
});

//GET /api/v1/problem/:id
router.get('/problems/:id', function(req, res) {
    const id = req.params.id;
    console.log(id);
    problemService.getProblem(+id)
        .then(problem => res.json(problem));
});

//POST /api/v1/problems
router.post('/problems', jsonParser, function(req, res) {
    problemService.addProblem(req.body)
        .then(
            //resolve
            (problems) => {
            res.json(problems);
        },
        //reject
        (error) => {
            res.status(400).send('Problem name already exists');
        });
});

router.post('/build_and_run', jsonParser, function(req, res) {
    const userCodes = req.body.userCodes;
    const lang = req.body.lang;
    console.log(lang + ':' + userCodes);
    //res.json({'text': 'hahaha done'});
    restClient.methods.build_and_run(
        {
            data: { code: userCodes, lang: lang},
            headers: { 'Content-Type': 'application/json'}
        }, (data, response) => {
            console.log('Received from execution server');
            // {build : 'zoijofajf', run: 'joadisjfoiajf'}
            const text = `Build ouput: ${data['build']}  Execute output: ${data['run']}`;
            data['text'] = text;
            res.json(data);
        }
    );
});

module.exports = router;