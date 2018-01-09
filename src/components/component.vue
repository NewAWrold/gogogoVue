<template>
  <div>
      <h2>{{msg}}</h2>
      <hr>
      <h3>{{this.$store.state.count}}</h3>
      <h3>{{count}}</h3>
      <p>
          <button @click="$store.commit('add')">+</button>
          <button @click="$store.commit('reduce')">-</button>
      </p>
  </div>
</template>

<script>
import store from '@/vuex/store'
import { mapState } from 'vuex'

export default {
  data () {
      return{
          msg:'hello vuex!'
      }
  },
    //   computed: {
    //   count(){
    //       return this.$store.state.count
    //   }
    //   },
    // computed: mapState({
    //     count: state => state.count
    // }),
    computed: {
        ...mapState(['count'])
    },
    store
}
</script>

<style lang="scss" scoped>
    button{
        width:30px;
        height:30px;
    }
</style>
