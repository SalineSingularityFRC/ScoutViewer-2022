//FINAL CONSTANTS
const autoLowerHubScore = 2;
const autoUpperHubScore = 4;
const teleLowerHubScore = 1;
const teleUpperHubScore = 2;
const hangerScore = [0, 4, 6, 10, 15]
const taxiScore = 2;




let features = ["autoLowerHub","autoUpperHub","teleLowerHub","teleUpperHub","hanger"];
let teamNum = 0;
let autoLowerHub = 1;
let autoUpperHub = 2;
let teleLowerHub = 3;
let teleUpperHub = 4;
let hanger = 5;
let taxi = 6;
let counter = 7;


fetch("../js/final.json").then(async (resp) => {
let response = await resp.json();
//ARRAYS DECLARED & INITALIZED
let labelsArray = []
let autoLowerHubArray = []
let autoUpperHubArray = []
let teleLowerHubArray = []
let teleUpperHubArray = [];
let hangerArray = []
let taxiArray = []

//LABEL FOR LOOP
var counterArray = [];
for(var i = 0; i < response.length; i++){
  console.log(response[i][1][taxi])
  //LabelArray

for(var j = 0; j < labelsArray.length; j++){

  if(labelsArray[j] == response[i][1][teamNum]){
    response[i][1][autoLowerHub] += autoLowerHubArray[j];
    response[i][1][autoUpperHub] += autoUpperHubArray[j]
    response[i][1][teleLowerHub] += teleLowerHubArray[j]
    response[i][1][teleUpperHub] += teleUpperHubArray[j]  
    response[i][1][hanger] += hangerArray[j];
    response[i][1][taxi] += taxiArray[j];
    response[i][1][counter] += counterArray[j];

    
    autoLowerHubArray.splice(j,1)
    autoUpperHubArray.splice(j,1)
    teleLowerHubArray.splice(j,1)
    teleUpperHubArray.splice(j,1)
    counterArray.splice(j,1)
    hangerArray.splice(j,1)
    taxiArray.splice(j,1)
    labelsArray.splice(j,1);
 } 
}
    labelsArray.push(response[i][1][teamNum]) 
    //autoLowerHubArray
    autoLowerHubArray.push(response[i][1][autoLowerHub])
    
     //autoUpperHub
    autoUpperHubArray.push(response[i][1][autoUpperHub])
     
     //teleLowerHubArray
     
    teleLowerHubArray.push(response[i][1][teleLowerHub])
     
     //teleUpperHubArray
     
    teleUpperHubArray.push(response[i][1][teleUpperHub])
     
     //hangerArray
    hangerArray.push(response[i][1][hanger])

    taxiArray.push(response[i][1][taxi])

    counterArray.push(response[i][1][counter])
}

console.log(taxiArray)
for(var k = 0; k < labelsArray.length; k++){

autoLowerHubArray[k] = (autoLowerHubArray[k]/counterArray[k]) *autoLowerHubScore;
autoUpperHubArray[k] = (autoUpperHubArray[k]/counterArray[k]) * autoLowerHubScore;
teleLowerHubArray[k] = (teleLowerHubArray[k]/counterArray[k]) * teleLowerHubScore;
teleUpperHubArray[k] = (teleUpperHubArray[k]/counterArray[k]) * teleUpperHubScore;
taxiArray[k] = (taxiArray[k]/counterArray[k]) * taxiScore;
hangerArray[k] = (hangerScore[hangerArray[k]]/counterArray[k]); 
}

    var ctx = document.getElementById('chart');

    var myChart = new Chart(ctx, {
      maintainAspectRatio: false,
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
          },
          {
            label: 'taxi',
            data: taxiArray,
            backgroundColor: '#9080ff',
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
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


})