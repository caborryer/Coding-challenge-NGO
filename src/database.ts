import mongoose from 'mongoose';

import {mongodb} from './keys';
mongoose.connect(mongodb.connectionString, {
    useNewUrlParser: true
})
.then(db => console.log('Db is Conected'))
.catch(err => console.log(err));

