/**
 * Author: Archer Reilly
 * Date: 20/Apr/2015
 * File: UserController.js
 * Desc: controllers for User management
 *
 * Produced By Ebang
 */

module.exports = {
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
      return res.json(sails.config.returnCode.INVALID_PARAM);
    }

    User.create({
      UserName: userName,
      Password: password,
      CreatedBy: createdBy
    })
    .exec(function cb(err, recs) {
      if (err) {
        sails.config.returnCode.DATABASE_ERROR.data = err;
        return res.json(sails.config.returnCode.DATABASE_ERROR);
      }

      sails.config.returnCode.SUCCESS.data = recs;
      return res.json(sails.config.returnCode.SUCCESS);
    });

  },

  read: function(req, res) {
    User.find()
    .exec(function cb(err, recs) {
      if (err) {
        sails.config.returnCode.DATABASE_ERROR.data = err;
        return res.json(sails.config.returnCode.DATABASE_ERROR);
      }

      sails.config.returnCode.SUCCESS.data = recs;
      return res.json(sails.config.returnCode.SUCCESS);
    });
  },

  update: function(req, res) {

  },

  delete: function(req, res) {

  },
};
