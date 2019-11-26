'use strict';

/**
 * Title.js controller
 *
 * @description: A set of functions called "actions" for managing `Title`.
 */

module.exports = {

  /**
   * Retrieve title records.
   *
   * @return {Object|Array}
   */

  find: async (ctx, next, { populate } = {}) => {
    if (ctx.query._q) {
      return strapi.services.title.search(ctx.query);
    } else {
      return strapi.services.title.fetchAll(ctx.query, populate);
    }
  },

  /**
   * Retrieve a title record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    return strapi.services.title.fetch(ctx.params);
  },

  /**
   * Count title records.
   *
   * @return {Number}
   */

  count: async (ctx, next, { populate } = {}) => {
    return strapi.services.title.count(ctx.query, populate);
  },

  /**
   * Create a/an title record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.title.add(ctx.request.body);
  },

  /**
   * Update a/an title record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.title.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an title record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.title.remove(ctx.params);
  }
};
