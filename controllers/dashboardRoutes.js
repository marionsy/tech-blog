const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');


// Edit a post
router.get('/dashboard/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      attributes: [
        'id',
        'title',
        'post_body'
      ],
      // include: [
      //   {
      //     model: User,
      //     attributes: [
      //       'username',
      //     ],
      //   },
      // ],
      // include: [
      //   {
      //     model: Comment,
      //     attributes: [
      //       'id',
      //       'comment_body',
      //       'date_created',
      //       'user_id',
      //       'post_id',
      //     ],
      //   },
      // ],
    });

    const post = postData.get({ plain: true });

    res.render('edit-post', {
      post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;