const getUsers = (req,res)=>{
    res.send('Get users successful');
}
const addUser = (req,res)=>{
    console.log(req.body);
    res.json({status:'User added successfully'})
}
const updateUser = (req,res)=>{
    console.log(req.body);
    res.json({status:'User updated successfully'})
}
module.exports = {getUsers,addUser,updateUser}