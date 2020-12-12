'use strict';
const { parseMultipartData, sanitizeEntity } = require('strapi-utils');

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {

  /**
   * Create a property
   * @return {Object}
   */
  async create(ctx) {
    let entity;
    if (ctx.is('multipart')) {
      const {data, files} = parseMultipartData(ctx);
      data.user = ctx.state.user.id;
      entity = await strapi.services.property.create(data, {files});
    } else {
      ctx.request.body.user = ctx.state.user.id;
      entity = await strapi.services.property.create(ctx.request.body);
    }
    return sanitizeEntity(entity, { model: strapi.models.property });
  },

  /**
   * Update a record
   * 
   * @return {Object}
   */
  async update(ctx) {
    const { id } = ctx.params;
    let entity;

    const [property] = await strapi.services.property.find({
      id: ctx.params.id,
      'user.id': ctx.state.user.id,
    });

    if (!property) {
      return ctx.unauthorized(`You can't update this entry`);
    }

    if (ctx.is('multipart')) {
      const { data, files } = parseMultipartData(ctx);
      entity = await strapi.services.property.update({id}, data, {
        files,
      });
    } else {
      entity = await strapi.services.property.update({id}, ctx.request.body);
    }

    return sanitizeEntity(entity, { model: strapi.models.property});
  },

  /**
   * Delete a record
   * 
   */
  async delete(ctx) {
    const {id} = ctx.params;
    const [property] = await strapi.services.property.find({
      id: ctx.params.id,
      'user.id': ctx.state.user.id,
    });

    if(!property) {
      return ctx.unauthorized(`You can't delete this entry`);
    }

    const entity = await strapi.services.property.delete({id});
    return sanitizeEntity(entity, { model: strapi.models.property });
  }
};
