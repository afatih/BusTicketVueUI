<template>
  <div>
    <div class="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
      <h2>Register</h2>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" v-model="user.name" name="name" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="surname">Surname</label>
          <input type="text" v-model="user.surname" name="surname" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" v-model="user.email" name="email" class="form-control" required />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="user.password"
            name="password"
            class="form-control"
            required
          />
        </div>
        <div class="form-group">
          <button class="btn btn-primary mr-2">Register</button>
          <router-link to="/login" class="btn btn-primary">Login</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "register",
  data() {
    return {
      user: {
        name: "",
        surname: "",
        email: "",
        password: ""
      }
    };
  },

  components: {},
  computed: {
    ...mapState({
      // registerComplated: state => state.account.registerComplated
    })
  },
  methods: {
    ...mapActions("account", ["register"]),
    handleSubmit() {
      console.log("user From registiration + " + JSON.stringify(this.user));
      let user = this.user;
      this.register({ user })
        // .then(() => {
        //   // setTimeout(() => {
        //   //   if (this.registerComplated) {
        //   //     this.user = {};
        //   //   }
        //   // }, 100);
        //   this.$router.push('/')
        // });
      }
  },
  // mounted() {
  //   if (this.registerComplated) {
  //     this.user = {};
  //   }
  // }
};
</script>