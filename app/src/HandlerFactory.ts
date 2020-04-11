import IHandler from './interfaces/IHandler'

import HandlerOne from './handlers/HandlerOne'
import HandlerTwo from './handlers/HandlerTwo'

export default class HandlerFactory {

  static getHandler(type: string): IHandler {
      switch (type) {
        case 'HandlerOne': return new HandlerOne()
        case 'HandlerTwo': return new HandlerTwo()
        default: console.log('Factory handler not found', type)
      }
  }

}