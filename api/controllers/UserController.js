/**
 * Author: Archer Reilly
 * Date: 20/Apr/2015
 * File: UserController.js
 * Desc: controllers for User management
 *
 * Produced By Ebang
 */

module.exports = {
  index: function(req, res) {
    return res.view('sb-admin-dashboard/index', {layout: null});
  },

  /**
   * create a user record
   *
   * @method GET POST
   *
   * @param userName string
   * @param password string
   * @param createdBy string
   * @return Json
   */
  create: function(req, res) {
    var userName = req.param('userName');
    var password = req.param('password');
    var createdBy = req.param('createdBy');
    if (!userName && !password && !createdBy) {
      return res.json({
        code: 403,
        msg: 'Parameter Error'
      });
    }

    User.create({
      UserName: userName,
      Password: password,
      CreatedBy: createdBy
    })
    .exec(function cb(err, recs) {
      if (err) {
        return res.json({
          code: 500,
          msg: 'Database Error',
          data: err
        });
      }

      return res.json({
        code: 200,
        msg: recs
      })
    });

  },

  read: function(req, res) {
    User.find()
    .exec(function cb(err, recs) {
      if (err) {
        return res.json({
          code: 500,
          msg: 'Database Error',
          data: err
        });
      }

      return res.json({
        code: 200,
        msg: recs
      });
    });

  },

  update: function(req, res) {

  },

  delete: function(req, res) {

  },
};
