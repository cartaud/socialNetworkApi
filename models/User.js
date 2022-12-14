const { Schema, model } = require('mongoose');

const validateEmail = (email) => {
    const re = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
    return re.test(email)
}

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trimmed: true,
        },
        email: {
            type: String,
            unique: true,
            required: true,
            validate: {
                validator: function(v) {
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
                },
                message: "Please enter a valid email"
            },
        },
        thoughts: [ //Array of `_id` values referencing the `Thought` model
            {
                type: Schema.Types.ObjectId, ref: 'thought'
            }
        ],
        friends: [ //Array of `_id` values referencing the `User` model (self-reference)
            {
                type: Schema.Types.ObjectId, ref: 'user'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length
  })

const User = model('user', userSchema);

module.exports = User