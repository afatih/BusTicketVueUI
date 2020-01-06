<template>
  <div>
    <navbar></navbar>
    <search></search>
    <div class=" mt-3 " v-if="tours.length==0">*Seçili kriterlere uygun sefer bulunmamaktadır</div>
    <div v-for="tour in tours" :key="tour.id">
      <div class="card mt-3">
        <div class="card-body">
          <div class="row">
            <div class="col-lg-3 col-md-3 col-sm-3 col-3  text-center mt-2">
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
            <div class="col-lg-3 col-md-3 col-sm-3 col-4  text-center mt-3">
               <div class="row d-sm-none">
                <div class="offset-lg-2 col-lg-2">
                  <img src="../assets/images/time.png" />
                </div>
                <div class="col-lg-6">
                  <span>{{tour.time}}</span>
                 
                </div>
              </div>
              <span>{{tour.from}}-{{tour.to}}</span>
               <span class="d-block" v-if="tour.isAvailable" >Kalan koltuk sayısı : {{44-tour.userCount}} </span>
            </div>
            <div class="col-lg-3 col-md-3 col-sm-3 col-4 text-center">
              <div>
                <span>{{tour.price}}</span> <em>₺</em>
              </div>

              <button
                class="btn btn-secondary"
                :class="{'btn btn-danger':tour.isAvailable}"
                :disabled="!tour.isAvailable"
                @click="chooseTour(tour.id)"
              >{{tour.buttonText}}</button>
            </div>
          </div>
          <!-- <div class="col-lg-3">
            <span>{{tour.hour}}</span>
          </div>-->
          <!-- {{tour.from}}-{{tour.to}}-{{tour.date}}--{{tour.price}}  -->
        </div>
      </div>
    </div>
    <!-- <ul>
      <li v-for="tour in tours" :key="tour.id">{{tour.id}}-{{tour.from}}-{{tour.to}}-{{tour.date}}-{{tour.hour}}-{{tour.price}} <button :disabled="!tour.isAvailable"  @click="chooseTour(tour.id)" >{{tour.buttonText}} </button></li>
    </ul>-->
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Navbar from "../smallComponents/Navbar.vue";
import Search from "../smallComponents/Search.vue";

export default {
  components: {
    navbar: Navbar,
    search: Search
  },
  data() {
    return {
      from: this.$route.params.from,
      to: this.$route.params.to,
      date: this.$route.params.date
    };
  },
  computed: {
    ...mapState({
      tours: state => state.tour.tours
    })
  },
  created() {
    const { from, to, date } = this;
    this.getTours({ from, to, date });
  },
  methods: {
    ...mapActions("tour", ["getTours", "getTourDetail"]),
    chooseTour(id) {
      this.getTourDetail({ id });
    }
  }
};
</script>