/* Import faunaDB sdk */
const faunadb = require("faunadb");
const encoding = require("encoding");
const q = faunadb.query;

exports.handler = async (event, context) => {
  /* configure faunaDB Client with our secret */

  const client = new faunadb.Client({
    secret: process.env.FAUNADB_SERVER_SECRET,
  });

  console.log(`Function 'insert-item' invoked`);

  let plant = {};
  plant.plantName = event.queryStringParameters.plantName;
  plant.plantId = event.queryStringParameters.plantId;

  let plantObj = {
    data: plant,
  };
  return client
    .query(q.Create(q.Ref("classes/plants"), plantObj))
    .then((response) => {
      console.log("success", response);
      /* Success! return the response with statusCode 200 */
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      /* Error! return the error with statusCode 400 */
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
