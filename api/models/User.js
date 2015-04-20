/**
 * Author: Archer Reilly
 * Date: 20/Apr/2015
 * File: User.js
 * Des: model for user
 *
 * Produced By Ebang
 */

module.exports = {
  // prevent auto create indexed id
  autoPK: false,

  // specify table name here in database xfjwt
  tableName: 'User',

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
    UserID: {
      type: 'INTEGER',
      size: 11,
      primaryKey: true,
      autoIncrement: true,
      notNull: true,
    },

    UserName: {
      type: 'STRING',
      unique: true,
      size: 20,
      notNull: true,
    },

    Password: {
      type: 'STRING',
      required: true,
      notNull: true,
      size: 32,
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

    // Override toJSON instance method
    // to remove password value
    toJSON: function() {
      var obj = this.toObject();
      delete obj.Password;
      return obj;
    }, 
  },
};
