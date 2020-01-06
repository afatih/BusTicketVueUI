<template>
  <div >
    <h1>Activation page</h1>
    <h1> Aktivasyon işleminiz başarıyla tamamlanmıştır. Aşşağıdaki linke tıklayarak ana sayfaya gidebilirsiniz.</h1>
     <div class="col-lg-4 offset-lg-5 col-md-4 offset-md-4 col-sm-6 offset-sm-3 col-4 offset-4">
      <div class="form-group mt-5">
        <router-link to="/" class="btn btn-primary mr-2">Main Page</router-link>
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
  components: {

  },
  created(){
      this.activationKey=this.$route.query.key

  },
  methods:{
    ...mapActions('account',['activation'])
  },
  beforeMount(){
    var activationKey = this.activationKey;
    console.log(activationKey)
    this.activation({activationKey})
  }
}
</script>