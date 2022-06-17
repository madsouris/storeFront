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

/**
 * Enum class MediaStorage.
 * @enum {Number}
 * @readonly
 */
const MediaStorage = {
  /**
   * value: 0
   * @const
   */
  _0: 0,

  /**
   * value: 1
   * @const
   */
  _1: 1,

  /**
   * value: 2
   * @const
   */
  _2: 2,

  /**
   * value: 3
   * @const
   */
  _3: 3,

  /**
   * Returns a <code>MediaStorage</code> enum value from a JavaScript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
  * @return {module:model/MediaStorage} The enum <code>MediaStorage</code> value.
   */
  constructFromObject: function(object) {
    return object;
  }
};

export {MediaStorage};