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
      return res.json({
        code: 403,
        msg: 'Parameter Error'
      });
    }

    User.find()
    .where({UserName: userName})
    .where({Password: password})
    .exec(function cb(err, recs) {
      if (err) {
        return res.json({
          code: 500,
          msg: 'Database Error'
        });
      }

      if (recs.length == 0) {
        return res.json({
          code: 200,
          msg: 'not exist'
        });
      } else {
        return res.json({
          code: 200,
          msg: 'exist'
        });
      }
    });
  },
};
