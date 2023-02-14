const errorHandler = ('../utils/errorhandler.js')
const Users = require('../models/user');



const register = async (req, res) => {
    const {email, name, password} = req.body
    if (!email||!name||!password){
        res.status(400).json({success:false,  message:'Please provide neccessary information'});
    }
    try {
        const user = await Users.create({...req.body});
        const token = user.generateToken();
        res.status(201).json({ data: {name: user.name, email: user.email}, token});
    } catch (error) {
        const errors = errorHandler(error);
        res.status(400).json({errors});
        
    }
};

const login = async (req, res) => {
    const {email, password} = req.body
    if (!email || !password) {
        res.status(400).json({success:false,  message:'Please provide neccessary information'});
    }
    try {
        const user = await Users.findOne({email})
        if (!user) {
            throw Error('incorrect Email');
        }
        const authenticated = await user.comparePassword(password)
        if (!authenticated) {
            throw Error('incorrect Password');
        }
        const token = user.generateToken();
        res.status(200).json({user:{name: user.name, email: user.email}, token})
    } catch (error) {
        console.log(error);
        res.json(error)
    }
};

module.exports = {register, login}