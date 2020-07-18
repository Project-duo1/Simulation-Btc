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
    $("#check").css("visibility","hidden")
    $("#recycle-0").css("visibility","hidden")
	$("#recycle-1").css("visibility","hidden")
   $("#card0").css("visibility","hidden")
    $("#x-logo-1").css("visibility","hidden")
    $("#help").css("visibility","hidden")
})
$("#x").on("click",function() {
	$("#prog-wallet").css("visibility","hidden")
	$("#icon").attr("src","")
	$("#logo-stom-prog").css("visibility","hidden")
	$("#your-balance").css("visibility","hidden")
	$("#balance-value").css("visibility","hidden")
	$("#stom-logo").css("visibility","hidden")
	$("#x-logo").css("visibility","hidden")
	$("#card0").css("visibility","hidden")
	$("#help").css("visibility","hidden")

})

$("#miner-open").on("dblclick",function(){
var fun;
function start(){
 fun=setInterval(function(){var balance=parseInt($("#balance-value").text())
$("#balance-value").text(balance+1)
$("#check").text("Paradox@balance-Stom:St:"+(balance+1))	
	$("#cmd").append("<h4>$Decryption was successful/Stomy Was mined:+1</h4>")
}, 2300)
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
                   
                    $("#check").css("visibility","visible")
                    $("#command").val("") 
        		}if($("#command").val()==="open-wallet"){
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
    $("#check").css("visibility","hidden")
    $("#recycle-0").css("visibility","hidden")
	$("#recycle-1").css("visibility","hidden")
   $("#card0").css("visibility","hidden")
    $("#x-logo-1").css("visibility","hidden")
    $("#help").css("visibility","hidden")	
        		}if($("#command").val()==="open-recycle"){
        			$("#icon").attr("src","logos/recycle.png")
	$("#prog-wallet").css("visibility","visible")
	$("#logo-stom-prog").css("visibility","hidden")
	$("#your-balance").css("visibility","hidden")
	$("#balance-value").css("visibility","hidden")
	$("#stom-logo").css("visibility","hidden")
	$("#x-logo").css("visibility","hidden")
	$("#x-logo-0").css("visibility","hidden")
	$("#miner-electro-logo").css("visibility","hidden")
	$("#name-miner").css("visibility","hidden")
	$("#command").css("visibility","hidden")
    $("#cmd").css("visibility","hidden")

	$("#recycle-0").css("visibility","visible")
	$("#recycle-1").css("visibility","visible")
    $("#x-logo-1").css("visibility","visible")
    $("#card0").css("visibility","visible")
    $("#help").css("visibility","hidden")
}if($("#command").val()==="close-system"){
window.open("systemdown.html")
}
        	}
        }
    })
	$("#cmd").css("visibility","visible")
	$("#name-user").text("Paradox@"+localStorage.getItem("user-name")+":"+"Paradox/desktop:$-Miner-Stom.exe")
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
	$("#recycle-0").css("visibility","hidden")
	$("#recycle-1").css("visibility","hidden")
	$("#x-logo-1").css("visibility","hidden")
	$("#card0").css("visibility","hidden")
})

$("#x-0").on("click",function(){
	$("#cmd").css("visibility","hidden")
	$("#prog-wallet").css("visibility","hidden")
	$("#x-logo-0").css("visibility","hidden")
	$("#miner-electro-logo").css("visibility","hidden")
	$("#name-miner").css("visibility","hidden")
	$("#icon").attr("src","")
	$("#command").css("visibility","hidden")
	$("#check").css("visibility","hidden")
	$("#help").css("visibility","hidden")
   
})

$("#recycle-open").on("click",function(){
	$("#icon").attr("src","logos/recycle.png")
	$("#prog-wallet").css("visibility","visible")
	$("#logo-stom-prog").css("visibility","hidden")
	$("#your-balance").css("visibility","hidden")
	$("#balance-value").css("visibility","hidden")
	$("#stom-logo").css("visibility","hidden")
	$("#x-logo").css("visibility","hidden")
	$("#x-logo-0").css("visibility","hidden")
	$("#miner-electro-logo").css("visibility","hidden")
	$("#name-miner").css("visibility","hidden")
	$("#command").css("visibility","hidden")
    $("#cmd").css("visibility","hidden")

	$("#recycle-0").css("visibility","visible")
	$("#recycle-1").css("visibility","visible")
    $("#x-logo-1").css("visibility","visible")
    $("#card0").css("visibility","visible")
    $("#help").css("visibility","hidden")
})
$("#x-1").on("click",function(){
    $("#icon").attr("src","")
	$("#card0").css("visibility","hidden")
	$("#prog-wallet").css("visibility","hidden")
	$("#recycle-0").css("visibility","hidden")
	$("#recycle-1").css("visibility","hidden")
    $("#x-logo-1").css("visibility","hidden")

$("#ds-0").css("visibility","hidden")

})

$("#desktop-open").on("dblclick",function(){
window.open("systemdown.html")
})

