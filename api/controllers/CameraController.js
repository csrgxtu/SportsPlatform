/**
 * Author: Archer
 * Date: 20/Apr/2015
 * File: CameraController.js
 * Desc: controller for managing the Camera status.
 *
 * Produced By Ebang.
 */

module.exports = {
  index: function(req, res) {
    return res.view('sb-admin-dashboard/index', {layout: null});
  },

  /**
   * create record in Camera
   *
   * @method GET POST
   *
   * @param mac string
   * @param ip string
   * @param status string
   * @param description string
   * @param createdBy string
   * @return Json
   */
  create: function(req, res) {
    var mac = req.param('mac');
    var ip = req.param('ip');
    var status = req.param('status');
    var description = req.param('description');
    var createdBy = req.param('createdBy');
    if (!mac && !ip && !status && !description && !createdBy) {
      return res.json(sails.config.returnCode.INVALID_PARAM);
    }

    Camera.create({
      MAC: mac,
      IP: ip,
      Status: status,
      Description: description,
      CreatedBy: createdBy
    }).exec(function cb(err, recs) {
      if (err) {
        sails.config.returnCode.DATABASE_ERROR.data = err;
        return res.json(sails.config.returnCode.DATABASE_ERROR);
      }

      sails.config.returnCode.SUCCESS.data = recs;
      return res.json(sails.config.returnCode.SUCCESS);
    })
  },

  /**
   * get records from Camera
   *
   * @method GET POST
   *
   * @return Json
   */
  read: function(req, res) {
    Camera.find()
    .exec(function cb(err, recs) {
      if (err) {
        sails.config.returnCode.DATABASE_ERROR.data = err;
        return res.json(sails.config.returnCode.DATABASE_ERROR);
      }

      sails.config.returnCode.SUCCESS.data = recs;
      return res.json(sails.config.returnCode.SUCCESS);
    })
  },

  update: function(req, res) {

  },

  delete: function(req, res) {

  }
};
