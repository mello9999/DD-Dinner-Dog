module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Like', {
        ownerID: {
            type: DataTypes.INTEGER
        },
        likeID: {
            type: DataTypes.INTEGER
        },
        ownerName: {
            type: DataTypes.STRING(255)
        },
        likeName: {
            type: DataTypes.STRING(255)
        }
    },{
        tableName: 'LIKE',
        timestamps: true,
    });
    model.associate = models => {
        model.belongsTo(models.User,{foreignKey: 'ownerID'})
        model.belongsTo(models.User,{foreignKey: 'likeID'})
    }
    return model;
}