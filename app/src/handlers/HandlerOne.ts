import AbstractHandler from '../AbstractHandler';
/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export default class HandlerOne extends AbstractHandler {

  public async handle(event: Object, context: Object) {
      console.log(`HandlerOne:  ${event}.`);
      return super.handle(event, context);

  }
}