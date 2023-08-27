const { ObjectId } = require('mongoose').Types;
const {User, Thought} = require('../models/index'); 

module.exports = {
    // Get all Users
    async getAllUsers(req, res) {
        try {
            const user = await User.find();
            res.json(user);
        } catch (err) {
        console.log(err);
        return res.status(500).json(err);
        }
    },
    // Get a single user
    async getSingleUser(req, res) {
    try {
        const user = await User
        .findOne({ _id: req.params.userId})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'});
        
        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' })
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
   // Create a new user
   async createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.json(user);
    } catch (err) {
    console.log(err);
    return res.status(500).json(err);
    }
},
// update a user
    async updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},
// delete a user
async deleteUser(req, res) {
    try {
        const user = await User.findOneAndDelete({ _id: req.params.userId });

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        await Thought.deleteMany({ _id: { $in: user.thoughts } });
        res.json({ message: 'User and thoughts associated to user deleted!' })
    } catch (err) {
        res.status(500).json(err);
    }
},
// add a friend
async addFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $push: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        );

        if (!user) {
            return res.status(404).json({ message: 'No user with that ID' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},
// delete a friend
async deleteFriend(req, res) {
    try {
        const user = await User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friends: req.params.friendId } },
            { runValidators: true, new: true }
        );   
    
        if (!user) {
            return res.status(404).json({ message: 'Check user and friend ID!' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json(err);
    }
},
};