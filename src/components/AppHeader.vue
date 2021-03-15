<template>
  <nav
    class="w-full bg-gradient-to-r px-4 py-2 text-center text-white from-blue-800 to-blue-300"
  >
    <router-link
      v-for="item in list"
      :key="item.to"
      :to="item.to"
      class="mx-2"
      >{{ item.title }}</router-link
    >
    <button
      class="border px-2 mx-1 cursor-pointer rounded"
      @click="$emit('open-login-modal')"
    >
      Login
    </button>
  </nav>
</template>

<script>
export default {
  name: "ApHeader",
  data() {
    return {
      list: [
        { title: "Dc Heroes", to: "/dc-heroes" },
        { title: "Calendar", to: "/calendar" },
        { title: "Markdown", to: "/markdown" },
        { title: "Slider", to: "/slider" },
      ],
    };
  },
};
</script>

<style>
</style>