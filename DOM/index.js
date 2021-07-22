function eliminarAtributo(){
    var puntero=document.getElementById('enlace1');
    puntero.removeAttribute('href');
    puntero=document.getElementById('enlace2');
    puntero.removeAttribute('href');
  }

  function inicializarAtributo(){
    var puntero=document.getElementById('enlace1');
    puntero.setAttribute('href','http://www.google.com.ar');
    puntero=document.getElementById('enlace2');
    puntero.setAttribute('href','http://www.yahoo.com.ar');
  }

function definirAtributo(){
    var reftabla=document.getElementById('tabla1');
    reftabla.setAttribute('border','5');
  }

  function borrarAtributo(){
      var reftabla=document.getElementById('tabla1');
      reftabla.removeAttribute('border');   
  }



  function recuperarAtributo(){
 
    var puntero1=document.getElementById('enlace1');
    var puntero2=document.getElementById('enlace2');
   
    console.log('GOOGLE 1:', puntero1.getAttribute('href'))
    console.log(' YAHOO 1:', puntero2.getAttribute('href'))

    puntero2.setAttribute('href',puntero1.getAttribute('href'));

    console.log('GOOGLE 2:', puntero1.getAttribute('href'))
    console.log(' YAHOO 2:', puntero2.getAttribute('href'))

}

function cambiarAtributo()
{
  var reftabla=document.getElementById('tabla11');
  if (reftabla.hasAttribute('border'))
    reftabla.removeAttribute('border');
  else
    reftabla.setAttribute('border','1');
}


function aumentarBorde(){

    var reftabla=document.getElementById('tabla12');

    if (reftabla.hasAttribute('border')){
        var valor=reftabla.getAttribute('border');
        valor++;
        reftabla.setAttribute('border',valor);
    } else {
        reftabla.setAttribute('border','10');
      }           
}

function moverItem(){
    var ref1=document.getElementById('lista1');
    var refHijo=ref1.firstElementChild;

    var ref2=document.getElementById('lista2');
    ref2.appendChild(refHijo);
}

function clonarNodo()
{
  var id=document.getElementById('titulo');
  var nuevos=id.cloneNode(true);
  nuevos.style.id=nuevos.style.id + 'b';
  id=document.getElementById("region");
  id.appendChild(nuevos);
}

/* function tipoDeNodos()
{
  var puntero=document.getElementById('grupo');
  console.log(puntero.nodeName + " es de tipo " + puntero.nodeType);
  var hijo=puntero.childNodes[0];
  console.log(hijo.nodeName + " es de tipo " + hijo.nodeType);
  var nieto=hijo.childNodes[0];
  console.log(nieto.nodeName + " es de tipo " + nieto.nodeType);
} */

function tipoDeNodos()
{
  var puntero=document.getElementById('parrafo');
  for(f=0;f<puntero.childNodes.length;f++)
  {  
    console.log(puntero.childNodes[f].nodeName + " es de tipo " + puntero.childNodes[f].nodeType);
  }
}


/* ---------------------------------- */

function cambiarColorFondo()
{
  var pun=document.getElementById('colorfondo');
  var punrec=document.getElementById('recuadro');
  punrec.style.backgroundColor=pun.value;
}

function cambiarColorFuente()
{
  var pun=document.getElementById('colorfuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.color=pun.value;
}

function cambiarTamanoFuente()
{
  var pun=document.getElementById('tamanofuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.fontSize=pun.value;
}

function cambiarTipoFuente()
{
  var pun=document.getElementById('tipofuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.fontFamily=pun.value;
}

function cambiarEstiloFuente()
{
  var pun=document.getElementById('estilofuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.fontStyle=pun.value;
}

function cambiarPesoFuente()
{
  var pun=document.getElementById('pesofuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.fontWeight=pun.value;
}

function cambiarAlineacionFuente()
{
  var pun=document.getElementById('alineacionfuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.textAlign=pun.value;
}

function cambiarDecoracionFuente()
{
  var pun=document.getElementById('decoracionfuente');
  var punrec=document.getElementById('recuadro');
  punrec.style.textDecoration=pun.value;
}

function cambiarEspacioLetras()
{
  var pun=document.getElementById('espacioletras');
  var punrec=document.getElementById('recuadro');
  punrec.style.letterSpacing=pun.value;
}

function cambiarEspacioPalabras()
{
  var pun=document.getElementById('espaciopalabras');
  var punrec=document.getElementById('recuadro');
  punrec.style.wordSpacing=pun.value;
}

function cambiarTransformacionTexto()
{
  var pun=document.getElementById('transformaciontexto');
  var punrec=document.getElementById('recuadro');
  punrec.style.textTransform=pun.value;
}

function cambiarAnchoBorde()
{
  var pun=document.getElementById('anchoborde');
  var punrec=document.getElementById('recuadro');
  punrec.style.borderWidth=pun.value;
}

function cambiarEstiloBorde()
{
  var pun=document.getElementById('estiloborde');
  var punrec=document.getElementById('recuadro');
  punrec.style.borderStyle=pun.value;
}

function cambiarColorBorde()
{
  var pun=document.getElementById('colorborde');
  var punrec=document.getElementById('recuadro');
  punrec.style.borderColor=pun.value;
}

function cambiarPadding()
{
  var pun=document.getElementById('padding');
  var punrec=document.getElementById('recuadro');
  punrec.style.padding=pun.value;
}

function cambiarMargin()
{
  var pun=document.getElementById('margin');
  var punrec=document.getElementById('recuadro');
  punrec.style.margin=pun.value;
}

/* -------- */

function cambiarEstiloLista()
{
  var pun=document.getElementById('listapaises');
  var punselect=document.getElementById('estilolista');
  pun.style.listStyleType=punselect.value;
}

var cantidad = 0;
function agregarHijo(evt){
    evt.preventDefault();
  cantidad++;
  var nuevohijo = document.createElement('input');
  nuevohijo.type = 'text';
  nuevohijo.name = 'nombre' + cantidad;
  nuevohijo.id = 'nombre' + cantidad;
  document.getElementById('fs').appendChild(nuevohijo);
  document.getElementById('fs').appendChild(document.createElement('br'));
}