/**
 * ArticlesController
 *
 * @description :: Server-side actions for managing articles.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    list: function(req, res){
        Articles.find({}).exec(function(err, articles){
            if (err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('pages/list', {articles:articles});
        });
    },

    add: function(req, res){
        res.view('pages/add');
    },

    create: function(req, res){
        var title = req.body.title;
        var body = req.body.body;

        Articles.create({title:title, body:body}).exec(function(err){
            if (err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });
    },

    delete: function(req, res){
        const articleId = req.param('articleId');
        //res.send(articleId)
        Articles.destroy({id: articleId}).exec(function(err){
            if (err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });

        return false;
    },

    edit: function(req, res){
        const articleId = req.param('articleId');
        Articles.findOne({id: articleId}).exec(function(err, article){
            if (err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('pages/edit', {article:article});
        });
    },

    update: function(req, res){
        const articleId = req.param('articleId');
        var title = req.body.title;
        var body = req.body.body;

        Articles.update({id: articleId}, {title:title, body:body}).exec(function(err){
            if (err){
                res.send(500, {error: 'Database Error'});
            }

            res.redirect('/articles/list');
        });

        return false;
    },

    view: function(req, res){
        const articleId = req.param('articleId');
        Articles.findOne({id: articleId}).exec(function(err, article){
            if (err){
                res.send(500, {error: 'Database Error'});
            }
            res.view('pages/view', {article:article});
        });

    }


};