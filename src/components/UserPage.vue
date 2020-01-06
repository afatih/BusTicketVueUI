<template>
  <div>
    <navbar></navbar>
    <div
      class="mt-3"
      v-if="tour.selectedTours.length==0"
    >*Henüz herhangi bir bilet alım işlemi gerçekleştirilmemiştir.</div>
    <h1>BİLETLERİM</h1>
    <div v-for="tour in tour.userTours" :key="tour.id">
      <div class="card mt-3">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-3 text-center mt-2">
              <img src="../assets/images/metro.png" />
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-3 d-none d-sm-block text-center mt-3">
              <div class="row">
                <div class="offset-lg-2 col-lg-2">
                  <img src="../assets/images/time.png" />
                </div>
                <div class="col-lg-6">
                  <span>{{tour.time}}</span>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-4 text-center mt-3">
              <div class="row d-sm-none">
                <div class="offset-lg-2 col-lg-2">
                  <img src="../assets/images/time.png" />
                </div>
                <div class="col-lg-6">
                  <span>{{tour.time}}</span>
                </div>
              </div>
              <span>{{tour.from}}-{{tour.to}}</span>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-4 text-center">
              <button
                class="btn btn-danger mt-2"
                @click="cancelTour(tour.userTourId,tour.id)"
              >İptal Et</button>
            </div>
          </div>
          <!-- <div class="col-lg-3">
            <span>{{tour.hour}}</span>
          </div>-->
          <!-- {{tour.from}}-{{tour.to}}-{{tour.date}}--{{tour.price}}  -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Navbar from "../smallComponents/Navbar.vue";

export default {
  data() {
    return {};
  },
  computed: {
    //   ...mapState('tour','user',['selectedTours',]),
    ...mapState({
      tour: state => state.tour
    })
  },
  created() {
     
  },
  methods: {
    ...mapActions("tour", ["getUserTours", "deleteUserTour"]),

    cancelTour(userTourId, tourId) {
       let userId  = this.$store.state.account.user.id;
      this.deleteUserTour({ userTourId, tourId, userId });
    }
  },
  components: {
    navbar: Navbar
  },
  mounted() {
    let userId  = this.$store.state.account.user.id;
    this.getUserTours({ userId });
  }
};
</script>