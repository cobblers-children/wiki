module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'Group',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false
            },
            body: {
                type: DataTypes.STRING(5000)
            },
            image: {
                type: DataTypes.STRING
            }
        }, {
            tableName: 'groups',
            timestamps: true,
            paranoid: true
        }
    );
};
