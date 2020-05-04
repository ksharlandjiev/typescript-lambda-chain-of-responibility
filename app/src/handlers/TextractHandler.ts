import AbstractHandler from '../AbstractHandler'
import iResponse from '../interfaces/iResponse';

/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export default class TextractHandler extends AbstractHandler {

  public handle(event: object, context: any, callback: any) : iResponse {
      context.response = {"Hello": "world"};

      console.log('[TextractHandler][handle]', context)
      return super.handle(event, context, callback)

  }
}