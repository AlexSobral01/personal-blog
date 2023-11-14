class ArticleController {

  async index (req, res) {
    res.send('artigos')
  }
  
}

module.exports = new ArticleController;