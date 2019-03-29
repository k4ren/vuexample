<template>
  <div class="about">
    <ListExample></ListExample>
  </div>
</template>
<script>
// @ is an alias to /src
import ListExample from '@/components/List.vue'

export default {
  name: 'about',
  components: {
    ListExample
  }
}
</script>