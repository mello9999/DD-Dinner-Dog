module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('TodoList', {
        task: {
            type: DataTypes.STRING(255)
        }
    }, {
        tableName: 'todolists',
        timestamps: false,
    });
    model.associate = models => {
        model.belongsTo(models.User, {foreignKey: 'user_id'})
    };
    return model;
}