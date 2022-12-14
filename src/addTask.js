const {v4} = require('uuid')

const AWS = require('aws-sdk')


const addTask = async (event) => {
  const dynamoDb = new AWS.DynamoDB.DocumentClient();
  const { title, description } = JSON.parse(event.body);

  const createdAt = new Date().toString();

  const id = v4();

  const newTask = {
    id,
    title,
    description,
    createdAt,
    done: false
  };

  try {
    await dynamoDb.put({
        TableName: "TaskTable",
        Item: newTask,
      })
      .promise();

    return {
      statusCode: 200,
      body: JSON.stringify(newTask),
    };
  } catch (error) {

    // console.log(error)
    return {
      statusCode: 500,
      body: JSON.stringify(error),
    };
  }
};


module.exports={addTask}
