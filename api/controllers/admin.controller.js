import User from "../models/user.model.js"
const getUsers = async (req, res) => {
    try {
        console.log('nithin')
        const result = await User.find()
        if (result) {
            res.status(200).json(result)
        }
    } catch (error) {
        console.log(error.message)
    }
}
const verfyUser = async (req, res) => {
    try {
        const updateUser = await User.updateOne(
            { _id: req.body.id },
            { $set: { verified: !req.body.verify } }
        ).exec();

        if (updateUser) {
            // The update was successful, and at least one document was modified
            res.status(200).send("User verified successfully");
        } else {
          
            res.status(404).send("User not found or not modified");
        }
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send("Internal Server Error");
    }
};


export {
    getUsers,
    verfyUser
}