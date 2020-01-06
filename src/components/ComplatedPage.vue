<template>
  <div>
    <navbar></navbar>
      <h2 v-if="complatedMessage" >{{complatedMessage}} </h2>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Navbar from '../smallComponents/Navbar.vue'

export default {

  computed: {
      ...mapState('tour',['complatedMessage'])
  },
  components: {
    "navbar": Navbar
  }
};
</script>