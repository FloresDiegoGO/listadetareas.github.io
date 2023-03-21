let contador = 0; 
function agregar(){ 
    contador ++;
    let miInput = document.getElementById('miInput');
    let lista = document.getElementById('lista');
    let miValorInput = miInput.value;

    let crear = document.createElement('li');
    crear.textContent = miValorInput;
    
    crear.style.backgroundColor = '#95BDFF';
    crear.style.borderRadius = '7px'
    crear.style.fontFamily = 'monospace';
    crear.style.fontSize = '30px';

    lista.appendChild(crear);


    
    miInput.value = '';

}

function eliminar(){
    let lista = document.getElementById('lista');
    let eliminarUltimo = lista.lastChild;
    lista.removeChild(eliminarUltimo);


}