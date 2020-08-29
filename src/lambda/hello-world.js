exports.handler = function (event, context, callback) {
  callback(null, {
    statusCode: 200,
    body: "Hello " + event.queryStringParameters.name,
  });
};
