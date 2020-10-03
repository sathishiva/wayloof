import mongoose from 'mongoose';


const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: String,
  lastname: String,
  age: String,
});

export default mongoose.model('users', userSchema)