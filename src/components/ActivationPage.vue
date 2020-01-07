<template>
  <div >
    <h2> Aktivasyon işleminiz başarıyla tamamlanmıştır. Aşağıdaki linke tıklayarak ana sayfaya gidebilirsiniz.</h2>
     <div class="col-lg-4 offset-lg-5 col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-4 offset-4">
      <div class="form-group mt-5">
        <router-link to="/" class="btn btn-primary mr-2">Ana Sayfa</router-link>
      </div>
    </div>
    <!-- <button @click="readKey" >ReadKey</button> -->
  </div>
</template>

<script>
  import { mapActions } from "vuex";

export default {


  name: 'register',
  data(){
      return{
          key:String,
      }
  },
  created(){
      this.activationKey=this.$route.query.key
  },
  methods:{
    ...mapActions('account',['activation'])
  },
  beforeMount(){
    var activationKey = this.activationKey;
    this.activation({activationKey})
  }
}
</script>