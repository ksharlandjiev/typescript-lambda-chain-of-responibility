/**
 * Response interface for API Gateway proxy response. 
 */
export default interface iResponse {
    "isBase64Encoded"?: boolean,
    "statusCode"?: number,
    "headers"?: object,
    "body": string | object
}
  