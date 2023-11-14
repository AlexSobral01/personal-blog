const express = require('express');
const router = express.Router();

const ArticleController = require('../controllers/articles/ArticlesController');

router.get('/artigos', ArticleController.index);

module.exports = router;