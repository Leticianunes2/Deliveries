
const { NOW, Sequelize } = require("sequelize");

const entregas = (sequelize, DataTypes) => {
    const entregas = sequelize.define('Entregas', {
        nome: { type: Sequelize.nome, defaultValue: Sequelize.NOW },
        pesokg: DataTypes.FLOAT,// peso em kg do produto
        telefone: DataTypes.STRING(15), 
        endereco: { type: DataTypes.STRING(25), 
                  defaultValue: 'EM ANDAMENTO' } //em andamento, finalizada, entregue
    }, { tableName: 'deliveries' })

    entregas.associate = (models) => {
        entregas.hasMany(models.nome,
          { foreignKey: 'entrega_id'});
        entregas.belongsTo(models.endereco,
          { foreignKey: 'endereco_id'});
        entregas.belongsTo(models.telefone,
          { foreignKey: 'telefone_id'});
          entregas.belongsTo(models.pesokg,
          { foreignKey: `pesokg_id`});
      };

    return Entregas
}
module.exports = entregas;
    

