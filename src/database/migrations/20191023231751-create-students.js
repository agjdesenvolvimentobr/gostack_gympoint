
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('students',
    {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primeryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      idade: {
        type: Sequelize.INTEGER,
      },
      peso: {
        type: Sequelize.FLOAT,
      },
      altura: {
        type: Sequelize.FLOAT,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),
  down: (queryInterface) => queryInterface.dropTable('students'),
};