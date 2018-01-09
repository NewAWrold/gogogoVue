import vue from 'vue'
import vuex from 'vuex'

vue.use(vuex)

const state = {
    count:100,
    draw:{
        
    }
}
const mutations = {
    add(){
        state.count++
    },
    reduce(){
        state.count--
    }
}

export default new vuex.Store({
    state,
    mutations
})