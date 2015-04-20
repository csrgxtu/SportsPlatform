/**
 * Author: Archer Reilly
 * Date: 20/Apr/2015
 * File: returnCode.js
 * Desc: defination of the return code
 *
 * Procued By Ebang.
 */
module.exports.returnCode = {
  SUCCESS: {
    code: 200,
    msg: 'Operation Success',
    data: null
  },

  ERROR: {
    code: 403,
    msg: 'Operation Error',
    data: null
  },

  INVALID_PARAM: {
    code: 403,
    msg: 'INVALID PARAM',
    data: null
  },

  DATABASE_ERROR: {
    code: 500,
    msg: 'DATABASE ERROR',
    data: null
  }
};
