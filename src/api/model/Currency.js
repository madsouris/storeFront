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
 * The Currency model module.
 * @module model/Currency
 * @version v1
 */
export class Currency extends Entity {
  /**
   * Constructs a new <code>Currency</code>.
   * @alias module:model/Currency
   * @class
   * @extends module:model/Entity
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>Currency</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Currency} obj Optional instance to populate.
   * @return {module:model/Currency} The populated <code>Currency</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Currency();
      Entity.constructFromObject(data, obj);
      if (data.hasOwnProperty('currencyCode'))
        obj.currencyCode = ApiClient.convertToType(data['currencyCode'], 'String');
      if (data.hasOwnProperty('culture'))
        obj.culture = ApiClient.convertToType(data['culture'], 'String');
      if (data.hasOwnProperty('customFormat'))
        obj.customFormat = ApiClient.convertToType(data['customFormat'], 'String');
      if (data.hasOwnProperty('rate'))
        obj.rate = ApiClient.convertToType(data['rate'], 'Number');
      if (data.hasOwnProperty('symbol'))
        obj.symbol = ApiClient.convertToType(data['symbol'], 'String');
      if (data.hasOwnProperty('displayDecimalPlaces'))
        obj.displayDecimalPlaces = ApiClient.convertToType(data['displayDecimalPlaces'], 'Number');
    }
    return obj;
  }
}

/**
 * The currency code
 * @member {String} currencyCode
 */
Currency.prototype.currencyCode = undefined;

/**
 * The culture name of the country for the currency
 * @member {String} culture
 */
Currency.prototype.culture = undefined;

/**
 * The custom format for the currency
 * @member {String} customFormat
 */
Currency.prototype.customFormat = undefined;

/**
 * The exchange rate of the currency
 * @member {Number} rate
 */
Currency.prototype.rate = undefined;

/**
 * The Symbol used to represent the currency
 * @member {String} symbol
 */
Currency.prototype.symbol = undefined;

/**
 * @member {Number} displayDecimalPlaces
 */
Currency.prototype.displayDecimalPlaces = undefined;

