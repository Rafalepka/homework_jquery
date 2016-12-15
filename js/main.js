/*$(function(){
   
    $("div").css({"background-color": "red", "height": "200px", "width": "200px"}); //nadanie właściwości div
    
    $("button").click(function(){ //funkcja click button
        
        $("div").animate({"margin-left": "100px", "height": "100px", "width": "100px"}, 3000, schowajKwadrat);// animacja po kliknieciu w przycisk 
        
        function schowajKwadrat(){
            $("div").animate(500, zmienKolor); //ukrycie kwadratu i wywolanie funkcji ukazujacej go i pokazujacej napis wewnatrz
            $("div").fadeOut(2500, zmienKolor); //ukrycie kwadratu i wywolanie funkcji zmiany koloru

        };
        
        function zmienKolor() { //funkcja zmiany koloru kwadratu po clicku w przycisk
            
           $("div").css({"background-color": "blue"}).fadeIn(5000, napis); // pojawienie sie kwadratu o wybranym kolorze i wywolanie funkcji pokazujacej napis
			
			function napis() {
                
				$("div").add("h2").text("Gratulacje, animacja zakończona sukcesem!").css({"color": "white"}); // nadanie wlasciwosci div ze pojawia się w nim napis oraz jego kolor 
			}
        }
        
    });
    

});*/

$(function () {

	$("div").css({
		"background-color": "red",
		"height": "200px",
		"width": "200px"
	});

	$("button").click(function () {

		$("div").animate({
			"margin-left": "100px",
			"height": "100px",
			"width": "100px"
		}, 3000, zmienKolor);

		function zmienKolor() {

			$("div").animate({
				"backgroundColor": "blue"
			}, 5000, dodajNapis);

			function dodajNapis() {
//                $('div').animate({"width": "250px"}, 1000);
				$("div").add("h2").text("Gratulacje, animacja zakończona! :):):)").css({"color": "white", "fontStyle": "italic",});
                
			}
		}

	});

});
                       
