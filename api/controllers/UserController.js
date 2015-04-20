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

  signin: function(req, res) {
    return res.view('sb-admin-dashboard/signin', {layout: null});
  },

  create: function(req, res) {

  },

  read: function(req, res) {

  },

  update: function(req, res) {

  },

  delete: function(req, res) {

  },
};
