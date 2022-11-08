const AWS = require('aws-sdk')


const listTasks = async ()=> {
    const dynamoDb = new AWS.DynamoDB.DocumentClient();

    try {
        const results = await dynamoDb.scan({
            TableName:'TaskTable'
        }).promise()

        const tasks = results.Items

        return {
            status : 200,
            body:tasks
        }
        
    } catch (error) {

        return {
            status:500,
            body:error
        }
        
    }




}


module.exports = {listTasks}
