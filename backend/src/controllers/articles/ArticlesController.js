const Article = require('./Article');
const slugify = require('slugify');

class ArticleController {

  async findAll (req, res) {
    const artigos = await Article.findAll()
      res.send(artigos)
  }

  async create (req, res) {
    const { imgUrl, title, description } = req.body;

    try {
      const artigos = await Article.create({
        imgUrl: imgUrl,
        title: title,
        slug: slugify(title),
        description: description
      })
      return res.send(artigos);
    } catch (error) {
      return res.status(400).send({ error: 'falha ao criar artigo' });
    }
  }

}

module.exports = new ArticleController;