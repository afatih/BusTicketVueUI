<template>
  <div>
    <h1>Home Page</h1>
        <h1>Hi {{account.user.name}}!</h1>
    <span v-if="users.error" class="text-danger">ERROR: {{users.error}}</span>
    <ul v-if="users.items">
      <li v-for="user in users.items" :key="user.id">{{user.name + ' ' + user.surname}}</li>
    </ul>
    <p>
      <router-link to="/login">Logout</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      account: state => state.account,
      users: state => state.users.all
    })
  },
  created() {
    this.getAllUsers();
    this.readStates();
  },
  methods: {
    ...mapActions("users", {
      getAllUsers: "getAll"
    }),  readStates(){
      console.log('State:'+this.account.status.loggingIn)
      console.log('State:'+JSON.stringify(this.account.status) )
      console.log('State:'+JSON.stringify(this.account.status.loggedIn) )
    }
  }
};
</script>