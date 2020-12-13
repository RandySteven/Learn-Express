
//@route /user/add
//@access PUBLIC
const addUsers = (req, res)=>{
    const {userId, name, role} = req.body;
    //add ke database
    res.json({message: "POST user", message: "Data inserted successful", data:req.body});
};

const getUsers = (req, res)=>{
    const users = [
    ];
    res.json({message: "GET user", data:users});
};

const updateUser = (req, res)=>{
    const {userId} = req.params;
    const {name, role} = req.body;
    console.log(userId, name, role);
    res.json({message: "UPDATE user", data:{userId, ...(req.body)}});
};

const deleteUser = (req, res)=>{
    const {userId} = req.params;
    res.json({message: "DELETE user", data:req.params});
};

module.exports = {
    addUsers,
    getUsers,
    updateUser,
    deleteUser
}