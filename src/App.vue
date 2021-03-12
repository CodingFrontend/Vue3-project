<template>
  <div class="w-full flex">
    <div class="m-auto">
      <h1 class="text-2xl text-center">Total heroes: {{ herosCount }}</h1>
      <p>{{ fullName }}</p>
      <ul>
        <li
          class="flex justify-between"
          v-for="(hero, index) in dcHeros"
          :key="index"
        >
          <p>{{ hero.name }}</p>
          <button @click="remove(index)">X</button>
        </li>
      </ul>
      <form class="mt-10" @submit.prevent="addhero">
        <input
          class="border rounded"
          v-model.lazy="newHero"
          placeholder="type hero name here"
        />
        <button class="border rounded bg-gradient-to-t from-red-700 to-pink-400" type="submit">Add Hero</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
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