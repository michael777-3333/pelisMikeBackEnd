import User from '../models/user.model.js'

export const getUser = async(req,res)=>{
    try {
        const user = await User.findById(req.params.id)
        if (!user) return res.status(404).json({ message: "user not found" });
        res.json(user)
    } catch (error) {
        res.json(error)
    }
    
}

export const updateUser = async (req,res)=>{
    console.log(req.body,'sss');
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        if (!user) return res.status(404).json({ message: "user not found" });
        res.json(user)
    } catch (error) {
        return res.status(404).json({ message: "user not found" });
    }
   
}
