const myObserver = new IntersectionObserver((entries) => {
    entries.forEach( (entry) => {
        if(entry.isIntersecting === true) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
        }
    })
})

const elements = document.querySelectorAll('.hiddenUp, .hiddenUp2, .hiddenUp3, .hiddenDown, .hiddenDown2, .hiddenDown3, .hiddenLeft, .hiddenLeft2, .hiddenRight, .hiddenRight2, .hiddenDownResponsive')

elements.forEach((element) => myObserver.observe(element))

window.addEventListener('scroll', (event) => {console.log(event)})