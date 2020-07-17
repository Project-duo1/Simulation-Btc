$("#on-button").on("click",function(){
	$("#paradox-system").css("visibility","hidden")
    $("#loading-logo").css("visibility","visible")
    setTimeout(function(){$("#loading-logo").css("visibility","hidden")
$("#user-name-logo").css("visibility","visible")
$("#user-name").css("visibility","visible")
$("#on-button").css("visibility","hidden")
}, 5000)
})
$(document).on("keypress", function(e){
        if(e.which == 13){
        	if($("#user-name").css("visibility")==="visible"){
      if($("#user-name").val()===""){
      	localStorage.setItem("user-name","user")
      	window.open("paradox.html")
      }
      if($("#user-name").val()!==""){
      	localStorage.setItem("user-name",$("#user-name").val())
      	window.open("paradox.html")
      }
     }
   }
    })