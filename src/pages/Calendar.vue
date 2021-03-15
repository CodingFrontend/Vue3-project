<template>
    <div class="m-auto py-4">
      <h1 class="text-2xl my-2 text-center">Calendar</h1>
      <section class="mx-10 flex justify-between">
        <h2 class="font-bold">{{ currentMonthName }}</h2>
        <h2 class="font-bold">{{ currentYear }}</h2>
      </section>

      <section class="flex my-2">
        <p
          class="p-2 text-center"
          style="width: 14.28%"
          v-for="day in days"
          :key="day"
        >
          {{ day }}
        </p>
      </section>
      <section class="flex flex-wrap">
        <p
          class="text-center"
          style="width: 14.28%"
          v-for="num in startDay()"
          :key="num"
        ></p>
        <p
          class="text-center"
          style="width: 14.28%"
          v-for="num in daysInMonth()"
          :key="num"
          :class="currentDateClass(num)"
        >
          {{ num }}
        </p>
      </section>
      <section class="flex justify-between my-4">
        <button class="px-2 border rounded" @click="prev">Prev</button>
        <button class="px-2 border rounded" @click="next">Next</button>
      </section>
    </div>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      currentDate: new Date().getUTCDate(),
      currentMonth: new Date().getMonth() + 1,
      currentYear: new Date().getFullYear(),
      days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    };
  },
  methods: {
    daysInMonth() {
      return new Date(this.currentYear, this.currentMonth, 0).getDate();
    },
    startDay() {
      return new Date(this.currentYear, this.currentMonth - 1, 1).getDay();
    },
    next() {
      if (this.currentMonth === 12) {
        this.currentMonth = 1;
        this.currentYear++;
      } else {
        this.currentMonth++;
      }
    },
    prev() {
      if (this.currentMonth === 1) {
        this.currentMonth = 12;
        this.currentYear--;
      } else {
        this.currentMonth--;
      }
    },
    currentDateClass(num) {
      const calendarFullDate = new Date(
        this.currentYear,
        this.currentMonth - 1,
        num
      ).toDateString();
      const currentFullDate = new Date().toDateString();
      return calendarFullDate === currentFullDate ? " text-yellow-400" : "";
    },
  },
  computed: {
    currentMonthName() {
      return new Date(this.currentYear, this.currentMonth - 1).toLocaleString(
        "en-US",
        {
          month: "long",
        }
      );
    },
  },
};
</script>

<style>
</style>