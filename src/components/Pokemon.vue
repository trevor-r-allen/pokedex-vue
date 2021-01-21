<template>
  <div class="col-3">
    <div class="card">
      <img class="card-img-top" :src="pokemonProp.sprites.front_default" alt="">
      <div class="card-body">
        <h4 class="card-title" v-if="pokemonProp">
          {{ pokemonProp.name }}
        </h4>
        <p class="card-text" v-if="pokemonProp">
          {{ pokemonProp.types[0].type.name }} | {{ pokemonProp.types[1].type.name ? pokemonProp.types[1].type.name : '' }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Pokemon',
  props: {
    pokemonProp: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({
      account: computed(() => AppState.account)
    })
    return {
      state
    }
  }

}
</script>

<style>

</style>
