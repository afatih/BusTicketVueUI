<template>
  <div>
    <p>{{selectedTour.id}}</p>
    <p>{{selectedTour.from}}</p>
    <p>{{selectedTour.to}}</p>
    <p>{{selectedTour.price}}</p>
    <button @click="takeTicket(selectedTour.id)">Bileti Al</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  components: {},
  data() {
    return {
      id: this.$route.params.id,
      userId: this.$store.state.account.user.id
    };
  },
  computed: {
    ...mapState("tour", ["selectedTour"])
  },
  created() {
    const { id } = this;
    this.getTourDetail({ id });
  },
  methods: {
    ...mapActions("tour", ["getTourDetail", "addTourToUser"]),
    takeTicket(tourId) {
      this.addTourToUser({ tourId: tourId, userId: this.userId });

    
    }
  }
};
</script>