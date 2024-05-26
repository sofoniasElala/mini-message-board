const express = require('express');
const router = express.Router();
const {messages} = require('./index');

router.get('/', (req, res) => {
    res.render('form');
})
router.post('/', (req, res) => {
    messages.push({text: req.body.message, user: req.body.authorName, added: new Date()});
    res.redirect('/');
})

module.exports = router;