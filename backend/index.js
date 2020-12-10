require('dotenv').config();

const express = require('express');
const app = express();
const cloudinary = require("cloudinary").v2;
const bodyParser = require('body-parser');
const cors = require('cors');
const todoListRoutes = require('./routes/todoList');
const userRoutes = require('./routes/user');
const doginfoRoutes = require('./routes/doginfo');
const db = require('./models');
require('./config/passport/passport');

app.use(cors());

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
  });
app.use('/todo-list', todoListRoutes);
app.use('/users', userRoutes)
app.use('/doginfo', doginfoRoutes)
app.post("/image-upload",async (request, response) => {
    
    // collected image from a user
    const data = request.body.images;
    // upload image here
    const results = {};

    for (let index in data) {
        results[data[index].name] = await cloudinary.uploader.upload(data[index].data)
    }

     response.status(200).send({
        message: "success",
        results,
      })

    
    
});
//{force: true} if database already exist
db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    });
});