<template>
  <div class="container-fluid">
    <div class="row">
      <Pokemon v-for="pokemon in state.pokemonAll" :key="pokemon.name" :pokemon-prop="pokemon" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { logger } from '../utils/Logger'
import { pokemonService } from '../services/PokemonService'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      pokemonAll: computed(() => AppState.pokemonAll),
      user: computed(() => AppState.user)
    })
    onMounted(() => {
      try {
        pokemonService.getAll()
      } catch (error) {
        logger.error(error)
      }
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
