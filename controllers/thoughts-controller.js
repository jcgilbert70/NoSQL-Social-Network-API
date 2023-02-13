const { Thoughts, Users } = require('../models');

const thoughtsController = {

    // create Thought
    // push the created thought's _id to user's thoughts array
    createThought({ params, body }, res) {
        Thoughts.create(body)
            .then(({ _id }) => {
                return Users.findOneAndUpdate(
                    { _id: body.userId },
                    { $push: { thoughts: _id } },
                    { new: true }
                );
            })
            .then((dbUserData) => {
                if (!dbUserData) {
                    return res
                        .status(404)
                        .json({ message: "No User for created thought" });
                }

                res.json({ message: "Thought Created" });
            })
            .catch((err) => res.json(err));
    },

    // get all Thoughts
    getAllThoughts(req, res) {
        Thoughts.find({})
            .populate({
                path: "reactions",
                select: "-__v",
            })
            .select("-__v")
            .sort({ _id: -1 })
            .then((dbThoughtData) => res.json(dbThoughtData))
            .catch((err) => {
                console.log(err);
                res.sendStatus(400);
            });
    },






    /*

       getThoughtsById
   
       updateThoughts
   
       deleteThoughts
   
       addReaction
   
       deleteReaction
   */

};

module.exports = thoughtsController;