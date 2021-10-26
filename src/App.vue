<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // this.axios.post('/api/user').then(res=>{
    //   this.res = res;
    // });
  },
};
</script>

<style>
@import "./assets/scss/reset.scss";
</style>