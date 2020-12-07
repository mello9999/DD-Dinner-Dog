module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('DogInfo', {
        name: {
            type: DataTypes.STRING(255)
        },
        age: {
            type: DataTypes.INTEGER
        },
        gender: {
            type: DataTypes.STRING(255)
        },
        breeds: {
            type: DataTypes.STRING(255)
        },
        about: {
            type: DataTypes.TEXT
        },
        location: {
            type: DataTypes.TEXT
        },
        profilePicture: {
            type: DataTypes.TEXT 
        },
        picture1: {
            type: DataTypes.TEXT 
        },
        picture2: {
            type: DataTypes.TEXT 
        },
        picture3: {
            type: DataTypes.TEXT 
        },
        picture4: {
            type: DataTypes.TEXT 
        },
        certificate:{
            type: DataTypes.TEXT 
        }
    }, {
        tableName: 'DOG_INFO',
        timestamps: false,
    });
    model.associate = models => {
            model.hasOne(models.Health, { foreignKey: 'health_id' }),
            model.hasOne(models.Address, { foreignKey: 'address_id' })

    };
    return model;
}