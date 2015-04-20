/**
 * Author: Archer Reilly
 * Date: 20/Apr/2015
 * File: AuthenticationController.js
 * Desc: controller for authentication
 *
 * Produced By Ebang.
 */

module.exports = {
  index: function(req, res) {
    return res.view('sb-admin-dashboard/signin', {layout: null});
  },

  /**
   * process the parameter client posts, and decided if the account
   * exists.
   *
   * @method GET POST
   *
   * @param userName string
   * @param password string
   * @return Json
   */
  signin: function(req, res) {
    var userName = req.param('userName');
    var password = req.param('password');
    if (!userName && !password) {
      return res.json(sails.config.returnCode.INVALID_PARAM);
    }

    User.find()
    .where({UserName: userName})
    .where({Password: password})
    .exec(function cb(err, recs) {
      if (err) {
        sails.config.returnCode.DATABASE_ERROR.data = err;
        return res.json(sails.config.returnCode.DATABASE_ERROR);
      }

      if (recs.length == 0) {
        sails.config.returnCode.SUCCESS.data = null;
        return res.json(sails.config.returnCode.SUCCESS);
      } else {
        sails.config.returnCode.SUCCESS.data = recs;
        return res.json(sails.config.returnCode.SUCCESS);
      }
    });
  },
};
