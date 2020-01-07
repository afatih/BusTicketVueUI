<template>
  <div>
      <h2 v-if="complatedMessage" >{{complatedMessage}} </h2>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {

  computed: {
      ...mapState('tour',['complatedMessage'])
  }
};
</script>