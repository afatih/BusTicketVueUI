<template>
  <div>
    <div v-if="tour.errorMessage" :class="`alert ${tour.errorType}`">{{tour.errorMessage}}</div>
    <div class="row">
      <div class="col-lg-3 col-md-6 col-sm-6 pd-rl-10" >
        <div class="form-group">
          <label for="from">Nereden</label>
          <select v-model="from" id="from" class="form-control">
            <option v-for="city in cities" :key="city.id" :value="city.name">{{city.name}}</option>
          </select>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 pd-rl-10" >
        <div class="col-lg-2 col-md-2 col-sm-2 float-left d-none d-sm-block">
          <img @click="change" class="mt-5" src="../assets/images/change.png" />
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10 col-12 float-left toStyle">
          <div class="form-group">
            <label for="to">Nereye</label>
            <select v-model="to" id="to" class="form-control">
              <option v-for="city in cities" :key="city.id" :value="city.name">{{city.name}}</option>
            </select>
          </div>
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 pd-rl-10">
        <div class="form-group">
          <label for="date">Tarih</label>
          <input class="form-control" type="date" id="date" v-model="date" />
        </div>
      </div>
      <div class="col-lg-3 col-md-6 col-sm-6 pd-rl-10">
        <button
          class="btn btn-success btn-lg"
          style="width: 100%;margin-top: 25px;"
          @click="searchTour"
        >Ara</button>
      </div>
    </div>

    <!-- <button @click="searchTour">Ara</button> -->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      // ? this.$route.params.from : this.$store.state.tour.cities[0].name,
      // sehirleri yüklemekte gec kalıyor gibi set time outla direk şehirler seçili yapılabilir
      from: this.$route.params.from, 
      to: this.$route.params.to,
      date: this.$route.params.date ? this.$route.params.date : new Date().toISOString().slice(0,10) ,
      userId: this.$store.state.account.user.id
    };
  },
  computed: {
    ...mapState({
      cities: state => state.tour.cities,
      tour: state => state.tour
    })
  },
  created() {
    this.getCities();
  },
  methods: {
    ...mapActions("tour", ["getCities", "getTours"]),
    change() {
      var oldFrom = this.from;
      this.from = this.to;
      this.to = oldFrom;
    },
    searchTour() {
      const { from, to, date } = this;
      this.getTours({ from, to, date });
    }
  }
};
</script>