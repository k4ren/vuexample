import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        frutas: [
            {nombre: 'Platano', cantidad: 0},
            {nombre: 'Pera', cantidad: 0},
            {nombre: 'Piña', cantidad: 0},
        ]

    },
    mutations: {
        aumentar(state, index) {
            state.frutas[index].cantidad ++
        },
        reset(state) {
            state.frutas.forEach(element => {
                element.cantidad = 0
            });
        } 

    },
    actions: {

    }
})