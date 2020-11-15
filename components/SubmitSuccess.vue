<template>
  <v-dialog v-model="value" width="500">
    <v-card>
      <v-card-text> login success </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="value = false"> close </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  watch: {
    show: {
      handler: function () {
        this.value = true;
      },
    },
  },
  data() {
    return {
      value: false,
    };
  },
};
</script>

<style>
</style>