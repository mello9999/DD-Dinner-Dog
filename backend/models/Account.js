module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Account', {
        username: {
            type: DataTypes.STRING(255),
            unique: true
        },
        password: {
            type: DataTypes.STRING(255)
        },
        phoneNumber: {
            type: DataTypes.STRING(255)
        },
        premium: {
            type: DataTypes.BOOLEAN
        },
        status: {
            type: DataTypes.STRING(255)
        },
        picture: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'ACCOUNT',
        timestamps: false,
    });
    model.associate = models => {
        model.hasOne(models.DogInfo, { foreignKey: 'dog_id' })
    }
    return model;
}