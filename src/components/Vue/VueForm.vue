<template>
  <div>
    <VueTextField v-model="text" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import VueTextField from "./VueTextField.vue";

const text = ref<string>("");
</script>
