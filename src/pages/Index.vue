<template>
  <q-page class="flex flex-center q-pb-lg">
    <div class="row justify-center items-center q-mt-lg">
      <div class="col col-auto">
        <a href="logist.csv" class="text-primary">Скачать пример файла logist.csv</a>
      </div>
      <div class="col">
        <q-file
          v-model="file"
          label="Загрузить CSV файл"
          outlined
          style="width: 300px"
          @input="input"
          class="q-ml-lg"
        />
      </div>
    </div>
    <div class="row full-width justify-center">
      <q-table
        title="Координаты магазинов"
        :data="shops"
        :columns="shopColumns"
        :rows-per-page-options="[0]"
        row-key="ttId"
        class="q-mt-lg"
        hide-bottom
      />
      <q-table
        title="Заказы магазинов по дням недели"
        :data="orders"
        :columns="ordersColumns"
        :rows-per-page-options="[0]"
        row-key="ttId"
        class="q-mt-lg q-ml-lg"
        hide-bottom
      >
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="ttId" :props="props">
              {{ props.row.ttId }}
            </q-td>
            <q-td key="monP" :props="props">
              {{ props.row.mon.p }}
            </q-td>
            <q-td key="monM" :props="props">
              {{ props.row.mon.m }}
            </q-td>
            <q-td key="monN" :props="props">
              {{ props.row.mon.n }}
            </q-td>
            <q-td key="tueP" :props="props">
              {{ props.row.tue.p }}
            </q-td>
            <q-td key="tueM" :props="props">
              {{ props.row.tue.m }}
            </q-td>
            <q-td key="tueN" :props="props">
              {{ props.row.tue.n }}
            </q-td>
            <q-td key="wedP" :props="props">
              {{ props.row.wed.p }}
            </q-td>
            <q-td key="wedM" :props="props">
              {{ props.row.wed.m }}
            </q-td>
            <q-td key="wedN" :props="props">
              {{ props.row.wed.n }}
            </q-td>
            <q-td key="thuP" :props="props">
              {{ props.row.thu.p }}
            </q-td>
            <q-td key="thuM" :props="props">
              {{ props.row.thu.m }}
            </q-td>
            <q-td key="thuN" :props="props">
              {{ props.row.thu.n }}
            </q-td>
            <q-td key="friP" :props="props">
              {{ props.row.fri.p }}
            </q-td>
            <q-td key="friM" :props="props">
              {{ props.row.fri.m }}
            </q-td>
            <q-td key="friN" :props="props">
              {{ props.row.fri.n }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </div>
    <PrintWaysByDays :week="week" />
  </q-page>
</template>

<script>
import PrintWaysByDays from 'components/PrintWaysByDays';

export default {
  name: 'PageIndex',
  components: {
    PrintWaysByDays
  },
  data () {
    return {
      file: null,
      textFile: null,
      shops: [],
      orders: [],
      week: [],
      TT: 30,
      shopColumns: [
        { name: 'ttId', align: 'center', label: 'Магазин', field: 'ttId', sortable: true,
          classes: 'bg-purple-2', headerClasses: 'bg-purple-2' },
        { name: 'x', label: 'X', field: 'x' },
        { name: 'y', label: 'Y', field: 'y' }
      ],
      ordersColumns: [
        { name: 'ttId', align: 'center', label: 'Магазин', field: 'ttId', sortable: true,
          classes: 'bg-purple-2', headerClasses: 'bg-purple-2' },
        { name: 'monP', label: 'пн П', field: 'monP' },
        { name: 'monM', label: 'пн М', field: 'monM' },
        { name: 'monN', label: 'пн Н', field: 'monN' },
        { name: 'tueP', label: 'вт П', field: 'tueP', classes: 'bg-grey-2', headerClasses: 'bg-grey-2' },
        { name: 'tueM', label: 'вт М', field: 'tueM', classes: 'bg-grey-2', headerClasses: 'bg-grey-2' },
        { name: 'tueN', label: 'вт Н', field: 'tueN', classes: 'bg-grey-2', headerClasses: 'bg-grey-2' },
        { name: 'wedP', label: 'ср П', field: 'wedP' },
        { name: 'wedM', label: 'ср М', field: 'wedM' },
        { name: 'wedN', label: 'ср Н', field: 'wedN' },
        { name: 'thuP', label: 'чт П', field: 'thuP', classes: 'bg-grey-2', headerClasses: 'bg-grey-2' },
        { name: 'thuM', label: 'чт М', field: 'thuM', classes: 'bg-grey-2', headerClasses: 'bg-grey-2' },
        { name: 'thuN', label: 'чт Н', field: 'thuN', classes: 'bg-grey-2', headerClasses: 'bg-grey-2' },
        { name: 'friP', label: 'пт П', field: 'friP' },
        { name: 'friM', label: 'пт М', field: 'friM' },
        { name: 'friN', label: 'пт Н', field: 'friN' }
      ]
    }
  },
  methods: {
    async input() {
      const reader = new FileReader();
      reader.readAsText(this.file);
      this.textFile = await new Promise((resolve, reject) => {
        reader.onload = e => resolve(reader.result);
      })

      await this.setShops();
      await this.setOrders();
      for (let day of ['mon','tue','wed','thu','fri']) {
        this.week.push({ day: day, cars: await this.loadWaysByDays(day)});
      };

      console.log('this.week', this.week);
    },
    async loadWaysByDays(day) {
      let dayOrders = await this.getDayOrders(day);
      console.log(`===== Cars for ${day.toUpperCase()} =====`);

      let cars = [];
      let currWay = 1;
      let loadP = true;
      let loadM = true;
      let way = null;
      
      while (loadP) {
        way = await this.loadWayP(dayOrders, currWay);
        if (this.getWayBoxes(way) > 0) {
          cars.push(way);
          currWay++;
        }
        if (this.getWayBoxes(way) < 120) loadP = false;
      }
      
      while (loadM) {
        way = await this.loadWayM(dayOrders, currWay);
        if (this.getWayBoxes(way) > 0) {
          cars.push(way);
          currWay++;
        }
        if (this.getCountBoxes(dayOrders) < 1) loadM = false;
      }

      console.log('cars', cars);
      console.log('dayOrders', dayOrders);

      return cars;
    },
    loadWayM(dayOrders, currWay) {
      let sum = 0;
      let way = {id: currWay, orders: []};
      let lastTT = 0; // чтобы далеко не ездили, могут пропускать только 9 ТТ
      for (let i = 0; i < dayOrders.length; i++) {
        if (+dayOrders[i].m + +dayOrders[i].n > 0
          && sum + +dayOrders[i].m + +dayOrders[i].n <= 120
          && (i - lastTT < 9 || lastTT === 0)) {
            let order = { ttId: i + 1 };
            if (+dayOrders[i].m > 0) order.m = +dayOrders[i].m;
            if (+dayOrders[i].n > 0) order.n = +dayOrders[i].n;
            // console.log('order', order);
            way.orders.push(order);
            sum += +dayOrders[i].m + +dayOrders[i].n;
            dayOrders[i].m = 0;
            dayOrders[i].n = 0;
            lastTT = i;
        }
      }
      way.sum = this.getWayBoxes(way);
      // if (way.sum > 0) {
      //   console.log(`Car M way = ${way.id} loaded ${way.sum} boxes`);
      // }

      way = this.getSequenceTT(way);

      return way;
    },
    loadWayP(dayOrders, currWay) {
      let startPos = 0;
      let currPos = 0;
      let sum = 0;
      // если текущий П = 0, то сдвигаем начало
      while (startPos < this.TT && +dayOrders[startPos].p === 0) {
        startPos++;
      }
      let way = {id: currWay, orders: []};
      // ищем сколько влезет П, грузим в машину и удаляем из dayOrders
      while (startPos + currPos < this.TT && sum + +dayOrders[startPos + currPos].p <= 120) {
        if (+dayOrders[startPos + currPos].p > 0) {
          way.orders.push({ttId: startPos + currPos + 1, p: +dayOrders[startPos + currPos].p});
          sum += +dayOrders[startPos + currPos].p;
          dayOrders[startPos + currPos].p = 0;
        }
        currPos++;
      }

      // добираем Н в цикле целые, после делим сколько влезет
      // console.log('way.orders', way.orders);
      currPos = 0;
      while (startPos + currPos < this.TT && sum + +dayOrders[startPos + currPos].n <= 120) {
        if (way.orders[currPos].p > 0) {
          way.orders[currPos].n = +dayOrders[startPos + currPos].n;
          sum += +dayOrders[startPos + currPos].n;
          dayOrders[startPos + currPos].n = 0;
        }
        currPos++;
      }
      if (startPos + currPos < this.TT) {
        way.orders[currPos].n = 120 - sum;
        dayOrders[startPos + currPos].n -= 120 - sum;
      }

      way.sum = this.getWayBoxes(way);
      // if (way.sum > 0) {
      //   console.log(`Car P way = ${way.id} loaded ${way.sum} boxes`);
      // }

      way = this.getSequenceTT(way);
      
      return way;
    },
    getSequenceTT(way) {
      const wayShops = way.orders.map(o => o.ttId);
      // console.log('wayShops', wayShops);
      if (!wayShops.length) return '0';
      const seqs = this.getNextTT("0", wayShops);
      // console.log('seqs', seqs);
      // const way1 = {};
      const seq = seqs.sort((a, b) => {
        if (+a.split('km')[1] > +b.split('km')[1]) return 1
        else return -1
      });
      way.bestSeq = seq[0].split('km')[0];
      way.bestSeqKM = seq[0].split('km')[1];
      const tts = way.bestSeq.split('-').length;
      way.time = +way.bestSeqKM*3 + +way.sum*0.5 + (tts - 2)*15;
      return way;
    },
    getNextTT(str, wayShops) {
      if (wayShops.length < 2) {
        const newStr = `${str}-${wayShops[0]}-0`;
        return [`${newStr}km${this.getKM(newStr)}`];
      }
      let seqs = [];
      wayShops.forEach(el => {
        seqs = [ ...seqs, ...this.getNextTT(`${str}-${el}`, wayShops.filter(ws => ws !== el))];
      });
      return seqs;
    },
    getKM(str) {
      const arrTT = str.split('-');
      let km = 0;
      for (let i = 0; i < arrTT.length - 1; i++) {
        const tt1 = this.shops.filter(sh => sh.ttId === arrTT[i])[0];
        const tt2 = this.shops.filter(sh => sh.ttId === arrTT[i + 1])[0];
        km += Math.abs(+tt1.x - +tt2.x) + Math.abs(+tt1.y - +tt2.y);
        // console.log('tt1, tt2, km', tt1, tt2, km);
      }
      return km;
    },
    getWayBoxes(way) {
      return way.orders && way.orders.length ? way.orders.map(el => (el.p?el.p:0) + (el.n?el.n:0) + (el.m?el.m:0))
        .reduce((acc, curr) => {return acc + curr}) : 0;
    },
    getCountBoxes(dayOrders) {
      return dayOrders.length ? dayOrders.map(el => (el.p?el.p:0) + (el.n?el.n:0) + (el.m?el.m:0))
        .reduce((acc, curr) => {return acc + curr}) : 0;
    },
    setShops() {
      this.shops = this.textFile.replaceAll("\r", "").split("\n")
        .slice(2,33)
        .map(s => s.split(";").slice(0,3))
        .map(arr => {
          return {ttId: arr[0], x: arr[1], y: arr[2]};
        });
    },
    setOrders() {
      this.orders = this.textFile.replaceAll("\r", "").split("\n")
        .slice(2,32)
        .map(s => [s.split(";")[0], ...s.split(";").slice(3,18)])
        .map(arr => {
          return {ttId: arr[0],
            mon: {p: arr[1], m: arr[2], n: arr[3]},
            tue: {p: arr[4], m: arr[5], n: arr[6]},
            wed: {p: arr[7], m: arr[8], n: arr[9]},
            thu: {p: arr[10], m: arr[11], n: arr[12]},
            fri: {p: arr[13], m: arr[12], n: arr[13]},
          };
        });
    },
    getDayOrders(day) {
      switch (day) {
        case 'mon':
          return this.orders.map(el => { return {ttId: el.ttId, p: el.mon.p, m: el.mon.m, n: el.mon.n}});
        case 'tue':
          return this.orders.map(el => { return {ttId: el.ttId, p: el.tue.p, m: el.tue.m, n: el.tue.n}});
        case 'wed':
          return this.orders.map(el => { return {ttId: el.ttId, p: el.wed.p, m: el.wed.m, n: el.wed.n}});
        case 'thu':
          return this.orders.map(el => { return {ttId: el.ttId, p: el.thu.p, m: el.thu.m, n: el.thu.n}});
        case 'fri':
          return this.orders.map(el => { return {ttId: el.ttId, p: el.fri.p, m: el.fri.m, n: el.fri.n}});
      
        default:
          return {};
      }
    }
  }
}
</script>
