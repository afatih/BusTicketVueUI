<template>
  <div>
      <ul>
          <li v-for="tour in tours" :key="tour.id">{{tour.id}}-{{tour.price}} </li>
      </ul>

    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState({
      tours: state=> state.tour.tours
    })
  },
  created() {

  },
  methods: {
    // ...mapActions("tour", ["getTours"]),

  }
};
</script>