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
import {TenantCurrency} from './TenantCurrency';
import {TenantLanguage} from './TenantLanguage';
import {TenantPaymentMethod} from './TenantPaymentMethod';
import {TenantShippingMethod} from './TenantShippingMethod';

/**
 * The Tenant model module.
 * @module model/Tenant
 * @version v1
 */
export class Tenant extends Entity {
  /**
   * Constructs a new <code>Tenant</code>.
   * @alias module:model/Tenant
   * @class
   * @extends module:model/Entity
   */
  constructor() {
    super();
  }

  /**
   * Constructs a <code>Tenant</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tenant} obj Optional instance to populate.
   * @return {module:model/Tenant} The populated <code>Tenant</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new Tenant();
      Entity.constructFromObject(data, obj);
      if (data.hasOwnProperty('tenantCurrencies'))
        obj.tenantCurrencies = ApiClient.convertToType(data['tenantCurrencies'], [TenantCurrency]);
      if (data.hasOwnProperty('tenantLanguages'))
        obj.tenantLanguages = ApiClient.convertToType(data['tenantLanguages'], [TenantLanguage]);
      if (data.hasOwnProperty('paymentMethods'))
        obj.paymentMethods = ApiClient.convertToType(data['paymentMethods'], [TenantPaymentMethod]);
      if (data.hasOwnProperty('shippingMethods'))
        obj.shippingMethods = ApiClient.convertToType(data['shippingMethods'], [TenantShippingMethod]);
      if (data.hasOwnProperty('baseDomain'))
        obj.baseDomain = ApiClient.convertToType(data['baseDomain'], 'String');
      if (data.hasOwnProperty('termsAndConditions'))
        obj.termsAndConditions = ApiClient.convertToType(data['termsAndConditions'], 'String');
      if (data.hasOwnProperty('privacyPolicy'))
        obj.privacyPolicy = ApiClient.convertToType(data['privacyPolicy'], 'String');
      if (data.hasOwnProperty('isDefault'))
        obj.isDefault = ApiClient.convertToType(data['isDefault'], 'Boolean');
      if (data.hasOwnProperty('code'))
        obj.code = ApiClient.convertToType(data['code'], 'String');
      if (data.hasOwnProperty('baseCommissionPercentage'))
        obj.baseCommissionPercentage = ApiClient.convertToType(data['baseCommissionPercentage'], 'Number');
    }
    return obj;
  }
}

/**
 * @member {Array.<module:model/TenantCurrency>} tenantCurrencies
 */
Tenant.prototype.tenantCurrencies = undefined;

/**
 * @member {Array.<module:model/TenantLanguage>} tenantLanguages
 */
Tenant.prototype.tenantLanguages = undefined;

/**
 * @member {Array.<module:model/TenantPaymentMethod>} paymentMethods
 */
Tenant.prototype.paymentMethods = undefined;

/**
 * @member {Array.<module:model/TenantShippingMethod>} shippingMethods
 */
Tenant.prototype.shippingMethods = undefined;

/**
 * @member {String} baseDomain
 */
Tenant.prototype.baseDomain = undefined;

/**
 * @member {String} termsAndConditions
 */
Tenant.prototype.termsAndConditions = undefined;

/**
 * @member {String} privacyPolicy
 */
Tenant.prototype.privacyPolicy = undefined;

/**
 * @member {Boolean} isDefault
 */
Tenant.prototype.isDefault = undefined;

/**
 * @member {String} code
 */
Tenant.prototype.code = undefined;

/**
 * @member {Number} baseCommissionPercentage
 */
Tenant.prototype.baseCommissionPercentage = undefined;

// Implement OneOfEntityTenant interface:
