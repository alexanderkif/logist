<template>
  <div>
    <div
      v-for="w in week"
      :key="w.day"
      class="row q-pt-xl"
    >
      <div class="full-width text-center text-h5 text-bold bg-purple-2">{{ w.day.toUpperCase() }}</div>
      <div class="flex justify-center">
        <div
          v-for="way in w.cars"
          :key="way.id"
          class="q-ml-md"
        >
            <Way :way="way"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Way from 'components/Way';

export default {
  name: 'PrintWaysByDays',
  components: {
    Way
  },
  props: {
    week: Array
  },
  data() {
    return {}
  },
  updated() {
    if (this.week.length < 5) return;
    for (let day = 0; day < 5; day++) {
      const wayByTime = this.getWaysByDaySortByTime(day);
      console.log('wayByTime', wayByTime.map(w => w.time));
    }
  },
  methods: {
    getWaysByDaySortByTime(day) {
      return this.week ? this.week[day].cars.slice(0).sort((a, b) => { return +b.time - +a.time }) : [];
    }
  },
}
</script>
