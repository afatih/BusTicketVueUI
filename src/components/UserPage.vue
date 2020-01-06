<template>
  <div>
    <navbar></navbar>
    <h2>Kullanıcı Bilgileri</h2>
    <div class="col-12 mt-2 mb-2 pr-0 pl-0">
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-4 col-6">
              <div></div>
              <b class="d-block">İsim</b>
              <label class="d-block">{{user.name}}</label>
            </div>
            <div class="col-sm-4 col-6">
              <div></div>
              <b class="d-block">Soyisim</b>
              <label class="d-block">{{user.surname}}</label>
            </div>
            <div class="col-sm-4 col-12">
              <div></div>
              <b class="d-block">E-Mail</b>
              <label class="d-block">{{user.email }}</label>
              <!-- <label class="d-block">{{selectedTour.date | moment("MMMM Do YYYY") }} </label> Şeklinde olunca ayı ingilizce yazdı locali değişmeme rağmen -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <h2>Biletlerim</h2>
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
                  <span class="d-block">{{tour.date | moment("MM Do YYYY") }}</span>
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
                  <span class="d-block">{{tour.date | moment("MM Do YYYY") }}</span>
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
    ...mapState({
      tour: state => state.tour,
      user: state => state.account.user
    })
  },
  created() {},
  methods: {
    ...mapActions("tour", ["getUserTours", "deleteUserTour"]),

    cancelTour(userTourId, tourId) {
      let userId = this.$store.state.account.user.id;
      this.deleteUserTour({ userTourId, tourId, userId });
    }
  },
  components: {
    navbar: Navbar
  },
  mounted() {
    let userId = this.$store.state.account.user.id;
    this.getUserTours({ userId });
  }
};
</script>