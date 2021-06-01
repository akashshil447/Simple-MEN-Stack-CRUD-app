const User = require('../models/user')


// get user function/request
const getUser = async (req, res)=>{

    try {
        const users = await User.find()
        res.status(200).json(users)    
    } catch (error) {
        res.status(404).send('Error:' + error)    
    }
    }

// post user function/request

const  postUser = async(req,res)=>{

    const user = new User({
        name : req.body.name,
        age : Number(req.body.age),
        gender : req.body.gender
    })
    try{
        const u1 = await user.save()
        res.status(200).json(u1);

    }catch(error){
        res.status(404).send('Error:' + error)    
    }

}

// delete user function/request

const deleteUser =  async(req,res)=>{

    try {

        const user = await User.findById(req.params.id)
        user.delete();
        const updatedUsers = await User.find()
        res.status(200).json(updatedUsers)
        
    } catch (error) {

        res.status(404).send('Error:' + error)   
    }

}

module.exports = {getUser,postUser,deleteUser}