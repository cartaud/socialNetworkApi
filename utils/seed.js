const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThought, getRandomIndex } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const thoughts = getRandomThought(20)
    await Thought.collection.insertMany(thoughts)

    const findThoughts = (user) => {
        for(let i = 0; i < thoughts.length; i++) {
            if (thoughts[i].username == user) {
                return thoughts[i]._id
            }
        }
    }


    for (let i = 0; i < 20; i++) {
        const username = getRandomUsername(i);
        const email = `${username}@gmail.com`;
        
        users.push({
            username,
            email,
            thoughts: [findThoughts(username)],
            friends: []
        });
    }

    await User.collection.insertMany(users);
    

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!');
    process.exit(0)
})