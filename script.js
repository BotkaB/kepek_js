window.addEventListener("load", init);
var kep = [
    {
        cim: "Lepke",
        eleresiUt: "képek/kep1.jpg",
        leiras:"Lelkem mélyén lepke vagyok.",
    },
    {
        cim: "Weekend Punk",
        eleresiUt: "képek/kep2.jpg",
        leiras:"Hétvégenként punk vagyok,Patkány Joe-nak hívjatok.",
    },
    {
        cim: "Karácsony",
        eleresiUt: "képek/kep3.png",
        leiras:"Haj..haj...halihóó...",
    }
]
function ID(elem) {
    return document.getElementById(elem);
}

function init() {
    ID("uzenet").innerHTML = "<h1>Pólók</h1>";
    kiir();
    kiirLeiras();
    megjelenit();
}

function kiir() 
{
  var txt = "";
  for (let index = 0; index < kep.length; index++)
  {
    txt += "<h3>" + kep[index].cim + "</h3>";
  }
  ID("cim").innerHTML = txt;
}

function kiirLeiras()
{
  var txt = "";
  for (let index = 0; index < kep.length; index++) 
  {
    txt+= "<p>" + kep[index].leiras + "<p>";
  }
  ID("leiras").innerHTML = txt;
}


function megjelenit() {

{
  var txt="";
  for (let index = 0; index < kep.length; index++) 
  {
    txt+="<div id='" + kep[index].eleresiUt + "'>" + "<img src='" + kep[index].eleresiUt + "' alt='" + kep[index].cim + "' >" + "</div>";
  }
  ID("kepek").innerHTML = txt;
}
}

