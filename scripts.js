const toggleScreen = function() {
    document.querySelector('.md-overlay').classList.toggle('md-show')
}

const btnTest = document.querySelector('.btn.test')
const btnClose = document.querySelector('.close')
const mdOverlay = document.querySelector('.md-overlay')

btnTest.onclick = () => toggleScreen()
btnClose.onclick = () => toggleScreen()
window.onclick = event => {
    if (event.target == mdOverlay) {
        toggleScreen()
    }
}