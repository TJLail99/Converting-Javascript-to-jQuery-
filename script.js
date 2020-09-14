

$( document ).ready(function() {

  $("#area").hover( 
      function() {
        
    alert("Close me to turn the box green.");
      },function(){
        $(this).css("background-color","green");
      });
      
    
   

  $("#reset").click(function() {

    $( "#area" ).css("background-color", "#953674");

    });
  });



