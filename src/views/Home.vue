<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Cabecera></Cabecera>
  </div>
</template>

<script>
// @ is an alias to /src
import Cabecera from '@/components/Cabecera.vue'
import ListExample from '@/components/List.vue'

export default {
  name: 'home',
  components: {
    Cabecera,
    ListExample
  }
}
</script>
