(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"4e5a":function(t,e,s){"use strict";s("f11e")},"8b24":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-page",{staticClass:"flex flex-center q-pb-lg"},[s("div",{staticClass:"row justify-center items-center q-mt-lg"},[s("div",{staticClass:"col"},[s("q-input",{staticStyle:{"min-width":"200px"},attrs:{outlined:"",label:"Макс. время работы водителя (мин)"},model:{value:t.MAX_TIME,callback:function(e){t.MAX_TIME=e},expression:"MAX_TIME"}})],1),s("div",{staticClass:"col q-pl-md"},[s("q-input",{staticStyle:{"min-width":"200px"},attrs:{outlined:"",label:"Сколько ТТ можно пропустить"},model:{value:t.SKIP_TT,callback:function(e){t.SKIP_TT=e},expression:"SKIP_TT"}})],1),s("div",{staticClass:"col q-pl-md"},[s("q-file",{staticStyle:{"min-width":"200px"},attrs:{label:"Загрузить CSV файл",outlined:""},on:{input:t.input},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}})],1),s("div",{staticClass:"col q-pl-md"},[s("a",{staticClass:"text-primary",attrs:{href:"logist.csv"}},[t._v("Скачать пример файла logist.csv")])])]),s("div",{staticClass:"row full-width justify-center"},[s("q-table",{staticClass:"q-mt-lg",attrs:{title:"Координаты магазинов",data:t.shops,columns:t.shopColumns,"rows-per-page-options":[0],"row-key":"ttId","hide-bottom":""}}),s("q-table",{staticClass:"q-mt-lg q-ml-lg",attrs:{title:"Заказы магазинов по дням недели",data:t.orders,columns:t.ordersColumns,"rows-per-page-options":[0],"row-key":"ttId","hide-bottom":""},scopedSlots:t._u([{key:"body",fn:function(e){return[s("q-tr",{attrs:{props:e}},[s("q-td",{key:"ttId",attrs:{props:e}},[t._v("\n            "+t._s(e.row.ttId)+"\n          ")]),s("q-td",{key:"monP",attrs:{props:e}},[t._v("\n            "+t._s(e.row.mon.p)+"\n          ")]),s("q-td",{key:"monM",attrs:{props:e}},[t._v("\n            "+t._s(e.row.mon.m)+"\n          ")]),s("q-td",{key:"monN",attrs:{props:e}},[t._v("\n            "+t._s(e.row.mon.n)+"\n          ")]),s("q-td",{key:"tueP",attrs:{props:e}},[t._v("\n            "+t._s(e.row.tue.p)+"\n          ")]),s("q-td",{key:"tueM",attrs:{props:e}},[t._v("\n            "+t._s(e.row.tue.m)+"\n          ")]),s("q-td",{key:"tueN",attrs:{props:e}},[t._v("\n            "+t._s(e.row.tue.n)+"\n          ")]),s("q-td",{key:"wedP",attrs:{props:e}},[t._v("\n            "+t._s(e.row.wed.p)+"\n          ")]),s("q-td",{key:"wedM",attrs:{props:e}},[t._v("\n            "+t._s(e.row.wed.m)+"\n          ")]),s("q-td",{key:"wedN",attrs:{props:e}},[t._v("\n            "+t._s(e.row.wed.n)+"\n          ")]),s("q-td",{key:"thuP",attrs:{props:e}},[t._v("\n            "+t._s(e.row.thu.p)+"\n          ")]),s("q-td",{key:"thuM",attrs:{props:e}},[t._v("\n            "+t._s(e.row.thu.m)+"\n          ")]),s("q-td",{key:"thuN",attrs:{props:e}},[t._v("\n            "+t._s(e.row.thu.n)+"\n          ")]),s("q-td",{key:"friP",attrs:{props:e}},[t._v("\n            "+t._s(e.row.fri.p)+"\n          ")]),s("q-td",{key:"friM",attrs:{props:e}},[t._v("\n            "+t._s(e.row.fri.m)+"\n          ")]),s("q-td",{key:"friN",attrs:{props:e}},[t._v("\n            "+t._s(e.row.fri.n)+"\n          ")])],1)]}}])})],1),t.weekCounted?s("PrintWaysByDays",{attrs:{week:t.week,MAX_TIME:+t.MAX_TIME}}):t._e()],1)},r=[],l=(s("e6cf"),s("ddb0"),s("4e82"),s("13d5"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"print"},[t._l(t.week,(function(e){return s("div",{key:e.day,staticClass:"row q-pt-xl"},[s("div",{staticClass:"full-width text-center text-h5 text-bold bg-purple-2"},[t._v(t._s(e.day.toUpperCase()))]),s("div",{staticClass:"flex justify-center"},t._l(e.cars,(function(t){return s("div",{key:t.id,staticClass:"q-ml-md"},[s("Way",{attrs:{way:t}})],1)})),0)])})),t.paths&&t.paths.length?s("div",t._l(t.paths,(function(e){return s("div",{key:e.path,staticClass:"row q-pt-xl"},[s("div",{staticClass:"row full-width justify-center"},[s("q-table",{staticClass:"q-mt-lg",attrs:{title:t.week[e.day-1].day.toUpperCase(),data:t.getCountedPath(e.paths),columns:t.pathColumns,"rows-per-page-options":[0],"row-key":"ttId","hide-bottom":""}})],1)])})),0):t._e(),t.paths&&t.paths.length?s("div",{staticClass:"row justify-center q-px-lg"},t._l(t.paths,(function(e){return s("div",{key:e.day,staticClass:"q-pt-xl full-width"},[s("div",{staticClass:"full-width text-center text-h5 text-bold bg-purple-2 print__table-cars-label"},[t._v("\n        "+t._s(t.week[e.day-1].day.toUpperCase())+"\n      ")]),s("table",{staticClass:"text-center print__table-cars full-width"},[t._m(0,!0),s("tbody",[t._l(t.carsByDay(e.day-1),(function(a){return s("tr",{key:a.paths},[s("td",[t._v(t._s(t.getCarNumber(e.day-1,a)))]),s("td",[t._v(t._s(t.isOwnCar(e,a)?"собств.":"наемн."))]),s("td",[t._v(t._s(a.path.map((function(t){return t.id})).join(", ")))]),s("td",[t._v(t._s(t.getTimeByWays(a)))]),s("td",[t._v(t._s(t.getDigitClock(a.sumTime)))]),s("td",[t._v(t._s(a.sumKM))]),s("td",[t._v(t._s(t.payForKM(a.sumKM,e,a)))]),s("td",[t._v(t._s(t.isOwnCar(e,a)?300:1500))]),s("td",[t._v(t._s(t.payDriver(a.sumTime)))]),s("td",[t._v(t._s(t.shtrafSum(a)))]),s("td",[t._v(t._s(t.shtrafTime(a.sumTime,e,a)))]),s("td",[t._v(t._s(t.isOwnCar(e,a)?0:600))]),s("td",[t._v(t._s(t.payForKM(a.sumKM,e,a)+(t.isOwnCar(e,a)?300:1500)+ +t.shtrafSum(a).split("= ")[1]+t.shtrafTime(a.sumTime,e,a)+t.payDriver(a.sumTime)+(t.isOwnCar(e,a)?0:600))+"\n            ")])])})),s("tr",[s("td"),s("td"),s("td"),s("td",[t._v(t._s("P = "+e.paths.slice(0).map((function(t){return t.sum})).reduce((function(t,e){return t+e}))))]),s("td",[t._v(t._s("T = "+e.paths.slice(0).map((function(t){return t.sumTime})).reduce((function(t,e){return t+e}))))]),s("td",[t._v(t._s("L = "+e.paths.slice(0).map((function(t){return t.sumKM})).reduce((function(t,e){return t+e}))))]),s("td"),s("td"),t._m(1,!0),s("td",{ref:"total",refInFor:!0},[t._v(t._s(""+-e.paths.slice(0).map((function(e){return t.shtrafSumByDay(e)})).join(",").split(",").sort((function(t,e){return e-t}))[0]))]),s("td",{ref:"total",refInFor:!0},[t._v(t._s(""+-e.paths.slice(0).map((function(s){return t.shtrafTime(s.sumTime,e,s)})).reduce((function(t,e){return t+e}))))]),s("td"),s("td",{ref:"total",refInFor:!0},[t._v(t._s(""+e.paths.slice(0).map((function(s){return t.payForKM(s.sumKM,e,s)+(t.isOwnCar(e,s)?300:1500)+ +t.shtrafSumForTotal(s)+t.shtrafTime(s.sumTime,e,s)+t.payDriver(s.sumTime)+(t.isOwnCar(e,s)?0:600)})).reduce((function(t,e){return t+e})))+"\n            ")])])],2)]),t._v("\n      "+t._s(4===e.day?t.setTotal():"")+"\n    ")])})),0):t._e(),s("div",{staticClass:"row justify-center q-pa-lg text-h6"},[t._v("\n    Итого: "+t._s(t.total)+"\n  ")])],2)}),n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("№ машины")]),s("th",[t._v("Собственная"),s("br"),t._v("наемная")]),s("th",[t._v("Номера"),s("br"),t._v("машрутов")]),s("th",[t._v("Количество"),s("br"),t._v("коробок")]),s("th",[t._v("Количество"),s("br"),t._v("часов")]),s("th",[t._v("Пробег"),s("br"),t._v("за день")]),s("th",[t._v("Плата"),s("br"),t._v("за пробег")]),s("th",[t._v("Содержание"),s("br"),t._v("авто")]),s("th",[t._v("Сверхурочные"),s("br"),t._v("водителя")]),s("th",[t._v("Штраф менее"),s("br"),t._v("90 коробок")]),s("th",[t._v("Штраф менее"),s("br"),t._v("6 часов")]),s("th",[t._v("Расходы"),s("br"),t._v("на охрану")]),s("th",[t._v("Всего")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("td",[t._v("Последний рейс"),s("br"),t._v("(не штрафуется):")])}],i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("q-card",{staticClass:"row q-mt-lg"},[s("q-card-section",[s("q-table",{attrs:{title:"Маршрут № "+t.way.id,data:t.way.orders,columns:t.orderColumns,"rows-per-page-options":[0],"row-key":"ttId","hide-bottom":"",dense:"",flat:"",bordered:""}})],1),s("q-card-section",[s("div",{staticClass:"row text-bold"},[t._v("\n      Результаты расчета по маршруту\n    ")]),s("div",{staticClass:"row"},[t._v("\n      Путь объезда магазинов по маршруту"),s("br"),t._v("\n      "+t._s("M = "+t.way.bestSeq)+"\n    ")]),s("div",{staticClass:"row"},[t._v("\n      Количество перевезенного груза"),s("br"),t._v("\n      "+t._s("P = "+t.way.sum)+"\n    ")]),s("div",{staticClass:"row"},[t._v("\n      "+t._s("Длина маршрута L = "+t.way.bestSeqKM+" км")+"\n    ")]),s("div",{staticClass:"row"},[t._v("\n      Время работы машины на маршруте"),s("br"),t._v("\n      "+t._s("T = "+t.way.bestSeqKM+"*3 + "+t.way.sum+"*0.5 + "+(t.way.bestSeq.split("-").length-2)+"*15 = "+t.way.time+" мин")+"\n    ")])])],1)},o=[],p={name:"Way",props:{way:Object},data(){return{orderColumns:[{name:"ttId",align:"center",label:"Магазин",field:"ttId",classes:"bg-purple-2",headerClasses:"bg-purple-2 text-bold"},{name:"p",label:"П",field:"p"},{name:"m",label:"М",field:"m"},{name:"n",label:"Н",field:"n"}]}},methods:{}},d=p,u=s("2877"),m=s("f09f"),h=s("a370"),c=s("eaac"),f=s("eebe"),_=s.n(f),y=Object(u["a"])(d,i,o,!1,null,null,null),g=y.exports;_()(y,"components",{QCard:m["a"],QCardSection:h["a"],QTable:c["a"]});const b=110;var w={name:"PrintWaysByDays",components:{Way:g},props:{week:Array,MAX_TIME:Number},data(){return{paths:[],pathColumns:[{name:"id",align:"center",label:"Номер машины",field:"id"},{name:"path1",align:"center",label:"Номер маршрута",field:"path1",classes:"bg-purple-2",headerClasses:"bg-purple-2"},{name:"o1",label:"Отправление",field:"o1"},{name:"p1",label:"Прибытие",field:"p1"},{name:"path2",align:"center",label:"Номер маршрута",field:"path2",classes:"bg-purple-2",headerClasses:"bg-purple-2"},{name:"o2",label:"Отправление",field:"o2"},{name:"p2",label:"Прибытие",field:"p2"},{name:"path3",align:"center",label:"Номер маршрута",field:"path3",classes:"bg-purple-2",headerClasses:"bg-purple-2"},{name:"o3",label:"Отправление",field:"o3"},{name:"p3",label:"Прибытие",field:"p3"},{name:"km",label:"Длина",field:"km"},{name:"time",label:"Время",field:"time"}],total:0}},async mounted(){if(!(this.week.length<5))for(let t=1;t<6;t++)this.paths.push({day:t,paths:await this.getPathByDay(t)})},methods:{shtrafTime(t,e,s){return t<360?this.isOwnCar(e,s)?300:500:0},shtrafSum(t){const e=t.path.map((t=>t.sum<90?50*(90-t.sum):0));return e.join(" + ")+" = "+e.reduce(((t,e)=>t+e))},shtrafSumForTotal(t){const e=t.path.map((t=>t.sum<90?50*(90-t.sum):0)).reduce(((t,e)=>t+e));return e},shtrafSumByDay(t){return t.path.map((t=>t.sum<90?50*(90-t.sum):0))},getTimeByWays(t){const e=t.path.map((t=>t.sum));return e.length<2?e:e.join(" + ")+" = "+t.sum},getCountedPath(t){let e=1,s=[];return t.forEach((t=>{const a={};a.id=e++,a.path1=t.path[0].id,a.o1=this.getDigitClock(480),a.p1=this.getDigitClock(+t.path[0].time+480),a.path2=t.path[1]?t.path[1].id:"",a.o2=t.path[1]?this.getDigitClock(+t.path[0].time+480+30):"",a.p2=t.path[1]?this.getDigitClock(+t.path[0].time+480+30+ +t.path[1].time):"",a.path3=t.path[2]?t.path[2].id:"",a.o3=t.path[2]?this.getDigitClock(+t.path[0].time+480+30+ +t.path[1].time+30):"",a.p3=t.path[2]?this.getDigitClock(+t.path[0].time+480+30+ +t.path[1].time+30+ +t.path[2].time):"",a.km=t.sumKM,a.time=t.sumTime,s.push(a)})),s},getDigitClock(t){let e=""+Math.trunc(+t/60),s=""+ +t%60;return`${1===e.length?"0"+e:e}:${1===s.length?"0"+s:s}`},getWaysSortByTime(t){return t?t.cars.slice(0).sort(((t,e)=>+e.time-+t.time)):[]},async getPathByDay(t){let e=await this.getWaysSortByTime(this.week[t-1]);console.log(`======= Day ${t} ========`),console.log(`wayByTime ${t}`,e.map((t=>t.time)));const s=[];return e=await this.getNextPath(s,e),console.log(`wayByTime ${t} after`,e.map((t=>t.time))),console.log(`paths ${t} sumTime`,s.map((t=>t.sumTime))),console.log(`paths ${t} sumKM`,s.map((t=>t.sumKM))),console.log(`paths ${t}`,s),s},async getNextPath(t,e){if(!e.length)return e;if(e.length<2)return this.pushOnePath(t,e);const s=e.slice(1).filter((t=>t.time<this.MAX_TIME-30-e[0].time))[0];if(s){let a={sumKM:+e[0].bestSeqKM+ +s.bestSeqKM,sumTime:e[0].time+30+s.time,sum:e[0].sum+s.sum,path:[e[0],s]};e.splice(e.indexOf(s),1),e=this.getPathArray(a,e.slice(1)),t.push(a)}else e=this.pushOnePath(t,e);return await this.getNextPath(t,e)},getPathArray(t,e){const s=e.filter((e=>e.time<this.MAX_TIME-30-t.sumTime))[0];return s&&t.sumKM+ +s.bestSeqKM<b&&(t.path.push(s),t.sumKM+=+s.bestSeqKM,t.sumTime+=30+s.time,t.sum+=s.sum,e.splice(e.indexOf(s),1),e=this.getPathArray(t,e)),e},pushOnePath(t,e){return t.push({sumKM:+e[0].bestSeqKM,sumTime:e[0].time,sum:e[0].sum,path:[e[0]]}),e.slice(1)},carsByDay(t){return this.paths[t].paths},getCarNumber(t,e){return this.carsByDay(t).indexOf(e)+1},isOwnCar(t,e){return this.getCarNumber(t.day-1,e)<7},payForKM(t,e,s){return this.isOwnCar(e,s)?15*t:30*t},payDriver(t){return t>480?5*(t-480):0},setTotal(){this.$forceUpdate,this.$nextTick((()=>{this.$refs.total&&(this.total=this.$refs.total.map((t=>+t.innerText)).reduce(((t,e)=>t+e)),console.log("total",this.total))}))}}},v=w,C=(s("4e5a"),Object(u["a"])(v,l,n,!1,null,null,null)),T=C.exports;_()(C,"components",{QTable:c["a"]});var M={name:"PageIndex",components:{PrintWaysByDays:T},data(){return{SKIP_TT:9,MAX_TIME:605,file:null,textFile:null,shops:[],orders:[],week:[],weekCounted:!1,TT:30,shopColumns:[{name:"ttId",align:"center",label:"Магазин",field:"ttId",sortable:!0,classes:"bg-purple-2",headerClasses:"bg-purple-2"},{name:"x",label:"X",field:"x"},{name:"y",label:"Y",field:"y"}],ordersColumns:[{name:"ttId",align:"center",label:"Магазин",field:"ttId",sortable:!0,classes:"bg-purple-2",headerClasses:"bg-purple-2"},{name:"monP",label:"пн П",field:"monP"},{name:"monM",label:"пн М",field:"monM"},{name:"monN",label:"пн Н",field:"monN"},{name:"tueP",label:"вт П",field:"tueP",classes:"bg-grey-2",headerClasses:"bg-grey-2"},{name:"tueM",label:"вт М",field:"tueM",classes:"bg-grey-2",headerClasses:"bg-grey-2"},{name:"tueN",label:"вт Н",field:"tueN",classes:"bg-grey-2",headerClasses:"bg-grey-2"},{name:"wedP",label:"ср П",field:"wedP"},{name:"wedM",label:"ср М",field:"wedM"},{name:"wedN",label:"ср Н",field:"wedN"},{name:"thuP",label:"чт П",field:"thuP",classes:"bg-grey-2",headerClasses:"bg-grey-2"},{name:"thuM",label:"чт М",field:"thuM",classes:"bg-grey-2",headerClasses:"bg-grey-2"},{name:"thuN",label:"чт Н",field:"thuN",classes:"bg-grey-2",headerClasses:"bg-grey-2"},{name:"friP",label:"пт П",field:"friP"},{name:"friM",label:"пт М",field:"friM"},{name:"friN",label:"пт Н",field:"friN"}]}},methods:{async input(){const t=new FileReader;t.readAsText(this.file),this.textFile=await new Promise(((e,s)=>{t.onload=s=>e(t.result)})),await this.setShops(),await this.setOrders();for(let e of["понедельник","вторник","среда","четверг","пятница"])this.week.push({day:e,cars:await this.loadWaysByDays(e)});console.log("this.week",this.week),this.weekCounted=!0},async loadWaysByDays(t){let e=await this.getDayOrders(t);console.log(`===== Cars for ${t.toUpperCase()} =====`);let s=[],a=1,r=!0,l=!0,n=null;while(r)n=await this.loadWayP(e,a),this.getWayBoxes(n)>0&&(s.push(n),a++),this.getWayBoxes(n)<120&&(r=!1);while(l)n=await this.loadWayM(e,a),this.getWayBoxes(n)>0&&(s.push(n),a++),this.getCountBoxes(e)<1&&(l=!1);return console.log("cars",s),console.log("dayOrders",e),s},loadWayM(t,e){let s=0,a={id:e,orders:[]},r=0;for(let l=0;l<t.length;l++)if(+t[l].m+ +t[l].n>0&&s+ +t[l].m+ +t[l].n<=120&&(l-r<+this.SKIP_TT||0===r)){let e={ttId:l+1};+t[l].m>0&&(e.m=+t[l].m),+t[l].n>0&&(e.n=+t[l].n),a.orders.push(e),s+=+t[l].m+ +t[l].n,t[l].m=0,t[l].n=0,r=l}return a.sum=this.getWayBoxes(a),a=this.getSequenceTT(a),a},loadWayP(t,e){let s=0,a=0,r=0;while(s<this.TT&&0===+t[s].p)s++;let l={id:e,orders:[]};while(s+a<this.TT&&r+ +t[s+a].p<=120)+t[s+a].p>0&&(l.orders.push({ttId:s+a+1,p:+t[s+a].p}),r+=+t[s+a].p,t[s+a].p=0),a++;a=0;while(s+a<this.TT&&r+ +t[s+a].n<=120)l.orders[a].p>0&&(l.orders[a].n=+t[s+a].n,r+=+t[s+a].n,t[s+a].n=0),a++;return s+a<this.TT&&(l.orders[a].n=120-r,t[s+a].n-=120-r),l.sum=this.getWayBoxes(l),l=this.getSequenceTT(l),l},getSequenceTT(t){const e=t.orders.map((t=>t.ttId));if(!e.length)return"0";const s=this.getNextTT("0",e),a=s.sort(((t,e)=>+t.split("km")[1]>+e.split("km")[1]?1:-1));t.bestSeq=a[0].split("km")[0],t.bestSeqKM=a[0].split("km")[1];const r=t.bestSeq.split("-").length;return t.time=3*+t.bestSeqKM+.5*+t.sum+15*(r-2),t},getNextTT(t,e){if(e.length<2){const s=`${t}-${e[0]}-0`;return[`${s}km${this.getKM(s)}`]}let s=[];return e.forEach((a=>{s=[...s,...this.getNextTT(`${t}-${a}`,e.filter((t=>t!==a)))]})),s},getKM(t){const e=t.split("-");let s=0;for(let a=0;a<e.length-1;a++){const t=this.shops.filter((t=>t.ttId===e[a]))[0],r=this.shops.filter((t=>t.ttId===e[a+1]))[0];s+=Math.abs(+t.x-+r.x)+Math.abs(+t.y-+r.y)}return s},getWayBoxes(t){return t.orders&&t.orders.length?t.orders.map((t=>(t.p?t.p:0)+(t.n?t.n:0)+(t.m?t.m:0))).reduce(((t,e)=>t+e)):0},getCountBoxes(t){return t.length?t.map((t=>(t.p?t.p:0)+(t.n?t.n:0)+(t.m?t.m:0))).reduce(((t,e)=>t+e)):0},setShops(){this.shops=this.textFile.replaceAll("\r","").split("\n").slice(2,33).map((t=>t.split(";").slice(0,3))).map((t=>({ttId:t[0],x:t[1],y:t[2]})))},setOrders(){this.orders=this.textFile.replaceAll("\r","").split("\n").slice(2,32).map((t=>[t.split(";")[0],...t.split(";").slice(3,18)])).map((t=>({ttId:t[0],mon:{p:t[1],m:t[2],n:t[3]},tue:{p:t[4],m:t[5],n:t[6]},wed:{p:t[7],m:t[8],n:t[9]},thu:{p:t[10],m:t[11],n:t[12]},fri:{p:t[13],m:t[12],n:t[13]}})))},getDayOrders(t){switch(t){case"понедельник":return this.orders.map((t=>({ttId:t.ttId,p:t.mon.p,m:t.mon.m,n:t.mon.n})));case"вторник":return this.orders.map((t=>({ttId:t.ttId,p:t.tue.p,m:t.tue.m,n:t.tue.n})));case"среда":return this.orders.map((t=>({ttId:t.ttId,p:t.wed.p,m:t.wed.m,n:t.wed.n})));case"четверг":return this.orders.map((t=>({ttId:t.ttId,p:t.thu.p,m:t.thu.m,n:t.thu.n})));case"пятница":return this.orders.map((t=>({ttId:t.ttId,p:t.fri.p,m:t.fri.m,n:t.fri.n})));default:return{}}}}},k=M,q=s("9989"),x=s("27f9"),I=s("7d53"),P=s("bd08"),S=s("db86"),K=Object(u["a"])(k,a,r,!1,null,null,null);e["default"]=K.exports;_()(K,"components",{QPage:q["a"],QInput:x["a"],QFile:I["a"],QTable:c["a"],QTr:P["a"],QTd:S["a"]})},f11e:function(t,e,s){}}]);