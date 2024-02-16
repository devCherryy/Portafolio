const imageDOM = document.querySelectorAll(".home__layer")
const homeDOM = document.getElementById("home")


// Un evento en JavaScript es representado por un objeto que contiene información sobre el evento que ha ocurrido. Este objeto tiene propiedades que proporcionan detalles sobre el evento, como el tipo de evento
function parallax(e){
    if(e){
        imageDOM.forEach(img => {
            const speed = img.getAttribute("data-speed")
            const x = (window.innerWidth - e.pageX * speed) / 100
            const y =  (window.innerHeight - e.pageY * speed) / 100
            img.style.transform = `translateX(${x}px) translateY(${y}px)`
        
        })
    }
}


homeDOM.addEventListener("mousemove", parallax)
export default parallax