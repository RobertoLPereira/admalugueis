module.exports = app => {
    const Pessoas = app.db.models.pessoas;
    app.route('/')
    .get((req, res) => {
      res.render('/pages/Portal_Conteudo.ejs');
    });
  };