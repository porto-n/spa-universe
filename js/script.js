const routes = {
    "/": "/pages/home.html", 
    "/universe": "/pages/universe.html", 
    "/exploration": "./pages/exploration.html", 
}

const bgImage = {
    "/": "./images/mountains-universe-home.png", 
    "/universe": "./images/mountains-universe-universe.png", 
    "/exploration": "./images/mountains-universe-exploration.png", 
}

const selecionado = {
    "/": document.querySelector('.home'), 
    "/universe": document.querySelector('.universe'), 
    "/exploration": document.querySelector('.exploration'), 
}

function setPage(event){
    event = event || window.event
    event.preventDefault()

    window.history.pushState({},"", event.target.href)

    handler()

}

function handler(){
    const { pathname } = window.location
    const route = routes[pathname]
    console.log(pathname)
    
    fetch(route).then(data => data.text()).then(html => {
        document.querySelector(".content").innerHTML = html
        document.body.style.backgroundImage = `url(${bgImage[pathname]})`;
        const items = document.querySelectorAll('a')
        items.forEach(element => element.classList.remove('selected'))
        selecionado[pathname].classList.add('selected')
    }) 

}

handler()