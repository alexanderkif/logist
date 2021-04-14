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
    
    <div v-if="paths && paths.length">
      <div
        v-for="p in paths"
        :key="p.path"
        class="row q-pt-xl"
      >
        <div class="row full-width justify-center">
          <q-table
            :title="week[p.day - 1].day.toUpperCase()"
            :data="getCountedPath(p.paths)"
            :columns="pathColumns"
            :rows-per-page-options="[0]"
            row-key="ttId"
            class="q-mt-lg"
            hide-bottom
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Way from 'components/Way';
const MAX_TIME = 605; // 8 часов разрешено, ограничим 11 с переработками
// const MIN_TIME = 360;
const MAX_KM = 110;

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
      paths: [],
      pathColumns: [
        { name: 'id', align: 'center', label: 'Номер машины', field: 'id' },
        { name: 'path1', align: 'center', label: 'Номер маршрута', field: 'path1',
          classes: 'bg-purple-2', headerClasses: 'bg-purple-2' },
        { name: 'o1', label: 'Отправление', field: 'o1' },
        { name: 'p1', label: 'Прибытие', field: 'p1' },
        { name: 'path2', align: 'center', label: 'Номер маршрута', field: 'path2',
          classes: 'bg-purple-2', headerClasses: 'bg-purple-2' },
        { name: 'o2', label: 'Отправление', field: 'o2' },
        { name: 'p2', label: 'Прибытие', field: 'p2' },
        { name: 'path3', align: 'center', label: 'Номер маршрута', field: 'path3',
          classes: 'bg-purple-2', headerClasses: 'bg-purple-2' },
        { name: 'o3', label: 'Отправление', field: 'o3' },
        { name: 'p3', label: 'Прибытие', field: 'p3' },
        { name: 'km', label: 'Длина', field: 'km' },
        { name: 'time', label: 'Время', field: 'time' }
      ],
    }
  },
  async mounted() {
    if (this.week.length < 5) return;
    for (let day = 1; day < 6; day++) {
      this.paths.push({
        day: day,
        paths: await this.getPathByDay(day)
      })
    }
  },
  methods: {
    getCountedPath(paths) {
      let carNumber = 1;
      let countedPaths = [];
      paths.forEach(p => {
        const countedPath = {};
        countedPath.id = carNumber++;
        countedPath.path1 = p.path[0].id;
        countedPath.o1 = this.getDigitClock(480);
        countedPath.p1 = this.getDigitClock(480 + +p.path[0].time);
        countedPath.path2 = p.path[1] ? p.path[1].id : '';
        countedPath.o2 = p.path[1] ? this.getDigitClock(480 + +p.path[0].time + 30) : '';
        countedPath.p2 = p.path[1] ? this.getDigitClock(480 + +p.path[0].time + 30 + +p.path[1].time) : '';
        countedPath.path3 = p.path[2] ? p.path[2].id : '';
        countedPath.o3 = p.path[2] ? this.getDigitClock(480 + +p.path[0].time + 30 + +p.path[1].time + 30) : '';
        countedPath.p3 = p.path[2] ? this.getDigitClock(480 + +p.path[0].time + 30 + +p.path[1].time + 30 + +p.path[2].time) : '';
        countedPath.km = p.sumKM;
        countedPath.time = p.sumTime;
        countedPaths.push(countedPath);
      });
      return countedPaths;
    },
    getDigitClock(minutes) {
      let hours = "" + Math.trunc(+minutes / 60);
      let mins = "" + +minutes % 60;
      return `${hours.length === 1 ? '0' + hours : hours}:${mins.length === 1 ? '0' + mins : mins}`
    },
    getWaysSortByTime(ways) {
      return ways ? ways.cars.slice(0).sort((a, b) => { return +b.time - +a.time }) : [];
    },
    async getPathByDay(day) {
      let wayByTime = await this.getWaysSortByTime(this.week[day - 1]);
      console.log(`======= Day ${day} ========`);
      console.log(`wayByTime ${day}`, wayByTime.map(w => w.time));
      const paths = [];
      wayByTime = await this.getNextPath(paths, wayByTime);
      console.log(`wayByTime ${day} after`, wayByTime.map(w => w.time));
      console.log(`paths ${day} sumTime`, paths.map(w => w.sumTime));
      console.log(`paths ${day} sumKM`, paths.map(w => w.sumKM));
      console.log(`paths ${day}`, paths);
      return paths;
    },
    async getNextPath(paths, wayByTime) {
      if (!wayByTime.length) {
        return wayByTime;
      }
      if (wayByTime.length < 2) {
        return this.pushOnePath(paths, wayByTime);
      }
      const pairWithZeroElement = wayByTime.slice(1).filter(w => w.time < MAX_TIME - 30 - wayByTime[0].time)[0];
      if (!pairWithZeroElement) {
        wayByTime = this.pushOnePath(paths, wayByTime);
      } else {
        let currPath = {
          sumKM: +wayByTime[0].bestSeqKM + +pairWithZeroElement.bestSeqKM,
          sumTime: wayByTime[0].time + 30 + pairWithZeroElement.time,
          path: [wayByTime[0], pairWithZeroElement]
        };
        wayByTime.splice(wayByTime.indexOf(pairWithZeroElement), 1);
        wayByTime = this.getPathArray(currPath, wayByTime.slice(1));
        paths.push(currPath)
      }
      return await this.getNextPath(paths, wayByTime);
    },
    getPathArray(currPath, wayByTime) {
      const pairWithZeroElement = wayByTime.filter(w => w.time < MAX_TIME - 30 - currPath.sumTime)[0];
      if (pairWithZeroElement && currPath.sumKM + +pairWithZeroElement.bestSeqKM < MAX_KM) {
        currPath.path.push(pairWithZeroElement);
        currPath.sumKM += +pairWithZeroElement.bestSeqKM,
        currPath.sumTime += 30 + pairWithZeroElement.time,
        wayByTime.splice(wayByTime.indexOf(pairWithZeroElement), 1);
        wayByTime = this.getPathArray(currPath, wayByTime);
      }
      return wayByTime;
    },
    pushOnePath(paths, wayByTime) {
      paths.push({
        sumKM: +wayByTime[0].bestSeqKM,
        sumTime: wayByTime[0].time,
        path: [wayByTime[0]]
      });
      return wayByTime.slice(1);
    }
  }
}
</script>
