module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Health', {
        numberOfBreeding: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.DOUBLE
        },
        height: {
            type: DataTypes.DOUBLE
        },
        vaccine: {
            type: DataTypes.BOOLEAN
        },
        disease: {
            type: DataTypes.STRING(255)
        },
        bloodGroup: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'HEALTH',
        timestamps: false,
    });
    model.associate = models => {
        model.belongsTo(models.DogInfo, { foreignKey: 'dog_id' })
    };
    return model;
}