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
      

      // function itemCheckNumber() {
      //     // Get the value of the input field with id="milkItem"
      //     let x = document.getElementById("shopItem").value;
      //     // If x is Not a Number or less than one or greater than 10
      //     let text;
      //     if (isNaN(x) || x < 1 || x > 10) {
      //       text = "item Input not valid";
      //     } else {
      //       text = "item Input OK";
      //     }
      //     document.getElementById("item").innerHTML =`${text } 
      //      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
      //   }

//  // let shopItems = ['orangeJuice','lettuce','Spinach','Cauliflower','yogurt',
//   'eggs','chocolate','pretzels','chicken','beef','onions','potatoes',
//   'groundTurkey','deliMeat','fetaCheese','MozarellaCheese','turkeyBacon','porkSteak',
// 'MadelineCOokies','carrotJuice','greenPeppers','Zucchini','cucumbers','cilantro',
// 'butter','tomatoSauce','appleSauce','curryLeaves','dosaiMix','celery'];
      {/* <form id="shopForm">
      <p id="currentItem">shoppingItem</p> <input id="shopItem">
      <button type="button" onclick="itemCheckNumber()">Submit</button>
      <p id="item"></p>

      </form> */}

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

//for(let i=0; i<shopItems.length; i++){
  // shopItems[i] <input id="checkItem" >
  //  <button type="button" onclick="itemCheckNumber">Submit</button>
  //   <p id="milk"></p> 
  //  }//<!--end of for shopItems-->
  // function milkCheckNumber() {
  //     for(let i=0;i<shopItems.length;i++){
  //     // Get the value of the input field with id="numb"
  //     let x = document.getElementById("milkItem").value;
  //     // If x is Not a Number or less than one or greater than 10
  //     let text;
  //     if (isNaN(x) || x < 1 || x > 10) {
  //       text = "Input not valid";
  //     } else {
  //       text = "Input OK";
  //     }
  //     document.getElementById("milk").innerHTML =`${text } 
  //      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
  // }//end of for shopItem
  //  }

// function myCheckItem() {
//     // Get the value of the input field with id="numb"
//     let x = document.getElementById("checkItem").value;
//     // If x is Not a Number or less than one or greater than 10
//     let text;
//     if (isNaN(x) || x < 1 || x > 10) {
//       text = "Input not valid";
//     } else {
//       text = "Input OK";
//     }
//     document.getElementById("demo").innerHTML =`${text } 
//      &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Hannah succeeds !`;
//   }


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
