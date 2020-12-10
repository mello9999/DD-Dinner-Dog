module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Like', {
        ownerID: {
            type: DataTypes.STRING(255)
        },
        likeID: {
            type: DataTypes.STRING(255)
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
    
    return model;
}