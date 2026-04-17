'use strict';
const { createCoreController } = require('@strapi/strapi').factories;
const { sendLeadNotification } = require('../../../services/emailService');

module.exports = createCoreController('api::lead.lead', ({ strapi }) => ({
  async create(ctx) {
    const response = await super.create(ctx);
    // Send email notification on new lead
    try {
      await sendLeadNotification(response.data.attributes);
    } catch (err) {
      strapi.log.warn('Email notification failed:', err.message);
    }
    return response;
  }
}));
