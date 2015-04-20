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
  }
};
