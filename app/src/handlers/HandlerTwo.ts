import AbstractHandler from '../AbstractHandler';
/**
 * All Concrete Handlers either handle a request or pass it to the next handler
 * in the chain.
 */
export default class HandlerTwo extends AbstractHandler {
  
  public async handle(event: Object, context: Object) {
      console.log(`HandlerTwo: ${event}.`);
      return super.handle(event, context);
  }
}