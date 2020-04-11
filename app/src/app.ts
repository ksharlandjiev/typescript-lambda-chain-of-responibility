// import 'source-map-support/register' //- enable for debugging!
import ChainsConfig from './config/ChiansConfig'
import HandlerFactory from './HandlerFactory'
import IHandler from './interfaces/IHandler'

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 * @param {string} event.resource - Resource path.
 * @param {string} event.path - Path parameter.
 * @param {string} event.httpMethod - Incoming request's method name.
 * @param {Object} event.headers - Incoming request headers.
 * @param {Object} event.queryStringParameters - query string parameters.
 * @param {Object} event.pathParameters - path parameters.
 * @param {Object} event.stageVariables - Applicable stage variables.
 * @param {Object} event.requestContext - Request context, including authorizer-returned key-value pairs, requestId, sourceIp, etc.
 * @param {Object} event.body - A JSON string of the request payload.
 * @param {boolean} event.body.isBase64Encoded - A boolean flag to indicate if the applicable request payload is Base64-encode
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 * @param {string} context.logGroupName - Cloudwatch Log Group name
 * @param {string} context.logStreamName - Cloudwatch Log stream name.
 * @param {string} context.functionName - Lambda function name.
 * @param {string} context.memoryLimitInMB - Function memory.
 * @param {string} context.functionVersion - Function version identifier.
 * @param {function} context.getRemainingTimeInMillis - Time in milliseconds before function times out.
 * @param {string} context.awsRequestId - Lambda request ID.
 * @param {string} context.invokedFunctionArn - Function ARN.
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 * @returns {boolean} object.isBase64Encoded - A boolean flag to indicate if the applicable payload is Base64-encode (binary support)
 * @returns {string} object.statusCode - HTTP Status Code to be returned to the client
 * @returns {Object} object.headers - HTTP Headers to be returned
 * @returns {Object} object.body - JSON Payload to be returned
 *
 */
export const lambdaHandler = async (event, context) => {
    try {
        if (ChainsConfig && event && event.requestContext &&  event.requestContext.path && ChainsConfig[event.requestContext.path]) {

            const chainConfig = ChainsConfig[event.requestContext.path]
            const handler = wireChain(chainConfig.chain)

            handler && handler.handle(event, context)

            return chainConfig.response
        }

    } catch (err) {
        console.log(err)
        return err
    }

    return {
        'statusCode': 404,
        'body': JSON.stringify({
            error: 'path not found',
        })
    }
}

/**
 * Chaining all Commands together to be executed one by one.
 * @param handlers Array of all handlers to be wired together.
 */
function wireChain(handlers: string[]): IHandler|null {

    let handlerInstance = null
    const commands = []
    handlers && handlers.forEach(handler => {
        handlerInstance =  HandlerFactory.getHandler(handler)

        // Wire the chian.
        if (commands.length > 0 ) {
            commands[ commands.length - 1].setNext(handlerInstance)
        }
        commands.push(handlerInstance)
    })

    return commands.length && commands[0] || null
}