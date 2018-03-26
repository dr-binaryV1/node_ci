const { clearHash } = require('../services/cache');

// We would like this middleware to run after the blog post is saved or after an action is done on the route
module.exports = async (req, res, next) => {

  // We add await to next so that the action on the route would run and then pass control to the middleware afterwards
  await next();

  clearHash(req.user.id);
};
