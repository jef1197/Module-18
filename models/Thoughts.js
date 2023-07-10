const { Schema, model } = require('mongoose');
const reaction = require('./Reaction');

// Schema to create Thoughts model
const thoughtsSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      max_length: 280,
      min_length: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,      
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reaction],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

// Virtual to find total reactions on thoughts
thoughtsSchema
.virtual('reactionCount')
.get( function() {
  return this.reactions.length;
})

const Thoughts = model('thoughts', thoughtsSchema);

module.exports = Thoughts;
