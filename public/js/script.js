// Temps
const navLinks = document.querySelectorAll('.navbar-links a')

navLinks[0].addEventListener('click', () => {
    removeActive()
    document.querySelector('section#home').classList.add('active')
})

navLinks[1].addEventListener('click', () => {
    removeActive()
    document.querySelector('section#explorer').classList.add('active')
})

document.querySelector('.section-1-btn').addEventListener('click', () => {
    removeActive()
    document.querySelector('section#explorer').classList.add('active')
})

const removeActive = () => {
    document.querySelectorAll('section').forEach(sxn => sxn.classList.remove('active'))
}
// End of Temps

// Searchbar
document.querySelector('.search-form').addEventListener('submit', (e) => e.preventDefault())

const searchInput = document.querySelector(".search-inp")

searchInput.addEventListener('keyup', () => searchCountry())

const searchCountry = () => {    
    let input = document.querySelector('.search-inp').value
    input = input.toLowerCase()
    let x = document.querySelectorAll('.countries-list .country')

    for(let i=0; i<x.length; i++) {
        if(!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none"
        } else {
            x[i].style.display="flex"
        }
    }
}
// End of Searchbar