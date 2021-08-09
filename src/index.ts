import express from 'express';

import IndexRoutes from './routes' 
const app = express();

app.set('port',  process.env.PORT || 3000);

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/health', IndexRoutes)

app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
})