module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Address', {
        street: {
            type: DataTypes.INTEGER
        },
        city: {
            type: DataTypes.DOUBLE
        },
        province: {
            type: DataTypes.DOUBLE
        },
        zipcode: {
            type: DataTypes.BOOLEAN
        },
        country: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'ADDRESS',
        timestamps: false,
    });
    model.associate = models => {
        model.belongsTo(models.DogInfo, { foreignKey: 'dog_id' })
    };
    return model;
}