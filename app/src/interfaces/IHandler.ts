/**
 * The Handler interface declares a method for building the chain of handlers.
 * It also declares a method for executing a request.
 */
export default interface IHandler {

  setNext(handler: IHandler): IHandler;
  handle(event: Object, context: Object): Promise<String>;

}
