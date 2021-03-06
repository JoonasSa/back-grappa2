const router = require('express').Router();
const bodyParser = require('body-parser');
const thesisController = require('../controllers/ThesisController');
const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', (req, res) => {
    thesisController.getAllTheses(req, res);
});

router.get('/:id', (req, res) => {
    thesisController.getThesisById(req, res);
});

router.post('/', (req, res) => {
    thesisController.saveThesisForm(req, res);
});

module.exports = router;
