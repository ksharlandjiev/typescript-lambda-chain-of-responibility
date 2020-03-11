const axios = require('axios')

import AbstractHandler from '../AbstractHandler';
/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export default class GoogleAnalyticsHandler extends AbstractHandler {

  public async handle(event: Object, context: Object) {
      console.log(`GoogleAnalyticsHandler:  ${event}.`);

      setTimeout(function() {
        console.log('GoogleAnalyticsHandler finished');
      }, 3000);
      return super.handle(event, context);

  }
}