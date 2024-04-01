const users=[
    {
        id:1,
        name:'John'
    },
    {
        id:2,
        name:'Smith'
    },
    {
        id:3,
        name:'Jane'
    },
    {
        id:4,
        name:'Paul'
    }
];

const getUsers=()=>{
    return users;
}

const getUserById=(id)=>{
    return users.find(user=>user.id==id); //Find the user by id
}

module.exports={
    getUsers,
    getUserById
}