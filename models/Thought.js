const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const moment = require('moment')

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: new Date(),
            get: formatDate,
        },
        username: {
            type: String,
            required: true
        },
        reactions: [Reaction], //Array of nested documents created with the `reactionSchema`
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }
)

thoughtSchema
  .virtual('reactionCount')
  .get(function() {
    return this.reactions.length
})

function formatDate(date) {
    return moment(date).format("MMM Do YYYY, [at] h:mm a")
}

const Thought = model('thought', thoughtSchema);

module.exports = Thought