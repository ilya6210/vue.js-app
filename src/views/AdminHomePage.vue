<template>
    <b-container class="my-3">
        <div class="row">
            <div class="col-md-3 my-2">
                <div class="card shadow border_bottom_info">
                    <div class="card-body">
                        <div class="row">
                            <div class="col text-left">
                                <h6 class="text-muted">Price</h6>
                                <span>$200,000</span>
                            </div>
                            <div class="col text-right">
                                <h3><i class="fas fa-laptop"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 my-2">
                <div class="card shadow border_bottom_warning">
                    <div class="card-body">
                        <div class="row">
                            <div class="col text-left">
                                <h6 class="text-muted">Income</h6>
                                <span>$100,000</span>
                            </div>
                            <div class="col text-right">
                                <h3><i class="fas fa-shopping-cart"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 my-2">
                <div class="card shadow border_bottom_primary">
                    <div class="card-body">
                        <div class="row">
                            <div class="col text-left">
                                <h6 class="text-muted">Net</h6>
                                <span>$35,000</span>
                            </div>
                            <div class="col text-right">
                                <h3><i class="fas fa-money-check-alt"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-md-3 my-2">
                <div class="card shadow border_bottom_success">
                    <div class="card-body">
                        <div class="row">
                            <div class="col text-left">
                                <h6 class="text-muted">Views</h6>
                                <span>120,000</span>
                            </div>
                            <div class="col text-right">
                                <h3><i class="fas fa-users"></i></h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-12">
                <div class="card shadow">
                    <div class="card-body">
                        <BarChart
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
import BarChart from "@/components/admin/Charts/BarChart.js";

export default {
    name: "AdminHome",
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
        BarChart,
    },
};
</script>

<style scoped lang="scss">
h2 {
    font-size: 3em;
    font-weight: bold;
    color: #42b983;
}

.border_bottom_info {
    border-bottom: 3px solid #17a2b8;
}

.border_bottom_warning {
    border-bottom: 3px solid #ffc107;
}

.border_bottom_primary {
    border-bottom: 3px solid #007bff;
}

.border_bottom_success {
    border-bottom: 3px solid #28a745;
}
</style>
