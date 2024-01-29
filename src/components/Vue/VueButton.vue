<template>
  <button
    @click="clickHoge"
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
  >
    {{ text }}
  </button>
</template>

<script setup lang="ts">
type Props = {
  text: string;
};

const props = defineProps<Props>();

const clickHoge = () => {
  alert("hoge");
};
</script>
