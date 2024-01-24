import User from '../models/user.model.js'


export const updateUser = async (req,res)=>{
    const user = await User.findByIdAndUpdate(req.params.id)
    if (!user) return res.status(404).json({ message: "user not found" });
    res.json(user)
}