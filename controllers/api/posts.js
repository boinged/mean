var Post = require('../../models/post');
var router = require('express').Router();

router.get('/', function(request, response, next) {
  Post.find()
    .sort('-date')
    .exec(function(error, posts) {
      if (error) {
        return next(error);
      }
      response.json(posts);
    });
});

router.post('/', function(request, response, next) {
  var post = new Post({
    username: request.auth.username,
    body: request.body.body
  });

  post.save(function(error, post) {
    if (error) {
      return next(error);
    }
    response.status(201).json(post);
  });
});
module.exports = router;
