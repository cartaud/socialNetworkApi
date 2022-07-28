const router = require('express').Router();
const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addThoughtReaction,
    removeThoughtReaction
} = require('../../controllers/thoughtController');

// /api/thoughts
router.get(getThoughts).post(createThought)

// /api/thoughts/thoughtId
router
 .route('/:thoughtId')
 .get(getSingleThought)
 .put(updateThought)
 .delete(deleteThought)

router.route('/:thoughtId/reaction').post(addThoughtReaction)

router.route(':thoughtId/reaction/:reactionId').delete(removeThoughtReaction)

module.exports = router