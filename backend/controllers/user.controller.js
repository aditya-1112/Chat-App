import User from "../models/user.model.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        //get all other users except current logged in user
        const loggedInUserId = req.user._id;
        const users = await User.find({_id: {$ne: loggedInUserId}}).select("-password");
        res.status(200).json(users);
    } 
    catch (error) {
        console.log("Error in users controller:", error.message);
        res.status(400).json({error:"Internal server error."});
    }
}