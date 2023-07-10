const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [this],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// Virtual to find total friends on User
userSchema
.virtual('friendCount')
.get( function() {
  return this.friends.length;
})

const User = model('user', userSchema);

module.exports = User;
