(function(window, document) {
    
    function toUpper (text){
      $.get("http://127.0.0.1:5001/search?text=" + text, function(text) {
         // alert("Segue texto alterado: "+text)
         if (text.length > 0)
            $("#res-lcdia").val(text);
         });
     }
   
    function showResult(element, text) {
       removeCSSClass(element, "d-none");
       addCSSClass(element, "d-block");
       setHTML(element, text);
    } // end showResult

    let btn_convert = document.querySelector('#convert-button');
    btn_convert.addEventListener('click', function() {

      //  let option = document.querySelector('input[name="case-option"]:checked');
      //  let text   = document.querySelector('#text-to-convert').value;
      //  let result = document.querySelector('#result');
      //  let info   = document.querySelector('#info')
	   $("#res-lcdia").val(toUpper(text))

    }); // end click

 })(window, document);
