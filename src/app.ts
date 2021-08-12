import express from 'express';

// Swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import {options} from './swagger-config';

import IndexRoutes from './routes';

const app = express();


app.set('port',  process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const specs = swaggerJsDoc(options);

// Routes
app.use('/api', IndexRoutes);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

export default app;