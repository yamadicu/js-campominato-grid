//FUNZIONE CHE CREA L'ELEMENTO HTML

function elementoHtml( tagHtml, classi, text){
    let elemento = document.createElement(tagHtml)
    elemento.className = classi;
    elemento.innerText = text;
    return elemento
}

let griglia = document.querySelector('.griglia')

for (let i = 1; i <= 100; i++){
    const divbox = elementoHtml("div", "box", i)
    divbox.addEventListener('click', function(){
        this.classList.toggle('bg-primary-subtle')
        console.log(i);
    })
    griglia.append(divbox)
}