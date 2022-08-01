const usernames = [
    'UniqueOgre',
    'ShotAster',
    'CravenCandle',
    'WonkyDay',
    'SoySleep',
    'DreamGuitar',
    'ClashMarker',
    'LowFanatic',
    'SpankBloom',
    'PilotTong',
    'SloppySupport',
    'WhisperHat',
    'PayHype',
    'RusticEchelon',
    'AllySwitch',
    'SecularBump',
    'PortPope',
    'PastorCircle',
    'HydroBrew',
    'MoralNumb',
    'PirateTsunami',
    'PiggyClutch',
    'PolarSupply',
    'GrammarPhysics',
];

const thoughts = [
    'The scream in your head will never be out of breath.',
    'Do fish in water have their hidden life where they go to school, hang out, study, and get married?',
    'If everyone had roller skates instead of feet, would there be cars or would they go rollerblading everywhere?',
    'We will never know what memories we had as children and we will never remember them.',
    'We know our parents for whole our life, while they know us only part of their lives.',
    'Someone was born at this very moment, and someone lost his life at this very moment.',
    'Our brain has never experienced some things, and yet it can tailor a scenario in its head as if it had happened.',
    'If the tomato is a fruit, then ketchup is the jam.',
    'If I were a book, what title would I have?',
    'The hospital where you were born is the only building you left without entering.',
    'Humans invented the sounds produced by dinosaurs.',
    'Maybe it’s better not to kill the spider, because if I kill him, his family and friends can come to the funeral and in that way, I will summon many more spiders.',
    'Before the camera was invented, no one had seen themselves with their eyes closed.',
    'The skeleton is not in us. We are the brain. So we’re in a skeleton.',
    'Each person has a different image of us and tailors a version of us that we do not know.',
    'Children with an imaginary friend are creative, while adults with an imaginary friend are schizophrenics.',
    'When you wait for a waiter, you become a waiter.',
    'What if we met someone in a dream and had the same dream, but we will never find out?',
    'We all have three voices in us. One that we hear in our head, one that we hear when we speak, and one that other people hear.',
    'The letter x is used more in mathematics than in grammar and sentences.',
    'Do animals think we are aliens because we don’t look like them?',
    'If we were called differently, would we behave like a different person?',
    'Is sand called sand because it is located between the sea and the land?',
    'Why is a building called a building when it has already been built?',
    'If you hit yourself and it hurts, are you strong or weak?',
];

const reactions = [
  'I disagree!',
  'I tried your algorithm, here were the results',
  'This was awesome',
  'Thank you for the great content',
  'Please check out my video response',
  'Like and subscribe to my channel please',
  'Reply: The side effects of in app purchases on digital marketplaces',
]

const getRandomIndex = (arr) => Math.floor(Math.random() * arr.length)

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const getRandomUsername = (index) => usernames[index];

const getRandomThought = (int) => {
    let results = []
    if (int <= 1) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomArrItem(usernames),
            reactions: [...getRandomReactions(3)]
        })
    } else {
        for (let i = 0; i < int; i++) {
            results.push({
                thoughtText: getRandomArrItem(thoughts),
                username: getRandomArrItem(usernames),
                reactions: [...getRandomReactions(3)]
            })
        }
    }
    return results
}

const getRandomReactions = (int) => {
    let results = []
    if (int <= 1) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomArrItem(usernames),
        })
    } else {
        for (let i = 0; i < int; i++) {
            results.push({
                reactionBody: getRandomArrItem(reactions),
                username: getRandomArrItem(usernames),
            }) 
        }
    }
    return results
}

module.exports = { getRandomUsername, getRandomThought, getRandomIndex }