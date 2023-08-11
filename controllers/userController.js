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
        .findOne({ _id: req.params.studentId})
        .populate({path: 'thoughts', select: '-__v'})
        .populate({path: 'friends', select: '-__v'});
        
        if (!user) {
            return res.status(404).json({ message: 'No student with that ID' })
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



}