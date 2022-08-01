const User = require('../models/User');

module.exports = {
    getUsers(req, res) {
        User.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(500).json(err))
    },
    getSingleUser(req, res) {
        User.findOne({_id: req.params.userId})
        .select('-__v')
        .populate('thoughts')
        .populate('friends') 
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
    updateUser(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((user) => 
            !user
              ? res.json(404).json({ message: 'No user with that Id!' })
              : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
    },
    deleteUser(req, res) {
        User.findOneAndRemove({_id: req.params.userId})
        .then((user) => 
          !user
            ? res.status(404).json({ message: 'No user with that ID'})
            : res.json({ message: 'User deleted' })
          )
        .catch((err) => res.status(500).json(err))
    },
    addUserFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId},
            { $addToSet: { friends: { _id: req.params.friendId}}},
            { runValidators: true, new: true}
        )
        .then((user) => 
          !user 
            ? res.status(404).json({ message: 'no user with that ID' })
            : res.json(user)
        )
        .catch((err) => res.json(err))
    },
    removeUserFriend(req, res) {
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: { $in: [req.params.friendId] } } },
            { runValidators: true, new: true }
        )
        .then((user) => 
          !user
            ? res.status(404).json({ message: 'No user with that id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err))
    },

}