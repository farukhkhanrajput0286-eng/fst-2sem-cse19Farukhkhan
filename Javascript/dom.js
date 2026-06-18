 function show(){
            let name=document.getElementById("myName").value;
            // document.getElementById("display").innerHTML=name;
            alert(name);
        }
        

        // dom on 11th March
        //colorchange on dbl click
        function colorChange(){
            document.getElementById('text').style.color="red";
        }
///colorchange on mouse over
// Get the element by its ID us
const myElement = document.getElementById("text");

// Add event listener for mouseover
myElement.addEventListener("mouseover", function() {
  // Change the color using the style property
  myElement.style.color = "blue";
});
