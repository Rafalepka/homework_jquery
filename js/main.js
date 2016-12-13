$(function(){
   
    $("div").css({"background-color": "red", "height": "200px", "width": "200px"}); //nadanie właściwości div
    
    $("button").click(function(){ //funkcja click button
        
        $("div").animate({"margin-left": "100px", "height": "100px", "width": "100px"}, 3000, niebieski); // animacja po kliknieciu w przycisk 
        
        function niebieski() { //funkcja zmiany koloru przycisku po click
            
           $("div").animate({backgroundColor: "blue"}, 5000, napis); // zmiana koloru i wywolanie napisu
			
			function napis() {
                
				$("div").add("h2").text("Gratulacje, animacja zakończona!").css({"color": "white"}); // nadanie wlasciwosci div ze pojawia się w nim napis oraz jego kolor 
			}
        }
        
    });
    
});