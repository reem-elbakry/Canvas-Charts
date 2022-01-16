var chemistryDegree;
var scienceDegree;
var mathDegree;
var arabicDegree;
var chemistryColor;
var scienceColor;
var mathColor;
var arabicColor;
var degrees;
var colors;
var totalDegrees;
var pieChartCheckbox = document.getElementById("pie-chart");
var donutChartChechbox = document.getElementById("donut-chart");
var barChartCheckbox = document.getElementById("bar-chart");
var lineChartCheckbox = document.getElementById("line-chart");

var drawButton = document.getElementById("draw");
drawButton.addEventListener("click", draw);
function draw()
{
    chemistryDegree = parseInt(document.getElementById("chemistryDegree").value);
    scienceDegree = parseInt(document.getElementById("scienceDegree").value);
    mathDegree = parseInt(document.getElementById("mathDegree").value);
    arabicDegree = parseInt(document.getElementById("arabicDegree").value);
    chemistryColor = document.getElementById("chemistryColor").value;
    scienceColor = document.getElementById("scienceColor").value;
    mathColor = document.getElementById("mathColor").value;
    arabicColor = document.getElementById("arabicColor").value;
    degrees = [chemistryDegree,mathDegree,scienceDegree, arabicDegree];
    colors = [chemistryColor,mathColor,scienceColor, arabicColor];
    

    totalDegrees = 0;
    for(var i=0; i<degrees.length; i++)
    {
        totalDegrees += degrees[i];
    }
    if(pieChartCheckbox.checked)
    {
        drawPieChart();
    }
    if(donutChartChechbox.checked)
    {
        drawDonutChart();
    }
    if(barChartCheckbox.checked)
    {
        drawBarChart();
    }
    if(lineChartCheckbox.checked)
    {
        drawLineChart();
    }
}

var pieChart = document.getElementById("pieChart");
var pieChartCtx = pieChart.getContext("2d");
function drawPieChart()
{
    var previousAngle = 0;
    for(var i=0; i<degrees.length; i++)
    {
        var offset = degrees[i]/totalDegrees;
        var endAngle = previousAngle + offset*2*Math.PI;
        pieChartCtx.fillStyle = colors[i];
        pieChartCtx.beginPath();
        pieChartCtx.arc(100,100,70,previousAngle,endAngle);
        pieChartCtx.lineTo(100,100);
        pieChartCtx.fill();
        previousAngle = endAngle;
    }
}

var donutChart = document.getElementById("donutChart");
var donutChartCtx = donutChart.getContext("2d");
function drawDonutChart()
{
    var startAngle = 0;
    for(var i=0; i<degrees.length; i++)
    {
        var offset = degrees[i]/totalDegrees;
        var endAngle = startAngle + offset*2*Math.PI;
        donutChartCtx.fillStyle = colors[i];
        donutChartCtx.beginPath();
        donutChartCtx.arc(100,100,70,startAngle,endAngle);
        donutChartCtx.lineTo(100,100);
        donutChartCtx.fill();
        startAngle = endAngle;
    }
    donutChartCtx.beginPath();
    donutChartCtx.arc(100,100,30,0,2*Math.PI);
    donutChartCtx.fillStyle = "rgb(240, 233, 233)";
    donutChartCtx.fill();
}

var barChart = document.getElementById("barChart");
var barChartCtx = barChart.getContext("2d");
function drawBarChart()
{
    barChartCtx.clearRect(0,0,barChart.width, barChart.height);
    for(var i=0; i<degrees.length; i++)
    {
        var degree = degrees[i];
        var degreePercentage = Math.round(degrees[i]/totalDegrees * 100);
        var label = degreePercentage+"%";
        barChartCtx.fillStyle = colors[i];
        barChartCtx.fillRect(0+i*56.6, barChart.height-degree*2,30, degree*2);
        barChartCtx.font = "10px Arial";
        barChartCtx.fillText(label, 0+i*56.6, barChart.height-degree*2-5);
    }
}

var lineChart = document.getElementById("lineChart");
var lineChartCtx = lineChart.getContext("2d");
function drawLineChart()
{
    var x = 0;
    var offset = 50;
    lineChartCtx.beginPath();
    lineChartCtx.moveTo(0,lineChart.height-degrees[0]*2);
    lineChartCtx.clearRect(0,0,lineChart.width, lineChart.height);
        for(var i=0; i<degrees.length; i++)
        {
            var degree = degrees[i];
            var degreePercentage = Math.round(degrees[i]/totalDegrees * 100);
            var label = degreePercentage+"%";
            lineChartCtx.lineTo(x,lineChart.height-degree*2);
            lineChartCtx.arc(x, lineChart.height-degree*2, 1, 0, 2 * Math.PI, true);
            lineChartCtx.stroke();
            lineChartCtx.font = "10px Arial";
            lineChartCtx.fillText(label, x, lineChart.height-degree*2-10);
            x += offset;
        }
}





