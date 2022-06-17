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
 * The KHQRData model module.
 * @module model/KHQRData
 * @version v1
 */
export class KHQRData {
  /**
   * Constructs a new <code>KHQRData</code>.
   * @alias module:model/KHQRData
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>KHQRData</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/KHQRData} obj Optional instance to populate.
   * @return {module:model/KHQRData} The populated <code>KHQRData</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new KHQRData();
      if (data.hasOwnProperty('qr'))
        obj.qr = ApiClient.convertToType(data['qr'], 'String');
      if (data.hasOwnProperty('mD5'))
        obj.mD5 = ApiClient.convertToType(data['mD5'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} qr
 */
KHQRData.prototype.qr = undefined;

/**
 * @member {String} mD5
 */
KHQRData.prototype.mD5 = undefined;

// Implement OneOfKHQRResponseOfKHQRDataData interface:
