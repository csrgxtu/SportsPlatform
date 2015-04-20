/**
 * Author: Archer Reilly
 * Date: 20/Apr/2015
 * File: Camera.js
 * Desc: model for storing the camera's status
 *
 * Produced By Ebang.
 */
 module.exports = {
   // prevent auto create indexed id
   autoPK: false,

   // specify table name here in database xfjwt
   tableName: 'Camera',

   // specify the adapter to use
   adapter: 'MySQL',

   // only allow fields defined in attributes to be saved
   schema: true,

   // disable auto createdAt updatedAt columns
   autoCreatedAt: false,
   autoUpdatedAt: false,

   // if you don't put this types here, you will get an error
   // and the size can't be used in the attributes.
   types: {
     size: function() {
       return true;
     }
   },

   attributes: {
     CameraID: {
       type: 'INTEGER',
       size: 11,
       primaryKey: true,
       autoIncrement: true,
     },

     MAC: {
       type: 'STRING',
       size: 17
     },

     IP: {
       type: 'STRING',
       size: 16
     },

     Status: {
       type: 'STRING',
       size: 3,
       defaultsTo: 'OFF'
     },

     description: {
       type: 'STRING',
     },

     CreatedBy: {
       type: 'STRING',
       size: 20,
     },

     CreatedTime: {
       type: 'DATETIME',
     },

     UpdatedBy: {
       type: 'STRING',
       size: 20,
     },

     UpdatedTime: {
       type: 'DATETIME',
     },
   },
 };
