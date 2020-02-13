console.log('JS Connected')

const PROJECT_CARDS = document.querySelectorAll('.card')
// Make these expand downwards to show more about the project
console.log(PROJECT_CARDS)

const SKILL_CARDS = document.querySelectorAll('.skill-card')
console.log(SKILL_CARDS)

const jumpTos = document.querySelectorAll(".jumpTos")
console.log(jumpTos)


for (jumpTo of jumpTos) {
    console.log(jumpTo)
    jumpTo.addEventListener('click', function () {
        jumpTo.scrollIntoView({
            behavior: 'smooth'
            // This only works if you have it declared in the HTML tag in CSS
        })
    })
}