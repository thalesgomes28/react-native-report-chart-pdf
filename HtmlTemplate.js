import React from "react"

const HtmlTemplate = ()=>{
return  `

<html>
<style>
    .item-list {
        margin: 0;
        padding-left: 1.2rem;
    }

    .item-list li {
        position: relative;
        list-style-type: none;
        padding-left: 2.5rem;
        margin-bottom: 0.5rem;
    }

    .item-list li:before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        top: -2px;
        width: 5px;
        height: 11px;
        border-width: 0 2px 2px 0;
        border-style: solid;
        border-color: #00a8a8;
        transform-origin: bottom left;
        transform: rotate(45deg);
    }

    /* Boilerplate stuff */

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }


    html {
        -webkit-font-smoothing: antialiased;
        font-family: "Helvetica Neue", sans-serif;
        font-size: 62.5%;
    }


    body {
        width: 790px;
        font-size: 1.6rem;
        /* 18px */
        background-color: #efefef;
        color: #324047
    }


    html,
    body,
    section {
        height: 100%;
    }


    section {
        max-width: 400px;
        margin-left: auto;
        margin-right: 10px;
        display: flex;
        align-items: center;
    }


    div {
        margin: auto;
    }
</style>


<head>
    <title>yy Names</title>
</head>

<body>
    <section>
        <div>
            <h2>Gráficos</h2>
            <canvas id="myChart" width="400" height="400"></canvas>
        </div>
    </section>
</body>

<script src="node_modules\chart.js\dist\Chart.js"></script>
<script>
 
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
</script>

</html>


`



}


export default HtmlTemplate