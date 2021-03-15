<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center py-4">Total heroes: {{ herosCount }}</h1>
      <p>{{ fullName }}</p>
      <ul>
        <li
          class="flex justify-between"
          v-for="(hero, index) in dcHeros"
          :key="hero.name"
        >
          <p>{{ hero.name }}</p>
          <button @click="remove(index)">X</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addhero">
        <input
          class="px-2 border rounded"
          v-model.lazy="newHero"
          placeholder="type hero name here"
        />
        <button
          class="px-2 border rounded bg-gradient-to-t from-red-700 to-pink-400 text-white"
          type="submit"
        >
          Add Hero
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "DcHeroes",
  data() {
    return {
      isDisabled: false,
      newHero: "",
      dcHeros: [{ name: "SuperGirl" }, { name: "Flash" }, { name: "batman" }],
    };
  },
  methods: {
    addhero() {
      if (this.newHero !== "") {
        this.dcHeros.unshift({ name: this.newHero });
        this.newHero = "";
      }
    },
    remove(index) {
      this.dcHeros = this.dcHeros.filter((hero, i) => i !== index);
    },
  },
  computed: {
    herosCount() {
      return this.dcHeros.length + " heroes";
    },
  },
};
</script>

<style>
</style>