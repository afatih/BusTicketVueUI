<template>
  <div>
    <navbar></navbar>
    <div class="row">
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="card">
          <div class="card-header">Yolculuk Detayları</div>
          <div class="card-body">
            <div class="row">
              <div class="col-6 ">
                <div></div>
                <b class="d-block">Nereden</b>
                <label class="d-block">{{selectedTour.from}} </label>
              </div>
              <div class="col-6">
                <div></div>
                <b class="d-block">Nereye</b>
                <label class="d-block">{{selectedTour.to}} </label>
              </div>
              <div class="col-6">
                <div></div>
                <b class="d-block">Tarih</b>
                <label class="d-block">{{selectedTour.date | moment("MM Do YYYY") }} </label>
                <!-- <label class="d-block">{{selectedTour.date | moment("MMMM Do YYYY") }} </label> Şeklinde olunca ayı ingilizce yazdı locali değişmeme rağmen -->
              </div>
              <div class="col-6">
                <div></div>
                <b class="d-block">Saat</b>
                <label class="d-block">{{selectedTour.time}} </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-5">
        <div class="card">
          <div class="card-header">Kullanıcı Bilgileri</div>
          <div class="card-body">
                 <div class="row">
              <div class="col-6 ">
                <div></div>
                <b class="d-block">İsim</b>
                <label class="d-block">{{user.name}} </label>
              </div>
              <div class="col-6">
                <div></div>
                <b class="d-block">Soyisim</b>
                <label class="d-block">{{user.surname}} </label>
              </div>
              <div class="col-12">
                <div></div>
                <b class="d-block">E-Mail</b>
                <label class="d-block">{{user.email }} </label>
                <!-- <label class="d-block">{{selectedTour.date | moment("MMMM Do YYYY") }} </label> Şeklinde olunca ayı ingilizce yazdı locali değişmeme rağmen -->
              </div>

            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mt-5">
       
        <div class="card">
          <div class="card-header">Ödeme İşlemleri</div>
          <div class="card-body takeCenter">
            <button class="btn btn-info btn-lg btnPadding" @click="takeTicket(selectedTour.id)">Bileti Al</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Navbar from "../smallComponents/Navbar.vue";
import trLocale from  'moment/locale/tr'

export default {
  mounted(){
      this.$moment.locale('tr',trLocale)
  },
  data() {
    return {
      id: this.$route.params.id,
      user: this.$store.state.account.user,
    };
  },
  computed: {
    ...mapState({
      selectedTour:state=>state.tour.selectedTours
    })
  },
  created() {
    const { id } = this;
    this.getTourDetail({ id });
  },
  methods: {
    ...mapActions("tour", ["getTourDetail", "addTourToUser"]),
    takeTicket(tourId) {
      this.addTourToUser({ tourId: tourId, userId: this.user.id });
    }
  },
  components: {
    navbar: Navbar
  },
  
};
</script>