"use strict";

module.exports.hello = async (event,context,callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Hello world",
      },
      null,
      2
    ),
  };

  return callback(null,response)
};
