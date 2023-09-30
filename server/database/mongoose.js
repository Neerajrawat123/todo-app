import mongoose from 'mongoose';
mongoose.Promise = global.Promise;


export default {
    connect(){

        mongoose.connect('mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.1',{ useNewUrlParser: true })
    }
}

