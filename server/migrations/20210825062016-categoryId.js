'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
     // field 추가
     await queryInterface.addColumn('category_contents', 'WOWId', Sequelize.INTEGER);

     // foreign key 연결
     await queryInterface.addConstraint('category_contents', {
       fields: ['WOWId'],
       type: 'foreign key',
       name: 'FK_any_name_you_want',
       references: {
         table: 'categories',
         field: 'id'
       },
       onDelete: 'cascade',
       onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
