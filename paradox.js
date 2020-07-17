$("#wallet-open").on("dblclick",function() {
	$("#command").css("visibility","hidden")
	$("#prog-wallet").css("visibility","visible")
	$("#icon").attr("src","logos/wallet.png")
	$("#logo-stom-prog").css("visibility","visible")
	$("#your-balance").css("visibility","visible")
	$("#balance-value").css("visibility","visible")
	$("#stom-logo").css("visibility","visible")
	$("#x-logo").css("visibility","visible")
	$("#cmd").css("visibility","hidden")
    $("#miner-electro-logo").css("visibility","hidden")
    $("#x-0").css("visibility","hidden")
    $("#name-miner").css("visibility","hidden")
    $("#name-miner").css("visibility","hidden")
    $("#x-logo-0").css("visibility","hidden")


})
$("#x").on("click",function() {
	$("#prog-wallet").css("visibility","hidden")
	$("#icon").attr("src","")
	$("#logo-stom-prog").css("visibility","hidden")
	$("#your-balance").css("visibility","hidden")
	$("#balance-value").css("visibility","hidden")
	$("#stom-logo").css("visibility","hidden")
	$("#x-logo").css("visibility","hidden")

})

$("#miner-open").on("dblclick",function(){
var fun;
function start(){
 fun=setInterval(function(){var balance=parseInt($("#balance-value").text())
$("#balance-value").text(balance+1)
	$("#cmd").append("<h4>$Decryption was successful/Stommy Was mined:+1</h4>")
}, 2800)
}
function stop(){
	clearInterval(fun)
}

$(document).on("keypress", function(e){
        if(e.which == 13){
        	if($("#cmd").css("visibility")==="visible"){
        		if($("#command").val()==="start-miner"){
        			$("#command").val("")
        			$("#help").css("visibility","hidden")
                   start()
        		}
        		if($("#command").val()==="stop-miner"){
        			$("#command").val("")
        			$("#help").css("visibility","hidden")
        		   stop()
        			$("#command").val("")
        		}if($("#command").val()==="command-help"){
        			$("#help").css("visibility","visible")
        			$("#command").val("")
        		}if($("#command").val()==="check-balance"){
                    $("#help").css("visibility","hidden")
                    $("#check").css("visibility","visible")
        		}
        	}
        }
    })
	$("#cmd").css("visibility","visible")
	$("#name-user").text("hello $"+localStorage.getItem("user-name")+":-.-"+"/Paradox/Desktop/Cmd.exe")
	$("#prog-wallet").css("visibility","visible")
	$("#logo-stom-prog").css("visibility","hidden")
	$("#your-balance").css("visibility","hidden")
	$("#balance-value").css("visibility","hidden")
	$("#stom-logo").css("visibility","hidden")
	$("#x-logo").css("visibility","hidden")
	$("#x-logo-0").css("visibility","visible")
	$("#miner-electro-logo").css("visibility","visible")
	$("#name-miner").css("visibility","visible")
	$("#icon").attr("src","logos/pros-miner-logo.png")
	$("#command").css("visibility","visible")
	
})
$("#x-0").on("click",function(){
	$("#cmd").css("visibility","hidden")
	$("#prog-wallet").css("visibility","hidden")
	$("#x-logo-0").css("visibility","hidden")
	$("#miner-electro-logo").css("visibility","hidden")
	$("#name-miner").css("visibility","hidden")
	$("#icon").attr("src","")
	$("#command").css("visibility","hidden")

})
