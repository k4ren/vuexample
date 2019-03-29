<template>
    <div>
        <h1>List</h1>
        <ul class="list-group">
            <li v-for="(item, index) of orderArray" :key="item.id" @click="aumentar(index)"
            class="list-group-item d-flex justify-content-between align-items-center">
               {{index}} - {{item.nombre}}
                <span class="badge badge-primary badge-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <button class="btn btn-danger btn-block" @click="reset()">Reset</button>
    </div>
</template>

<script>

import {mapState, mapMutations} from 'vuex';


export default {
    name: 'ListExample',
    computed: {
        ...mapState(['frutas']), 
        orderArray(){
            return this.frutas.sort((a, b) => b.cantidad - a.cantidad )
        }
    },
    methods: {
        ...mapMutations(['aumentar', 'reset'])
    }
}
</script>
<style scoped>
button {
    margin-top: 20px
}
</style>
