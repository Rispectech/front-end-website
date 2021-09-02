// local reviews data
const reviews = [
  {
    id: 1,
    name: 'susan smith',
    img: 'images/pic1.png',
    text: 'I would like to say, the team does always a quick response to the queries and all to the users.',
  },
  {
    id: 2,
    name: 'peter jones',
    img: 'images/pic2.png',
    text: 'Overall exam was conducted smoothly and report was analytically given.',
  },
  {
    id: 3,
    name: 'anna johnson',
    img: 'images/pic3.png',
    text: "You're organising such things that's very interesting and the same thing I liked most.",
  },
]
// select items
const img = document.getElementById('person-img')
const author = document.getElementById('author')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

// set starting item
let currentItem = 0

// load initial item
window.addEventListener('DOMContentLoaded', function () {
  const item = reviews[currentItem]
  img.src = item.img
  author.textContent = item.name
  info.textContent = item.text
})

// show person based on item
function showPerson(person) {
  const item = reviews[person]
  img.src = item.img
  author.textContent = item.name
  info.textContent = item.text
}
// show next person
nextBtn.addEventListener('click', function () {
  currentItem++
  if (currentItem > reviews.length - 1) {
    currentItem = 0
  }
  showPerson(currentItem)
})
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--
  if (currentItem < 0) {
    currentItem = reviews.length - 1
  }
  showPerson(currentItem)
})
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello')

  currentItem = Math.floor(Math.random() * reviews.length)
  showPerson(currentItem)
})

// about-us

const about = document.querySelector('.about')
const btns = document.querySelectorAll('.tab-btn')
const articles = document.querySelectorAll('.content')
about.addEventListener('click', function (e) {
  const id = e.target.dataset.id
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove('active')
    })
    e.target.classList.add('active')
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove('active')
    })
    const element = document.getElementById(id)
    element.classList.add('active')
  }
})

// fqs

const accordionItemHeaders = document.querySelectorAll('.accordion-item-header')

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener('click', (event) => {
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
    //   currentlyActiveAccordionItemHeader.classList.toggle("active");
    //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    // }

    accordionItemHeader.classList.toggle('active')
    const accordionItemBody = accordionItemHeader.nextElementSibling
    if (accordionItemHeader.classList.contains('active')) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + 'px'
    } else {
      accordionItemBody.style.maxHeight = 0
    }
  })
})

// login

const pass_field = document.querySelector('.pass-key')
const showBtn = document.querySelector('.login-show')
showBtn.addEventListener('click', function () {
  if (pass_field.type === 'password') {
    pass_field.type = 'text'
    showBtn.textlogincontent = 'HIDE'
    showBtn.style.color = '#3498db'
  } else {
    pass_field.type = 'password'
    showBtn.textlogincontent = 'SHOW'
    showBtn.style.color = '#222'
  }
})
