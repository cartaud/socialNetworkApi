const User = require('../models/User');

// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

// `/api/users/:userId/friends/:friendId`**

// * `POST` to add a new friend to a user's friend list

// * `DELETE` to remove a friend from a user's friend list

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('thoughts', 'friends')
        .then((user) => 
            !user
              ? res.status(404).json({message: 'No user with that ID'})
              : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    createUser(req, res) {
        // // example data
    // {
    //   "username": "lernantino",
    //   "email": "lernantino@gmail.com"
    // }
        User.create(req.body)
          .then((dbUserData) => res.json(dbUserData))   
          .catch((err) => res.status(500).json(err))
    },
    // updateUser(req, res) {
    //     User.update({_id: req.params.userId})
    // },
    addFriend(req, res) {
        User.findOneAndUpdate(
            {}
        )
    }

    
}