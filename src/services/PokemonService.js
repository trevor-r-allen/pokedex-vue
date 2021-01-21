import { logger } from '../utils/Logger'

const { AppState } = require('../AppState')
const { api } = require('./AxiosService')

class PokemonService {
  async getAll() {
    const res = await api.get('')
    res.data.results.forEach(async(pokemon) => {
      try {
        AppState.pokemonAll.push(await this.getOne(pokemon.name))
      } catch (error) {
        logger.error(error)
      }
    })
    // AppState.pokemonAll = res.data.results
    console.log(AppState.pokemonAll)
  }

  // TODO fix getOne
  async getOne(name) {
    const res = await api.get(name)
    // console.log(res.data)
    return res.data
  }
}

export const pokemonService = new PokemonService()
