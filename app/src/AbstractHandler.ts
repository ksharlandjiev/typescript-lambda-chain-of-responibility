import IHandler from './interfaces/IHandler'
import iResponse from './interfaces/iResponse'
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

    public handle(event: object, context: any, callback: any) : iResponse {
        if (this.nextHandler) {
            return this.nextHandler.handle(event, context, callback)
        }
        console.log('[AbstractHandler][handle]', context)
        
        const response = {
            "statusCode": 200,
            "body": JSON.stringify(context && context.response || {}),
            "isBase64Encoded": false
        };
        callback(null, response);
    }
}