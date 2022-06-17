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
import {MediaLink} from './MediaLink';
import {SpecialCategoryProduct} from './SpecialCategoryProduct';

/**
 * The SpecialCategory model module.
 * @module model/SpecialCategory
 * @version v1
 */
export class SpecialCategory extends Entity {
  /**
   * Constructs a new <code>SpecialCategory</code>.
   * @alias module:model/SpecialCategory
   * @class
   * @extends module:model/Entity
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>SpecialCategory</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SpecialCategory} obj Optional instance to populate.
   * @return {module:model/SpecialCategory} The populated <code>SpecialCategory</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new SpecialCategory();
      Entity.constructFromObject(data, obj);
      if (data.hasOwnProperty('group'))
        obj.group = ApiClient.convertToType(data['group'], 'String');
      if (data.hasOwnProperty('mediaLinks'))
        obj.mediaLinks = ApiClient.convertToType(data['mediaLinks'], [MediaLink]);
      if (data.hasOwnProperty('description'))
        obj.description = ApiClient.convertToType(data['description'], 'String');
      if (data.hasOwnProperty('startDateTime'))
        obj.startDateTime = ApiClient.convertToType(data['startDateTime'], 'Date');
      if (data.hasOwnProperty('endDateTime'))
        obj.endDateTime = ApiClient.convertToType(data['endDateTime'], 'Date');
      if (data.hasOwnProperty('specialCategoryProducts'))
        obj.specialCategoryProducts = ApiClient.convertToType(data['specialCategoryProducts'], [SpecialCategoryProduct]);
    }
    return obj;
  }
}

/**
 * @member {String} group
 */
SpecialCategory.prototype.group = undefined;

/**
 * @member {Array.<module:model/MediaLink>} mediaLinks
 */
SpecialCategory.prototype.mediaLinks = undefined;

/**
 * @member {String} description
 */
SpecialCategory.prototype.description = undefined;

/**
 * @member {Date} startDateTime
 */
SpecialCategory.prototype.startDateTime = undefined;

/**
 * @member {Date} endDateTime
 */
SpecialCategory.prototype.endDateTime = undefined;

/**
 * @member {Array.<module:model/SpecialCategoryProduct>} specialCategoryProducts
 */
SpecialCategory.prototype.specialCategoryProducts = undefined;

