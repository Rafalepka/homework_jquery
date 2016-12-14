$(function(){
   
    $("div").css({"background-color": "red", "height": "200px", "width": "200px"}); //nadanie właściwości div
    
    $("button").click(function(){ //funkcja click button
        
        $("div").animate({"margin-left": "100px", "height": "100px", "width": "100px"}, 3000, schowajKwadrat);// animacja po kliknieciu w przycisk 
        
        function schowajKwadrat(){
            $("div").fadeOut(2500, zmienKolor); //ukrycie kwadratu i wywolanie funkcji ukazujacej go i pokazujacej napis wewnatrz
        };
        
        function zmienKolor() { //funkcja zmiany koloru kwadratu po click w przycisk
            
           $("div").css({"background-color": "blue"}).fadeIn(5000, napis); // pojawienie sie kwadratu o wybranym kolorze i wywolanie funkcji pokazujacej napis
			
			function napis() {
                
				$("div").add("h2").text("Gratulacje, animacja zakończona sukcesem!").css({"color": "white"}); // nadanie wlasciwosci div ze pojawia się w nim napis oraz jego kolor 
			}
        }
        
    });
    
});
