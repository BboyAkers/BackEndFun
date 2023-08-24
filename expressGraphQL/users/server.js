import express from 'express';
import expressGraphQL from 'express-graphql';
import { schema } from './schema/schema.js';
const app = express();

const expressGraphQLInit = expressGraphQL.graphqlHTTP;

app.use('/graphql', expressGraphQLInit({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening')
});
