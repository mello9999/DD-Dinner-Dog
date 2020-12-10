const db = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { username, password, name} = req.body;
    const targetUser = await db.User.findOne({ where: { username: username } });
    if (targetUser) {
        res.status(400).send({ message: "Username already taken." });
    } else {
        const salt = bcryptjs.genSaltSync(12);
        const hashedPassword = bcryptjs.hashSync(password, salt);

        await db.User.create({
            username: username,
            password: hashedPassword,
            name: name,
            
        });
        targetUser1 = await db.User.findOne({ where: { username: username } });
        await db.DogInfo.create({
            id: targetUser1.id,
            name: "", gender: "", breeds: "", location: "", about: ""
        });

        //const targetUser = await db.User.findOne({ where: { username: username } });
        // await db.DOG_INFO.create({
        //     username:username
        // });
        res.status(201).send({ message: "User created", id:targetUser1.id });
    }
}

const loginUser = async (req, res) => {

    const { username, password } = req.body;

    const targetUser = await db.User.findOne({ where: { username: username } })
    if (!targetUser) {
        res.status(400).send({ message: "Username or password is wrong." });
    } else {
        const dog = await db.DogInfo.findOne({ where: { id: targetUser.id } })
        const isCorrectPassword = bcryptjs.compareSync(password, targetUser.password);
        if (isCorrectPassword) {
            const payload = {
                id: targetUser.id,
                name: targetUser.name
            };
            const token = jwt.sign(payload, process.env.SECRET_OR_KEY, { expiresIn: 3600 });
            res.status(200).send({
                token: token,
                message: "Login successful."
            })
        } else {
            res.status(400).send({ message: "Username or password is wrong." });
        }
    }
}
/*, profilePicture: dog.profilePicture, certificate: dog.certificate, picture1: dog.picture1, picture2: dog.picture2, picture3: dog.picture3, picture4: dog.spicture4 */
const like = async (req, res) => {
    
    const  uid  = req.body.id;
    
    let f = { where: { id: uid } };
    
    const targetLike = await db.Like.findAll(f)
    
    res.status(200).send({
        users: targetLike,
        message: "Like successful."
    })
}
module.exports = {
    registerUser,
    loginUser,
    like
}