import User from '../models/user.js'
var id = 0;
export const users = [];
export function signin(req,res){
res.status(200).json(users.find((user)=>user.username===req.body.username && user.password===req.body.password))
}
export function signup(req,res){
    console.log('methode');
    const user = new User(
        id,
        req.body.username,
        req.body.password,
        req.body.wallet
        );
    console.log('user');
    users.push(user);
    id++;
    res.status(201).json({
        username: user.username,
        password: user.password,
        wallet: user.wallet,
});
}
export function putOnceUser(req,res){
    res.status(200).json({message: "update!",
    username: req.params.username,
    password: req.params.password,
    wallet: req.params.wallet

});
}

