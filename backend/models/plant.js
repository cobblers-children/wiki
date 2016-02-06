module.exports = function(sequelize, DataTypes) {
    return sequelize.define(
        'Plant',
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            group: {
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
            tableName: 'plants',
            classMethods: {
                associate: function(db) {
                    db.Plant.belongsTo(db.Group, {foreignKey: 'group'});
                }
            },
            timestamps: true,
            paranoid: true
        }
    );
};
