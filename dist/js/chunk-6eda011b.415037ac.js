(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6eda011b"],{"5c38":function(t,a,s){"use strict";var e=s("ef45"),i=s.n(e);i.a},d45b:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("b-container",{staticClass:"my-3"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-10 offset-md-1"},[s("div",{staticClass:"card shadow"},[s("div",{staticClass:"card-header bg-transparent"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"main-color font-weight-bold mb-0"},[t._v(" Overview line chart ")])]),s("div",{staticClass:"col text-right"},[s("button",{staticClass:"btn btn-sm btn-info shadow-sm"},[t._v(" See all ")])])])]),s("div",{staticClass:"card-body"},[s("LineChart",{attrs:{chartdata:t.chartdata,options:t.chartOptions}})],1)])]),s("div",{staticClass:"col-md-10 offset-md-1 mt-4"},[s("div",{staticClass:"card shadow"},[s("div",{staticClass:"card-header bg-transparent"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"main-color font-weight-bold mb-0"},[t._v(" Overview Bar chart ")])]),s("div",{staticClass:"col text-right"},[s("ul",{staticClass:"nav nav-pills ml-auto justify-content-end"},[s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:0==t.selectedBar},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.selectedBar=0}}},[t._v("Stacked")])]),s("li",{staticClass:"nav-item"},[s("a",{staticClass:"nav-link",class:{active:1==t.selectedBar},attrs:{href:"#"},on:{click:function(a){a.preventDefault(),t.selectedBar=1}}},[t._v("Unstacked")])])])])])]),s("div",{staticClass:"card-body"},[s("BarChart",{attrs:{chartData:t.chartdata,options:t.barChartOptions}})],1)])]),s("div",{staticClass:"col-md-10 offset-md-1 mt-4"},[s("div",{staticClass:"card shadow"},[s("div",{staticClass:"card-header bg-transparent"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"main-color font-weight-bold mb-0"},[t._v(" Overview Doughnut chart ")])]),s("div",{staticClass:"col text-right"},[s("button",{staticClass:"btn btn-sm btn-info shadow-sm"},[t._v(" See all ")])])])]),s("div",{staticClass:"card-body"},[s("Doughnut",{attrs:{chartdata:t.chartdata,options:t.chartOptions}})],1)])]),s("div",{staticClass:"col-md-5 offset-md-1 mt-4"},[s("div",{staticClass:"card shadow"},[s("div",{staticClass:"card-header bg-transparent"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"main-color font-weight-bold mb-0"},[t._v(" Overview Radar chart ")])]),s("div",{staticClass:"col text-right"},[s("button",{staticClass:"btn btn-sm btn-info shadow-sm"},[t._v(" See all ")])])])]),s("div",{staticClass:"card-body"},[s("RadarChart",{attrs:{chartData:t.chartdata,options:t.chartOptions}})],1)])]),s("div",{staticClass:"col-md-5  mt-4"},[s("div",{staticClass:"card shadow"},[s("div",{staticClass:"card-header bg-transparent"},[s("div",{staticClass:"row align-items-center"},[s("div",{staticClass:"col"},[s("h3",{staticClass:"main-color font-weight-bold mb-0"},[t._v(" Overview Polar chart ")])]),s("div",{staticClass:"col text-right"},[s("button",{staticClass:"btn btn-sm btn-info shadow-sm"},[t._v(" See all ")])])])]),s("div",{staticClass:"card-body"},[s("PolarChart",{attrs:{chartData:t.chartdata,options:t.chartOptions}})],1)])])])])},i=[],r=s("1fca"),c={extends:r["c"],props:{chartdata:{type:Object,default:{labels:["January","February","March"],datasets:[{label:"Data One",backgroundColor:"#42b983",data:[40,20,30]}]}},options:{type:Object,default:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},n=s("25d5"),o={extends:r["b"],props:{chartdata:{type:Object,default:{labels:["January","February","March"],datasets:[{label:"Data One",backgroundColor:"#42b983",data:[40,20,30]}]}},options:{type:Object,default:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartdata,this.options)}},l={extends:r["e"],props:{chartData:{type:Object,default:function(){return{labels:["January","February","March"],datasets:[{label:"Data One",backgroundColor:"#42b983",data:[40,20,30]}]}}},options:{type:Object,default:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},d={extends:r["d"],props:{chartData:{type:Object,default:function(){return{labels:["January","February","March"],datasets:[{label:"Data One",backgroundColor:"#42b983",data:[40,20,30]}]}}},options:{type:Object,default:{responsive:!0,maintainAspectRatio:!1}}},mounted:function(){this.renderChart(this.chartData,this.options)}},h={name:"AdminChart",data:function(){return{loaded:!1,selectedBar:0,chartdata:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"Visits",backgroundColor:"#42b9836b",borderColor:"#42b983",fill:"start",data:[10,20,15,13,25,5,17]},{label:"Views",fill:!1,backgroundColor:"#007bff6b",borderColor:"#008ffb",data:[4,10,22,20,8,15,13]}]},chartOptions:{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{ticks:{beginAtZero:!0}}]}}}},components:{LineChart:c,Doughnut:o,BarChart:n["a"],RadarChart:l,PolarChart:d},computed:{barChartOptions:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{stacked:!this.selectedBar}],yAxes:[{stacked:!this.selectedBar,ticks:{beginAtZero:!0}}]}}}}},b=h,v=(s("5c38"),s("2877")),C=Object(v["a"])(b,e,i,!1,null,"4b24b2f8",null);a["default"]=C.exports},ef45:function(t,a,s){}}]);
//# sourceMappingURL=chunk-6eda011b.415037ac.js.map