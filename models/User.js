const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    google_id: String,
    email: String,
    password: String,
    user_name: String,
    signup_date: { type: Date, default: Date.now() }
});

mongoose.model('users', userSchema);