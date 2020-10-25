<template>
    <b-container class="my-3">
        <div class="row">
            <div class="col-md-10 offset-md-1">
                <div class="card shadow">
                    <div class="card-header bg-transparent">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="main-color font-weight-bold mb-0">
                                    Overview line chart
                                </h3>
                            </div>
                            <div class="col text-right">
                                <button class="btn btn-sm btn-info shadow-sm">
                                    See all
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <LineChart
                            :chartdata="chartdata"
                            :options="chartOptions"
                        />
                    </div>
                </div>
            </div>

            <div class="col-md-10 offset-md-1 mt-4">
                <div class="card shadow">
                    <div class="card-header bg-transparent">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="main-color font-weight-bold mb-0">
                                    Overview Bar chart
                                </h3>
                            </div>
                            <div class="col text-right">
                                <ul
                                    class="nav nav-pills ml-auto justify-content-end"
                                >
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            @click.prevent="selectedBar = 0"
                                            href="#"
                                            :class="{
                                                active: selectedBar == 0,
                                            }"
                                            >Stacked</a
                                        >
                                    </li>
                                    <li class="nav-item">
                                        <a
                                            class="nav-link"
                                            :class="{
                                                active: selectedBar == 1,
                                            }"
                                            @click.prevent="selectedBar = 1"
                                            href="#"
                                            >Unstacked</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <BarChart
                            :chartData="chartdata"
                            :options="barChartOptions"
                        />
                    </div>
                </div>
            </div>

            <div class="col-md-10 offset-md-1 mt-4">
                <div class="card shadow">
                    <div class="card-header bg-transparent">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="main-color font-weight-bold mb-0">
                                    Overview Doughnut chart
                                </h3>
                            </div>
                            <div class="col text-right">
                                <button class="btn btn-sm btn-info shadow-sm">
                                    See all
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <Doughnut
                            :chartdata="chartdata"
                            :options="chartOptions"
                        />
                    </div>
                </div>
            </div>

            <div class="col-md-5 offset-md-1 mt-4">
                <div class="card shadow">
                    <div class="card-header bg-transparent">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="main-color font-weight-bold mb-0">
                                    Overview Radar chart
                                </h3>
                            </div>
                            <div class="col text-right">
                                <button class="btn btn-sm btn-info shadow-sm">
                                    See all
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <RadarChart
                            :chartData="chartdata"
                            :options="chartOptions"
                        />
                    </div>
                </div>
            </div>

            <div class="col-md-5  mt-4">
                <div class="card shadow">
                    <div class="card-header bg-transparent">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="main-color font-weight-bold mb-0">
                                    Overview Polar chart
                                </h3>
                            </div>
                            <div class="col text-right">
                                <button class="btn btn-sm btn-info shadow-sm">
                                    See all
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <PolarChart
                            :chartData="chartdata"
                            :options="chartOptions"
                        />
                    </div>
                </div>
            </div>
        </div>
    </b-container>
</template>

<script>
import LineChart from "@/components/admin/Charts/LineChart.js";
import BarChart from "@/components/admin/Charts/BarChart.js";
import Doughnut from "@/components/admin/Charts/DoughnutChart.js";
import RadarChart from "@/components/admin/Charts/RadarChart.js";
import PolarChart from "@/components/admin/Charts/PolarChart.js";

export default {
    name: "AdminChart",
    data: () => ({
        loaded: false,
        selectedBar: 0,
        chartdata: {
            labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
            ],
            datasets: [
                {
                    label: "Visits",
                    backgroundColor: "#42b9836b",
                    borderColor: "#42b983",
                    fill: "start",
                    data: [10, 20, 15, 13, 25, 5, 17],
                },
                {
                    label: "Views",
                    fill: false,
                    backgroundColor: "#007bff6b",
                    borderColor: "#008ffb",
                    data: [4, 10, 22, 20, 8, 15, 13],
                },
            ],
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        },
    }),
    components: {
        LineChart,
        Doughnut,
        BarChart,
        RadarChart,
        PolarChart,
    },
    computed: {
        barChartOptions() {
            return {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    xAxes: [
                        {
                            stacked: !this.selectedBar,
                        },
                    ],
                    yAxes: [
                        {
                            stacked: !this.selectedBar,
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                },
            };
        },
    },
};
</script>

<style scoped lang="scss">
.card-body {
    max-height: 500px;
}
.nav-link {
    color: #42b983;
}
.nav-link.active {
    background-color: #42b983;
}
.card-body > * {
    max-height: 500px;
    min-height: 400px;
}
@media (max-width: 575px) {
    .card-body > * {
        max-height: 200px;
        min-height: 30px;
    }
}
</style>
