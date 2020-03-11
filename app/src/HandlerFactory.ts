import IHandler from './interfaces/IHandler'

import GoogleAnalyticsHandler from './handlers/GoogleAnalyticsHandler';
import MixpanelHandler from './handlers/MixpanelHandler'

export default class HandlerFactory { 
  
  static getHandler(type: String): IHandler {
      switch (type) {
        case 'GoogleAnalyticsHandler': return new GoogleAnalyticsHandler();
        case 'MixpanelHandler': return new MixpanelHandler();
        default: console.log('Factory handler not found', type);
      }
  }
  
}