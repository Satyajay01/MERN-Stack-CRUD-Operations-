import User from "../model/userModel.js";


// Create API
export const create = async(req, res)=>{
    try {
        const userData = new User(req.body);
        if (!userData) {
            return res.status(404).json({msg: "User data not found"});
        }
        const SavedData = await userData.save();
        res.status(200).json(SavedData);


    } catch (error) {
        res.status(500).json({error: error});
    }
};


// Read API
export const getAll = async(req, res)=>{
    try {
        
        const userData = await User.find();
        if (!userData) {
            return res.status(404).json({msg: "User data not found"});
            
        }
        res.status(200).json(userData);

    } catch (error) {
        res.status(500).json({error: error});
    }
}