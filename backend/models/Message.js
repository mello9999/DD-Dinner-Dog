module.exports = (sequelize, DataTypes) => {
    const model = sequelize.define('Message', {
        messageBody: {
            type: DataTypes.STRING(255),
            unique: true
        }
    }, {
        tableName: 'MESSAGE',
        timestamps: true,
    });
    model.associate = models => {
        model.belongsTo(models.Account, { foreignKey: 'sender_id' }),
            model.belongsTo(models.Account, { foreignKey: 'receiver_id' })
    }
    return model;
}