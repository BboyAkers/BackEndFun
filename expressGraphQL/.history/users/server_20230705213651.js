import express from 'express';
import expressGraphQL from 'express-graphql';

const app = express();

const expressGraphQLInit = expressGraphQL.graphqlHTTP;

app.use('/graphql', expressGraphQLInit({
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening')
});
