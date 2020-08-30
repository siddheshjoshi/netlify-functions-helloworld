exports.handler = function(event, context, callback) {
  const headers = callback(null, {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
    },
    body: "Hello " + event.queryStringParameters.name,
  });
  //callback(error, success)
};
