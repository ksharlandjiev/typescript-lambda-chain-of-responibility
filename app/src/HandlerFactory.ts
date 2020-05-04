import IHandler from './interfaces/IHandler'

import TextractHandler from './handlers/TextractHandler'

export default class HandlerFactory {

  static getHandler(type: string): IHandler {
      switch (type) {
        case 'TextractHandler': return new TextractHandler()
        default: console.log('Factory handler not found', type)
      }
  }

}