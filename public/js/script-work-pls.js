let features = ["autoLowerHub","autoUpperHub","teleLowerHub","teleUpperHub","hanger"];
let teamNum = 0;
let autoLowerHub = 1;
let autoUpperHub = 2;
let teleLowerHub = 3;
let teleUpperHub = 4;
let hanger = 5;

fetch("../js/final.json").then(async (resp) => {
let response = await resp.json();
//ARRAYS DECLARED & INITALIZED
let labelsArray = []
let autoLowerHubArray = []
let autoUpperHubArray = []
let teleLowerHubArray = []
let teleUpperHubArray = [];
let hangerArray = []


//LABEL FOR LOOP
for(var i = 0; i < response.length; i++){
    labelsArray.push(response[i][1][teamNum])
}
//autoLowerHubArray
for(var i = 0; i < response.length; i++){
    autoLowerHubArray.push(response[i][1][autoLowerHub])
}
//autoUpperHub
for(var i = 0; i < response.length; i++){
    autoUpperHubArray.push(response[i][1][autoUpperHub])
}
//teleLowerHubArray
for(var i = 0; i < response.length; i++){
    teleLowerHubArray.push(response[i][1][teleLowerHub])
}
//teleUpperHubArray
for(var i = 0; i < response.length; i++){
    teleUpperHubArray.push(response[i][1][teleUpperHub])
}
//hangerArray
for(var i = 0; i < response.length; i++){
    hangerArray.push(response[i][1][hanger])
}



for(var i = 0; i < response.length; i++){
    var ctx = document.getElementById('chart');

    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsArray,
        datasets: [
          {
            label: 'autoLowerHub',
            data: autoLowerHubArray,
            backgroundColor: '#ffb400',
          },
          {
            label: 'autoUpperHub',
            data: autoUpperHubArray,
            backgroundColor: '#a57c1b',
          },
          {
            label: 'teleLowerHub',
            data: teleLowerHubArray,
            backgroundColor: '#363445',
          },
          {
            label: 'teleUpperHub',
            data: teleUpperHubArray,
            backgroundColor: '#48446e',
          },
          {
            label: 'hanger',
            data: hangerArray,
            backgroundColor: '#5e569b',
          }
        ]
      },
      options: {
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }],
        animation: {
            duration: 0, // general animation time
        },
        hover: {
            animationDuration: 0, // duration of animations when hovering an item
        },
        responsiveAnimationDuration: 0, 
        }
      }
    });
}


})