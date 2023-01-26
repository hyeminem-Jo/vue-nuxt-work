const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  password: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  id: String,
});

const UserModel = mongoose.model('Users', UserSchema);

export default UserModel;