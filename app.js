var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");
// outputDiv.innerText = "Shabrez"

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(input){
   return serverURL + "?" + "text=" + input

}

function errorHandler(error){
   console.log("error occured", error);
   alert("something wrong with server: try again after some time");
}

function clickHandler(){
   // outputDiv.innerText = "wdheduwvwjfryf" + txtInput.value;
   var inputText = txtInput.value;

   fetch(getTranslationURL(inputText))
   .then(response => response.json())
   .then(json => {
      var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;})

      // console.log(json.contents.translated))
   .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)



// eloquentjavascript.net