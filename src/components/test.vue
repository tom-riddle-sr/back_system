<template>
  <v-text-field
    v-model="text"
    :rules="requiredRule"
    label="Text"
    required
  ></v-text-field>
</template>

<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  computed: {
    requiredRule() {
      return [
        (v) => !!v || '必填項' 
      ];
    }
  }
};
</script>
