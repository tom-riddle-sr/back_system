<template>
  <div id="index">
    <!-- <login /> -->
    <!-- <register /> -->
    <!-- <front_page /> -->
    <test />
  </div>
</template>
<script>
import login from './components/login/login.vue';
import register from './components/login/register.vue';
import front_page from './components/front_page/front_page.vue';
import test from './components/test.vue';

export default {
  components: {
    login,
    register,
    front_page,
    test
  }
}
</script>
<style>

</style>