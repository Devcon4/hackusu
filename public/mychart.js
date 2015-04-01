// Setup Data for Chart
var data = [
    {
        value: 25.6,
        color:"#1C1D21",
        label: "Freshman"
    },
    {
        value: 23.1,
        color: "#31353D",
        label: "Sophomore"
    },
    {
        value: 23.1,
        color: "#445878",
        label: "Junior"
    },
    {
        value: 12.8,
        color: "#92CDCF",
        label: "Senior"
    },
    {
        value: 15.4,
        color: "#EEEFF7",
        label: "Grad"
    }
]

var options = {
    //Boolean - Show a backdrop to the scale label
    scaleShowLabelBackdrop: true,
    //String - The colour of the label backdrop
    scaleBackdropColor: "rgba(255,255,255,0.75)",
    // Boolean - Whether the scale should begin at zero
    scaleBeginAtZero: true,
    //Number - The backdrop padding above & below the label in pixels
    scaleBackdropPaddingY: 2,
    //Number - The backdrop padding to the side of the label in pixels
    scaleBackdropPaddingX: 2,
    //Boolean - Show line for each value in the scale
    scaleShowLine: true,
    //Boolean - Stroke a line around each segment in the chart
    segmentShowStroke: false,
    //String - The colour of the stroke on each segement.
    segmentStrokeColor: "#fff",
    //Number - The width of the stroke value in pixels
    segmentStrokeWidth: 1,
    //Number - Amount of animation steps
    animationSteps: 200,
    //String - Animation easing effect.
    animationEasing: "easeOutQuart",
    //Boolean - Whether to animate the rotation of the chart
    animateRotate: true,
    //Boolean - Whether to animate scaling the chart from the centre
    animateScale: true
  }

// Initiate Chart
var ctx = $("#myChart").get(0).getContext("2d");
var myDoughnutChart = new Chart(ctx).Doughnut(data,options);
