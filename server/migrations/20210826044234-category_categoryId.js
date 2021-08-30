'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     // field 추가
     await queryInterface.addColumn('category_contents', 'categoy_id', Sequelize.INTEGER);

     // foreign key 연결
     await queryInterface.addConstraint('category_contents', {
       fields: ['categoy_id'],
       type: 'foreign key',
       name: 'FK_category_categoy_id',
       references: {
         table: 'categories',
         field: 'id'
       },
       onDelete: 'cascade',
       onUpdate: 'cascade'
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('category_contents', 'FK_any_name_you_want');
    await queryInterface.removeColumn('category_contents', 'categoy_id');
  }
};
