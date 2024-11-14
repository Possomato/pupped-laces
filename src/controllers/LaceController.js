const knex = require('../database/knex');
const AppError = require('../utils/AppError');

class LaceController{
  async create(req, res) {
    try {
      const { cor, tamanho } = req.body;

      const corTable = await knex('laces').where({ cor }).first();
      const tamanhoTable = await knex('laces').where({ tamanho }).first();

      if (corTable && tamanhoTable) {
        throw new AppError('Cadastro já existente');
      }

      const [newLace] = await knex('laces')
        .insert({
          cor,
          tamanho,
        })
        .returning('*');

      res.json(newLace);
    } catch (error) {
      if (error instanceof AppError) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: 'Erro no servidor' });
      }
    }
  }


  async index(req, res){
    const {cor} = req.query

    const index = await knex('laces')
      .whereLike('cor', `%${cor}%`)
      .orderBy('cor')
    res.json(index)
  }

  async show(req, res){

  }
}

module.exports = LaceController