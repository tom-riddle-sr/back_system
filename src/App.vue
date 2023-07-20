<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script>
import login from './components/login/login.vue';
import front_page1 from './components/front_page/front_page1.vue';
import test from './components/test.vue';

export default {
  components: {
    login, 
    front_page1,
    test,
  }
}
</script>
<style>

</style>