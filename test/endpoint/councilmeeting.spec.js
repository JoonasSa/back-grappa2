import test from 'ava';
const request = require('supertest');
const express = require('express');
const councilmeetings = require('../../src/routes/councilmeeting');
const knex = require('../../src/db/connection');

const makeApp = (userId) => {
    const app = express();
    app.use('/councilmeetings', (req, res, next) => {
        req.session = {};
        req.session.user_id = userId;
        next();
    }, councilmeetings)
    return app;
}

test.before(async t => {
    await knex.migrate.latest();
    await knex.seed.run();
})

const councilmeetingWithoutId = {
    date: '2017-11-29T22:00:00.000Z',
    instructorDeadline: '2017-11-20T22:00:00.000Z',
    studentDeadline: '2017-11-10T22:00:00.000Z',
}

test('councilmeeting post & creates id', async t => {
    t.plan(3);
    const res = await request(makeApp(1))
        .post('/councilmeetings')
        .send(councilmeetingWithoutId);
    t.is(res.status, 200);
    let councilmeeting = res.body;
    t.truthy(councilmeeting.councilmeetingId);
    delete councilmeeting.councilmeetingId;
    t.deepEqual(councilmeeting, councilmeetingWithoutId);
})

test('councilmeeting get all', async t => {
    t.plan(2);
    const res = await request(makeApp(1))
        .get('/councilmeetings');
    t.is(res.status, 200);
    const councilmeetings = res.body;
    t.truthy(councilmeetings.length > 0);
})