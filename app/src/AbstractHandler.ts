import IHandler from './interfaces/IHandler'
/**
 * The default chaining behavior implemented as a base handler class.
 */
export default abstract class AbstractHandler implements IHandler {
    private nextHandler: IHandler

    public setNext(handler: IHandler): IHandler {
        this.nextHandler = handler
        // Returning a handler from here will let us link handlers in a
        // convenient way like this:
        // Handler.setNext(Mixpanel).setNext(GB);
        return handler
    }

    public async handle(event: object, context: object) {
        if (this.nextHandler) {
            return this.nextHandler.handle(event, context)
        }
        return null
    }
}