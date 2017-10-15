import test from 'ava';
import sinon from 'sinon';

import router from '../src/routes/theses.js';

const reqres = require('reqres');

let req;
let res;
let thesisController;
let dao;

test.beforeEach(async t => {
    req = reqres.req();
    res = reqres.res();
    dao = require('../src/dao/ThesisDao');
    thesisController = require('../src/controllers/ThesisController');
});

test.cb('getThesisById', t => {
    const stub = sinon.stub(dao, "getThesisById");
    req.params.id = 123;
    stub.returns({ test: "xoxo" });
    stub.withArgs(req.params.id).returns({ test: "ok" });
    thesisController.dao = dao;
    thesisController.getThesisById(req, res)
        .then(() => {
            t.is(stub.calledOnce, true, "thesisById is called once");
            t.is(stub.calledWith(req.params.id), true, "thesisById is called with correct id");
            t.is(res.status.calledWith(200), true, "thesisById returns status 200");
            t.is(res.json.calledWith({ test: "ok" }), true, "thesisById returns correct information");
            t.end();
        });
    dao.getThesisById.restore();
});

test.cb('getAllTheses returns correct information', t => {
    const stub = sinon.stub(dao, "getAllTheses");
    stub.returns({ test: "xoxo" });
    thesisController.dao = dao;
    thesisController.getAllTheses(req, res)
        .then(() => {
            t.is(stub.calledOnce, true, "getAllTheses is called once");
            t.is(res.status.calledWith(200), true, "getAllTheses returns status 200");
            t.is(res.json.calledWith({ test: "xoxo" }), true, "getAllTheses returns correct information");
            t.end();
        });
    dao.getAllTheses.restore();
});
