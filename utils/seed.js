const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThought } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');
    await Thought.deleteMany({});
    await User.deleteMany({});

    const users = [];
    const thoughts = getRandomThought(20)

    for (let i = 0; i < 20; i++) {
        const username = getRandomUsername();
        const email = `${username}@gmail.com`;
        
        users.push({
            username,
            email,
        });
    }

    await User.collection.insertMany(users);
    await Thought.collection.insertMany(thoughts)

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete!');
    process.exit(0)
})