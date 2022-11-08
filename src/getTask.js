const AWS = require('aws-sdk')

const getTask = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try {
    const result = await dynamoDb.get({
        TableName: "TaskTable",
        Key: {
          id,
        },
      })
      .promise();

    const task = result.Item;

    return {
      status: 200,
      body: task,
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify(error),
    };
  }
};

module.exports = {getTask}
