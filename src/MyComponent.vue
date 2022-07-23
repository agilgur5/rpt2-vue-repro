<template>Hello {{ name }}</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    name: String,
  },
});
</script>
