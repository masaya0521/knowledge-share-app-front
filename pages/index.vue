<script lang="ts" setup>
const { contents } = useContents();
</script>

<template>
  <div class="flex flex-col justify-center m-32">
    hello world
    <dev v-for="content in contents">
      {{ content.title }}
    </dev>
  </div>
</template>
