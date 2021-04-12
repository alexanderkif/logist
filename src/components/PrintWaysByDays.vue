<template>
  <div>
    <div
      v-for="w in week"
      :key="w.day"
      class="row justify-center q-pt-xl"
    >
      <div class="text-h5 text-bold">{{ w.day.toUpperCase() }}</div>
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
    return {
    }
  },
}
</script>
