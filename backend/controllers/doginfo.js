const db = require('../models');
const upload = async (req, res) => {
    console.log(req.body)
    const { id, name, gender, age, breeds, location, about, profileFileData, certificateFileData, picture1Data, picture2Data, picture3Data, picture4Data } = req.body;
    
    if (id) {
        //id, name, specie, "birthDate", gender, picture1, picture2, picture3, picture4, color, certificate, dog_id
        
        const doginfo = await db.DogInfo.findOne({ where: { id: id } })
        if (doginfo) {
            await doginfo.update({ name: name, gender: gender, age: age, breeds: breeds, location: location, about: about, profilePicture: profileFileData, certificate: certificateFileData, picture1: picture1Data, picture2: picture2Data, picture3: picture3Data, picture4: picture4Data })
        } else {
            await db.DogInfo.create({ id: id, name: name, gender: gender, age: age, breeds: breeds, location: location, about: about, profilePicture: profileFileData, certificate: certificateFileData, picture1: picture1Data, picture2: picture2Data, picture3: picture3Data, picture4: picture4Data })
        }
        res.status(200).send({ msg: 'success' });

    } else {
        res.status(404);
    }
}
const getinfo = async (req, res) => {
    
    const dogInfo = await db.DogInfo.findOne({where: {id: req.body.id}});
    
    res.status(200).send(dogInfo);
};
module.exports = {
    getinfo,
    upload
};