<template>
  <div>
    <ul>
      <li v-for="tours in tour.selectedTours" :key="tours.id" > {{tours.id}}-{{tours.from}}-{{tours.to}}-{{tours.date}}-{{tours.hour}}-{{tours.price}}  </li>
    </ul>
    <button @click="read">read</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
 props: {
    userId: {
      type: Number,
      required: true
    }
 },

  data() {
    return {
    //   userId:JSON.stringify(this.$store.state.account.user.id)
    };
  },
  computed: {
    //   ...mapState('tour','user',['selectedTours',]),
    ...mapState({
      tour: state =>state.tour,
    })
  },
  created() {
         const {userId}=this;
       this.getSelectedTours({userId});
  },
  methods: {
    ...mapActions("tour", ["getSelectedTours"]),
    read() {

    }
  }
};
</script>