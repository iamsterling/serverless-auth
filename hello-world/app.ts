import { Context, APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

/*
*/
import * as awsServerlessExpress from 'aws-serverless-express'
import express from 'express'
import cors from 'cors'
import auth from './routes/auth'

//  ----
const app = express()
//  ----
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
//  ----

//  routes
//  ----
app.use("/auth", auth)
//  app.use("/ai", ai)
//  app.use("/test", test)
//  ----

const server = awsServerlessExpress.createServer(app)

export const lambdaHandler = (event: APIGatewayProxyEvent, context: Context) => {
    return awsServerlessExpress.proxy(server, event, context, "PROMISE").promise
}





/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
*/

//  export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
//      try {
//          //  test
//          
//          return {
//              statusCode: 200,
//              body: JSON.stringify({
//                  message: 'hello world',
//              }),
//          };
//      } catch (err) {
//          console.log(err);
//          return {
//              statusCode: 500,
//              body: JSON.stringify({
//                  message: 'some error happened',
//              }),
//          };
//      }
//  };