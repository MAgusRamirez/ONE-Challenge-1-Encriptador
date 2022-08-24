
function encriptar(){
  var text = document.getElementById("text-input").value.toLocaleLowerCase();

  var textEncriptar = text.replace(/e/igm, "enter");
  var textEncriptar = textEncriptar.replace(/o/igm, "ober");
  var textEncriptar = textEncriptar.replace(/i/igm, "ines");
  var textEncriptar = textEncriptar.replace(/a/igm, "ai");
  var textEncriptar = textEncriptar.replace(/u/igm, "ufat");

  document.getElementById("imgright").style.display = "none";
  document.getElementById("text1").style.display = "none";
  document.getElementById("text2").innerHTML = textEncriptar;
  document.getElementById("copy").style.display ="show";
  document.getElementById("copy").style.display = "inherit";  


}

function desencriptar(){
 
  var text = document.getElementById("text-input").value.toLocaleLowerCase();

  var textEncriptar = text.replace(/enter/igm, "e");
  var textEncriptar = textEncriptar.replace(/ober/igm, "o");
  var textEncriptar = textEncriptar.replace(/ines/igm, "i");
  var textEncriptar = textEncriptar.replace(/ai/igm, "a");
  var textEncriptar = textEncriptar.replace(/ufat/igm, "u");

  document.getElementById("imgright").style.display = "none";
  document.getElementById("text1").style.display = "none";
  document.getElementById("text2").innerHTML = textEncriptar;
  document.getElementById("copy").style.display ="show";
  document.getElementById("copy").style.display = "inherit"; 

}

function copy(){
  var encriptado = document.querySelector("#text2");
  encriptado.select();
  document.execCommand("copy");
  alert("Copiado");

}