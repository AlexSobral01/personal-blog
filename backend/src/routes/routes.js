const express = require('express');
const router = express.Router();

const ArticleController = require('../controllers/articles/ArticlesController');

router.get('/articles', ArticleController.findAll);
router.get('/articles/desc', ArticleController.findDesc);
router.post('/articles', ArticleController.create);

module.exports = router;