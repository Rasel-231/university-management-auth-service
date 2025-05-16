
import mongoose from 'mongoose';
import app from "./app";
import config from './config';


async function database() {
try{
await mongoose.connect(config.database_url as string);
console.log("Database Connected Successfull");

app.listen(config.port, () => {
console.log(`Applications listening on port ${config.port}`)
})
}
catch(err){
console.log('Database connected Problem',err);
}
}
database()

