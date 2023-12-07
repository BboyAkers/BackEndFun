import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import expressPlayground from 'graphql-playground-middleware-express';
import { createHandler } from 'graphql-http/lib/use/express';
import { rootSchema } from './schemas/schema.js';

const app = express();
const graphQLPlayground = expressPlayground.default;

dotenv.config();

app.use(cors());

app.all('/graphql', createHandler({ schema: rootSchema }));
app.get('/playground', graphQLPlayground({ endpoint: '/graphql' }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');
