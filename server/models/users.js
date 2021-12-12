import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    first_name: String,
    last_name: String,
    dob: Date,
    email: String,
    mobile: String,
    zip_code: Number,
    city_id: Number, //PK NOT NULL
    user_trust_score_id: Number, //PK NULL
    is_privacy_enabled: Boolean,
  },
  { collection: "user" }
);

export default mongoose.model("users", userSchema);
