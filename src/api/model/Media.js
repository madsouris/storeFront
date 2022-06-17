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

/**
 * The Media model module.
 * @module model/Media
 * @version v1
 */
export class Media extends Entity {
  /**
   * Constructs a new <code>Media</code>.
   * @alias module:model/Media
   * @class
   * @extends module:model/Entity
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>Media</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Media} obj Optional instance to populate.
   * @return {module:model/Media} The populated <code>Media</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Media();
      Entity.constructFromObject(data, obj);
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'Blob');
      if (data.hasOwnProperty('dataContentType'))
        obj.dataContentType = ApiClient.convertToType(data['dataContentType'], 'String');
      if (data.hasOwnProperty('storage'))
        obj.storage = ApiClient.convertToType(data['storage'], Object);
      if (data.hasOwnProperty('url'))
        obj.url = ApiClient.convertToType(data['url'], 'String');
    }
    return obj;
  }
}

/**
 * The Media File
 * @member {Blob} data
 */
Media.prototype.data = undefined;

/**
 * The Content Type of the Media File
 * @member {String} dataContentType
 */
Media.prototype.dataContentType = undefined;

/**
 * The Storage type used to store the file
 * @member {Object} storage
 */
Media.prototype.storage = undefined;

/**
 * The URL used to access the Media File
 * @member {String} url
 */
Media.prototype.url = undefined;

