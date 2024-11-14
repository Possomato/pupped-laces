exports.up = knex => knex.schema.createTable('laces', table => {
  table.increments('id')
  table.text('cor')
  table.text('tamanho')
  table.text('foto_1')
  table.text('foto_2')
  table.text('foto_3')


  table.timestamp('created_at').default(knex.fn.now())
  table.timestamp('updated_at').default(knex.fn.now())
})

exports.down = knex => knex.schema.dropTable('laces')