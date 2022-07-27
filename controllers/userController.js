const { User } = require('../models/User');

// * `PUT` to update a user by its `_id`

// * `DELETE` to remove user by its `_id`

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .then((user) => 
            !user
              ? res.status(404).json({message: 'No user with that ID'})
              : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },
    // // example data
    // {
    //   "username": "lernantino",
    //   "email": "lernantino@gmail.com"
    // }
    createUser(req, res) {
        User.create(req.body)
          .then((dbUserData) => res.json(dbUserData))   
          .catch((err) => res.status(500).json(err))
    },
    // updateUser(req, res) {
    //     User.update({_id: req.params.userId})
    // },
    
}