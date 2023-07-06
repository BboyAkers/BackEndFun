import express from 'express';
import expressGraphQL from 'express-graphql';

const app = express();

const expressGraphQL = expressGraphQL.graphqlHTTP;

app.listen(4000, () => {
  console.log('Listening')
});
