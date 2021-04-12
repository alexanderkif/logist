<template>
  <q-card class="row q-mt-lg">
    <q-card-section>
      <q-table
        :title="`Маршрут № ${way.id}`"
        :data="way.orders"
        :columns="orderColumns"
        :rows-per-page-options="[0]"
        row-key="ttId"
        hide-bottom
        dense
        flat
        bordered
      />
    </q-card-section>
    
    <q-card-section>
      <div class="row text-bold">
        Результаты расчета по маршруту
      </div>
      <div class="row">
        Количество перевезенного груза<br />
        {{ `P = ${way.sum}` }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  name: 'Way',
  props: {
    way: Object
  },
  data() {
    return {
      // orders: this.way.orders,
      orderColumns: [
        // { name: 'way', label: 'Маршрут', field: 'way' },
        { name: 'ttId', align: 'center', label: 'Магазин', field: 'ttId',
          classes: 'bg-purple-2', headerClasses: 'bg-purple-2 text-bold' },
        { name: 'p', label: 'П', field: 'p' },
        { name: 'm', label: 'М', field: 'm' },
        { name: 'n', label: 'Н', field: 'n' },
        // { name: 'r', label: 'Результаты расчета по маршруту', field: 'r' }
      ],
    }
  },
  methods: {
    // getWayBoxes(way) {
    //   return way.orders.length ? way.orders.map(el => (el.p?el.p:0) + (el.n?el.n:0) + (el.m?el.m:0))
    //     .reduce((acc, curr) => {return acc + curr}) : 0;
    // },
  },
}
</script>
