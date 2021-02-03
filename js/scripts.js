//letting our page  be submitted by the time  all process  finished 
$(document).ready(function() {
  // making our page do action when someone clicks submits
  $("#form").submit(function(event){
    //function that is getting the inputs that a users will enter.  
    function size() {
      // creating variable that gets the inputs that a user will input
      var sizes= $("input:radio[name=sizes]:checked").val();
      //returning the of the size
      return parseInt(sizes);
    }
    function crust() {
      var crusts= $("input:radio[name=crusts]:checked").val();
      return parseInt(crusts);
    }
    function topping() {
      var toppings1 = document.getElementById("toppings").value;
      return parseInt(toppings1);
    }
    function delivery() {
      var delivery1 = document.getElementById("delivery").value;
      return parseInt(delivery1);
    }
    function quantity() {
      var number = document.getElementById("inputNumber").value;
      return parseInt(number);
    }
    //object of user orders
    function myOrder(size, crust, topping, quantity,delivery) {
      this.mySize = size;
      this.myCrust = crust;
      this.myToppings = topping;
      this.myNumber = quantity;
      this.myDelivery = delivery;

    }
    // creating new objects called new myOrder which will help us to get store the constuctors that we defined in object called myorder.
    var inputs = new myOrder(size(), crust(), topping(), quantity(),delivery());
    // variable total cost for calculating the total cost of the pizza
    var totalCost =
      (inputs.mySize +
        inputs.myCrust+
        inputs.myDelivery+
        inputs.myToppings) *
        inputs.myNumber;
// getting the user information for those who have choosen delivery
alert("Ignore the following messages if you have not choose delivery")
        prompt("Enter your phone number");
         prompt("Enter your location");
        alert("Your pizza will be delivered");
       

        //showing the hidden div which have class check, where it will show the summary of clients order
        $(".check").show();
        // printing the values that span ids contain in html depending of the values that the user have entered
        document.getElementById("Size").innerHTML=inputs.mySize + (" Rwf");
        document.getElementById("Crust").innerHTML= inputs.myCrust + (" Rwf");
        document.getElementById("Toppings").innerHTML=inputs.myToppings + (" Rwf");
        document.getElementById("Delivery").innerHTML=inputs.myDelivery + (" Rwf");
        document.getElementById("quantity").innerHTML=inputs.myNumber + (" Rwf");
        document.getElementById("out").innerHTML=totalCost+(" Rwf");
    //letting our result being shown long time
    event.preventDefault();
  });
});
    


  // creating the jquery that will shows user that we have seen her message.  
    $(document).ready(function(){
      $("#form1").submit(function(){
        var name=$("input#name").val();
        alert(name+" " +"We have received your message");
         
      });
    })
    
    