/*
 * Hangme API
 * Hangme offers services for our merchant, consumer, driver and partner applications. How you can interact with these services is documented here.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.34
 *
 * Do not edit the class manually.
 *
 */
import {ApiClient} from '../ApiClient';
import {Entity} from './Entity';
import {SuspiciousActivityReportOutcome} from './SuspiciousActivityReportOutcome';
import {SuspiciousActivityReportPriority} from './SuspiciousActivityReportPriority';
import {SuspiciousActivityReportStatus} from './SuspiciousActivityReportStatus';

/**
 * The SuspiciousActivityReport model module.
 * @module model/SuspiciousActivityReport
 * @version v1
 */
export class SuspiciousActivityReport extends Entity {
  /**
   * Constructs a new <code>SuspiciousActivityReport</code>.
   * @alias module:model/SuspiciousActivityReport
   * @class
   * @extends module:model/Entity
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>SuspiciousActivityReport</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SuspiciousActivityReport} obj Optional instance to populate.
   * @return {module:model/SuspiciousActivityReport} The populated <code>SuspiciousActivityReport</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SuspiciousActivityReport();
      Entity.constructFromObject(data, obj);
      if (data.hasOwnProperty('userId'))
        obj.userId = ApiClient.convertToType(data['userId'], 'String');
      if (data.hasOwnProperty('productId'))
        obj.productId = ApiClient.convertToType(data['productId'], 'Number');
      if (data.hasOwnProperty('product'))
        obj.product = ApiClient.convertToType(data['product'], Object);
      if (data.hasOwnProperty('storeId'))
        obj.storeId = ApiClient.convertToType(data['storeId'], 'Number');
      if (data.hasOwnProperty('store'))
        obj.store = ApiClient.convertToType(data['store'], Object);
      if (data.hasOwnProperty('order'))
        obj.order = ApiClient.convertToType(data['order'], Object);
      if (data.hasOwnProperty('orderId'))
        obj.orderId = ApiClient.convertToType(data['orderId'], 'Number');
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('adminComment'))
        obj.adminComment = ApiClient.convertToType(data['adminComment'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = SuspiciousActivityReportStatus.constructFromObject(data['status']);
      if (data.hasOwnProperty('priority'))
        obj.priority = SuspiciousActivityReportPriority.constructFromObject(data['priority']);
      if (data.hasOwnProperty('outcome'))
        obj.outcome = SuspiciousActivityReportOutcome.constructFromObject(data['outcome']);
      if (data.hasOwnProperty('assignedToUserId'))
        obj.assignedToUserId = ApiClient.convertToType(data['assignedToUserId'], 'String');
      if (data.hasOwnProperty('followUp'))
        obj.followUp = ApiClient.convertToType(data['followUp'], 'Date');
      if (data.hasOwnProperty('statusUpdated'))
        obj.statusUpdated = ApiClient.convertToType(data['statusUpdated'], 'Date');
    }
    return obj;
  }
}

/**
 * The ID of the User this Report is in relation to
 * @member {String} userId
 */
SuspiciousActivityReport.prototype.userId = undefined;

/**
 * The ID of the Product this Suspicious Activity Report relates to
 * @member {Number} productId
 */
SuspiciousActivityReport.prototype.productId = undefined;

/**
 * The Product this Suspicious Activity Report relates to
 * @member {Object} product
 */
SuspiciousActivityReport.prototype.product = undefined;

/**
 * The ID of the Store this Suspicious Activity Report Relates to
 * @member {Number} storeId
 */
SuspiciousActivityReport.prototype.storeId = undefined;

/**
 * The Store this Suspicious Activity Report relates to
 * @member {Object} store
 */
SuspiciousActivityReport.prototype.store = undefined;

/**
 * @member {Object} order
 */
SuspiciousActivityReport.prototype.order = undefined;

/**
 * @member {Number} orderId
 */
SuspiciousActivityReport.prototype.orderId = undefined;

/**
 * The text of the Suspicious Activity Report
 * @member {String} description
 */
SuspiciousActivityReport.prototype.description = undefined;

/**
 * The Store Owners reply to the Review
 * @member {String} adminComment
 */
SuspiciousActivityReport.prototype.adminComment = undefined;

/**
 * @member {module:model/SuspiciousActivityReportStatus} status
 */
SuspiciousActivityReport.prototype.status = undefined;

/**
 * @member {module:model/SuspiciousActivityReportPriority} priority
 */
SuspiciousActivityReport.prototype.priority = undefined;

/**
 * @member {module:model/SuspiciousActivityReportOutcome} outcome
 */
SuspiciousActivityReport.prototype.outcome = undefined;

/**
 * Hangme Staff user ID that the contact is currently assigned to
 * @member {String} assignedToUserId
 */
SuspiciousActivityReport.prototype.assignedToUserId = undefined;

/**
 * @member {Date} followUp
 */
SuspiciousActivityReport.prototype.followUp = undefined;

/**
 * @member {Date} statusUpdated
 */
SuspiciousActivityReport.prototype.statusUpdated = undefined;

