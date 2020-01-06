<template>
  <div>
    <navbar></navbar>
    <search></search>
  </div>
</template>

<script>

import Navbar from "../smallComponents/Navbar.vue";
import Search from "../smallComponents/Search.vue";

export default {

  components: {
    "navbar": Navbar,
    "search":Search
  }
};
</script>