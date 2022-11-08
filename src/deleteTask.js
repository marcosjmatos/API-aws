const AWS = require('aws-sdk')

const deleteTask = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const { id } = event.pathParameters;

  try {
    await dynamoDb
      .delete({
        TableName: "TaskTable",
        Key: {
          id,
        },
      })
      .promise();

    return {
      status: 204,
      body: {
        message: "Task Deleted",
      },
    };
  } catch (error) {
    return {
      status: 500,
      body: JSON.stringify(error),
    };
  }
};

module.exports = {deleteTask}
