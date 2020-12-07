require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
const todoListRoutes = require('./routes/todoList');
const userRoutes = require('./routes/user');
const doginfoRoutes = require('./routes/doginfo');
const db = require('./models');
require('./config/passport/passport');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/todo-list', todoListRoutes);
app.use('/users', userRoutes)
app.use('/doginfo', doginfoRoutes)
//{force: true} if database already exist
db.sequelize.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running at port ${process.env.PORT}`);
    });
});