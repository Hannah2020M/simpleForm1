        // Write your JavaScript code here!
        function myExit(){
          document.getElementById("exit").innerHTML =`Good bye !`;
      }
     
      function myCheckNumber() {
        // Get the value of the input field with id="numb"
        let x = document.getElementById("checkNum").value;
        // If x is Not a Number or less than one or greater than 10
        let text;
        if (isNaN(x) || x < 1 || x > 10) {
          text = "Input not valid";
        } else {
          text = "Input OK";
        }
        document.getElementById("demo").innerHTML =`${text } 
         &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
      }
      
      function startList(){
document.getElementById("currentItem").innerHTML = 'Orange Juice';

      }

function itemCheckNumber() {
          // Get the value of the input field with id="milkItem"
          let x = document.getElementById("shopItem").value;
          // If x is Not a Number or less than one or greater than 10
          let text;
          if (isNaN(x) || x < 1 || x > 10) {
            text = "item Input not valid";
          } else {
            text = "item Input OK";
          }
          document.getElementById("item").innerHTML =`${text } 
           &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
        }




window.addEventListener("load", function() {
  window.alert("All fields are required");
  event.preventDefault();
 
  // let listedPlanets;
  // // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  // let listedPlanetsResponse;
  // listedPlanetsResponse.then(function (result) {
  //     listedPlanets = result;
  //     console.log(listedPlanets);
  // }).then(function () {
  //     console.log(listedPlanets);
  //     // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
  //     window.alert("All fields are required");
  //     event.preventDefault();
  // })
  
  
});

