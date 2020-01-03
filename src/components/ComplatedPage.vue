<template>
  <div>
      <h2 v-if="complatedMessage" >{{complatedMessage}} </h2>
      <router-link to="/">Ana Sayfa</router-link>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {

  computed: {
      ...mapState('tour',['complatedMessage'])

  },
  created() {


  },
  methods: {
  
  }
 
};
</script>