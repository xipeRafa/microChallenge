function eliminarAtributo(){
    let puntero=document.getElementById('enlace1');
    puntero.removeAttribute('href');
    puntero=document.getElementById('enlace2');
    puntero.removeAttribute('href');
  }

  function inicializarAtributo(){
    let puntero=document.getElementById('enlace1');
    puntero.setAttribute('href','http://www.google.com.ar');
    puntero=document.getElementById('enlace2');
    puntero.setAttribute('href','http://www.yahoo.com.ar');
  }

function definirAtributo(){
    let reftabla=document.getElementById('tabla1');
    reftabla.setAttribute('border','5');
  }

  function borrarAtributo(){
      let reftabla=document.getElementById('tabla1');
      reftabla.removeAttribute('border');   
  }



  function recuperarAtributo(){
 
    let puntero1=document.getElementById('enlace1');
    let puntero2=document.getElementById('enlace2');
   
    console.log('GOOGLE 1:', puntero1.getAttribute('href'))
    console.log(' YAHOO 1:', puntero2.getAttribute('href'))

    puntero2.setAttribute('href',puntero1.getAttribute('href'));

    console.log('GOOGLE 2:', puntero1.getAttribute('href'))
    console.log(' YAHOO 2:', puntero2.getAttribute('href'))

}

function cambiarAtributo()
{
  let reftabla=document.getElementById('tabla11');
  if (reftabla.hasAttribute('border'))
    reftabla.removeAttribute('border');
  else
    reftabla.setAttribute('border','1');
}


function aumentarBorde(){

    let reftabla=document.getElementById('tabla12');

    if (reftabla.hasAttribute('border')){
        let valor=reftabla.getAttribute('border');
        valor++;
        reftabla.setAttribute('border',valor);
    } else {
        reftabla.setAttribute('border','10');
      }           
}

function moverItem(){
    let ref1=document.getElementById('lista1');
    let refHijo=ref1.firstElementChild;

    let ref2=document.getElementById('lista2');
    ref2.appendChild(refHijo);
}

function clonarNodo()
{
  let id=document.getElementById('titulo');
  let nuevos=id.cloneNode(true);
  nuevos.style.id=nuevos.style.id + 'b';
  id=document.getElementById("region");
  id.appendChild(nuevos);
}

/* function tipoDeNodos()
{
  let puntero=document.getElementById('grupo');
  console.log(puntero.nodeName + " es de tipo " + puntero.nodeType);
  let hijo=puntero.childNodes[0];
  console.log(hijo.nodeName + " es de tipo " + hijo.nodeType);
  let nieto=hijo.childNodes[0];
  console.log(nieto.nodeName + " es de tipo " + nieto.nodeType);
} */

function tipoDeNodos()
{
  let puntero=document.getElementById('parrafo');
  for(f=0;f<puntero.childNodes.length;f++)
  {  
    console.log(puntero.childNodes[f].nodeName + " es de tipo " + puntero.childNodes[f].nodeType);
  }
}


/* ---------------------------------- */

function cambiarColorFondo()
{
  let pun=document.getElementById('colorfondo');
  let punrec=document.getElementById('recuadro');
  punrec.style.backgroundColor=pun.value;
}

function cambiarColorFuente()
{
  let pun=document.getElementById('colorfuente');
  let punrec=document.getElementById('recuadro');
  punrec.style.color=pun.value;
}

function cambiarTamanoFuente()
{
  let pun=document.getElementById('tamanofuente');
  let punrec=document.getElementById('recuadro');
  punrec.style.fontSize=pun.value;
}

function cambiarTipoFuente()
{
  let pun=document.getElementById('tipofuente');
  let punrec=document.getElementById('recuadro');
  punrec.style.fontFamily=pun.value;
}

function cambiarEstiloFuente()
{
  let pun=document.getElementById('estilofuente');
  let punrec=document.getElementById('recuadro');
  punrec.style.fontStyle=pun.value;
}

function cambiarPesoFuente()
{
  let pun=document.getElementById('pesofuente');
  let punrec=document.getElementById('recuadro');
  punrec.style.fontWeight=pun.value;
}

function cambiarAlineacionFuente()
{
  let pun=document.getElementById('alineacionfuente');
  let punrec=document.getElementById('recuadro');
  punrec.style.textAlign=pun.value;
}

function cambiarDecoracionFuente()
{
  let pun=document.getElementById('decoracionfuente');
  let punrec=document.getElementById('recuadro');
  punrec.style.textDecoration=pun.value;
}

function cambiarEspacioLetras()
{
  let pun=document.getElementById('espacioletras');
  let punrec=document.getElementById('recuadro');
  punrec.style.letterSpacing=pun.value;
}

function cambiarEspacioPalabras()
{
  let pun=document.getElementById('espaciopalabras');
  let punrec=document.getElementById('recuadro');
  punrec.style.wordSpacing=pun.value;
}

function cambiarTransformacionTexto()
{
  let pun=document.getElementById('transformaciontexto');
  let punrec=document.getElementById('recuadro');
  punrec.style.textTransform=pun.value;
}

function cambiarAnchoBorde()
{
  let pun=document.getElementById('anchoborde');
  let punrec=document.getElementById('recuadro');
  punrec.style.borderWidth=pun.value;
}

function cambiarEstiloBorde()
{
  let pun=document.getElementById('estiloborde');
  let punrec=document.getElementById('recuadro');
  punrec.style.borderStyle=pun.value;
}

function cambiarColorBorde()
{
  let pun=document.getElementById('colorborde');
  let punrec=document.getElementById('recuadro');
  punrec.style.borderColor=pun.value;
}

function cambiarPadding()
{
  let pun=document.getElementById('padding');
  let punrec=document.getElementById('recuadro');
  punrec.style.padding=pun.value;
}

function cambiarMargin()
{
  let pun=document.getElementById('margin');
  let punrec=document.getElementById('recuadro');
  punrec.style.margin=pun.value;
}

/* -------- */

function cambiarEstiloLista()
{
  let pun=document.getElementById('listapaises');
  let punselect=document.getElementById('estilolista');
  pun.style.listStyleType=punselect.value;
}

let cantidad = 0;
function agregarHijo(evt){
    evt.preventDefault();
  cantidad++;
  let nuevohijo = document.createElement('input');
  nuevohijo.type = 'text';
  nuevohijo.name = 'nombre' + cantidad;
  nuevohijo.id = 'nombre' + cantidad;
  document.getElementById('fs').appendChild(nuevohijo);
  document.getElementById('fs').appendChild(document.createElement('br'));
}
