$(function(){
   
    $("div").css({"background-color": "red", "height": "200px", "width": "200px"});
    
    $("button").click(function(){
        
        $("div").animate({"margin-left": "100px", "height": "100px", "width": "100px"}, 3000, niebieski);
        
        function niebieski() {
            
           $("div").animate({backgroundColor: "blue"}, 5000, napis);
			
			function napis() {
				$("div").add("h2").text("Gratulacje, animacja zakończona!").css({"color": "white"});
			}
        }
        
    });
    
});