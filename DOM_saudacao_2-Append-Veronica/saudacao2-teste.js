(function(){
    const heroContent = document.createElement("div")
    heroContent.className = "hero-content"
    heroContent.innerHTML = "<h1>Curso Javascript Completo</h1> <p>Aprenda Javascript de verdade</p>"

    const elementoPai = document.querySelector(".hero")
    const elementoRef = document.querySelector(".top-bar")

    elementoPai.insertBefore(heroContent, elementoRef)

}) ()