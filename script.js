document.addEventListener("DOMContentLoaded", () => {
  // вот это лучше вам не трогать, внутри тултипов оставил подсказки к выполнению задач
  enableTooltips();

// Задача 1
  function getRandomNum(max) {
    return Math.floor(Math.random() * max);
  }

  function componentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

  let btn = document.querySelector("[data-js='t1-btn']")
  let hex = document.querySelector("[data-js='t1-hex']")
  btn.addEventListener('click', () => {
    let rnd1 = getRandomNum(255)
    let rnd2 = getRandomNum(255)
    let rnd3 = getRandomNum(255)
    console.log(rnd1, rnd2, rnd3)
    btn.style.background = `rgb(${rnd1}, ${rnd2}, ${rnd3})`
    hex.textContent = rgbToHex(rnd1, rnd2, rnd3)
  })



//Задача 2
let count = document.querySelector("[data-js='t2-count']")
let input = document.querySelector("[data-js='t2-input']")
document.addEventListener('input',() => {
  count.textContent = input.value.length
})


// Задача 3
let input3 = document.querySelector("[data-js='t3-input']")
let btn3 = document.querySelector("[data-js='t3-add']")
let list = document.querySelector("[data-js='t3-list']")

btn3.addEventListener('click', () => {
  if (input3.value != ''){
    let elem = document.createElement('li')
  elem.textContent = input3.value
  list.append(elem)
  input3.value = ''
  }
  
})

// Задача 4
let minus = document.querySelector("[data-js='t4-minus']")
let plus = document.querySelector("[data-js='t4-plus']")
let reset = document.querySelector("[data-js='t4-reset']")
let counter = document.querySelector("[data-js='t4-out']")

minus.addEventListener('click', () => {
  counter.textContent --
})

plus.addEventListener('click', () => {
  counter.textContent ++
})

reset.addEventListener('click', () => {
  counter.textContent = 0
})


// Задача 5
let modal = document.querySelector("[data-js='t5-modal']")
let open = document.querySelector("[data-js='t5-open']")
let close = document.querySelector("[data-js='t5-close']")

open.addEventListener('click', () => {
  modal.removeAttribute('hidden')
})

close.addEventListener('click', () => {
  modal.setAttribute('hidden', '')
})

modal.addEventListener('click', () => {
  modal.setAttribute('hidden', '')
})

document.addEventListener('keydown', event => {
  if (event.key == 'Escape' || event.key == 'Esc') {
        modal.setAttribute('hidden', '')
      }
})

})


// Задача 6
let tab_a = document.querySelector("[data-tab='a'")
let tab_b = document.querySelector("[data-tab='b'")
let tab_c = document.querySelector("[data-tab='c'")
let pane_a = document.querySelector("[data-pane='a'")
let pane_b = document.querySelector("[data-pane='b'")
let pane_c = document.querySelector("[data-pane='c'")

tab_a.addEventListener('click', () => {
  pane_a.classList.add('is-active')
  pane_b.classList.remove('is-active')
  pane_c.classList.remove('is-active')
  tab_a.classList.add('is-active')
  tab_b.classList.remove('is-active')
  tab_c.classList.remove('is-active')
})
tab_b.addEventListener('click', () => {
  pane_b.classList.add('is-active')
  pane_a.classList.remove('is-active')
  pane_c.classList.remove('is-active')
  tab_b.classList.add('is-active')
  tab_a.classList.remove('is-active')
  tab_c.classList.remove('is-active')
})
tab_c.addEventListener('click', () => {
  pane_c.classList.add('is-active')
  pane_b.classList.remove('is-active')
  pane_a.classList.remove('is-active')
  tab_c.classList.add('is-active')
  tab_b.classList.remove('is-active')
  tab_a.classList.remove('is-active')
})


// Задача 7
let input7 = document.querySelector("[data-js='t7-input']")
let btn7 = document.querySelector("[data-js='t7-run']")
let output7 = document.querySelector("[data-js='t7-out']")

btn7.addEventListener('click', () => {
  output7.textContent = input7.value.split('').reverse().join('')
  input7.value = ''

})


// Задача 8
let A = document.querySelector("[data-js='t8-a']")
let B = document.querySelector("[data-js='t8-b']")
let plus8 = document.querySelector("[data-js='t8-add']")
let mult8 = document.querySelector("[data-js='t8-mul']")
let output8 = document.querySelector("[data-js='t8-out']")

plus8.addEventListener('click', () => {
  output8.textContent = parseFloat(A.value) + parseFloat(B.value)
  A.value = ''
  B.value = ''

})

mult8.addEventListener('click', () => {
  output8.textContent = parseFloat(A.value) * parseFloat(B.value) 
  A.value = ''
  B.value = ''

})

// Задача 9
let text = document.querySelector("[data-js='t9-text']")
let btn9 = document.querySelector("[data-js='t9-toggle']")

btn9.addEventListener('click', () => {
  if (text.hidden == false){
    text.hidden = true
    btn9.textContent = "Показать"
  }
  else{
    text.hidden = false
    btn9.textContent = "Скрыть"
  }

})

// Задача 10
let box10 = document.querySelector("[data-js='t10-box']")
let out10 = document.querySelector("[data-js='t10-out']")
let range = document.querySelector("[data-js='t10-range']")
let size

  range.addEventListener('input', () => {
    size = range.value
    box10.style.width = size + 'px';
    box10.style.height = size + 'px';
    out10.textContent = size + 'px';

})


// Задача 11
let input11 = document.querySelector("[data-js='t11-seconds']")
let start = document.querySelector("[data-js='t11-start']")
let stop11 = document.querySelector("[data-js='t11-stop']")
let output11 = document.querySelector("[data-js='t11-out']")
let timeLeft = 0
let timer = 0

start.addEventListener('click', () => {
  clearInterval(timer)
  timeLeft = parseInt(input11.value)
  input11.value = ""
  let updateTimer = () => {
    output11.textContent = timeLeft
    if (timeLeft <= 0) {
      clearInterval(timer)
      output11.textContent = "Время вышло!"
      return;
    }
    timeLeft--;
  }
  updateTimer()
  timer = setInterval(updateTimer, 1000)
})

stop11.addEventListener('click', () => {
  clearInterval(timer)
})


// Задача 12
let btn12 = document.querySelector("[data-js='t12-plus']")
let out12 = document.querySelector("[data-js='t12-label']")
let bar = document.querySelector("[data-js='t12-bar']")
let barWidth = 0

btn12.addEventListener('click', () => {
  if (barWidth < 100){
    barWidth += 10
    bar.style.width = String(barWidth) + "%"
  }
  out12.textContent = barWidth + "%"
})

// Задача 13
let input13 = document.querySelector("[data-js='t13-input']")
let out13 = document.querySelector("[data-js='t13-out']")

out13.textContent = "Нажмите Ctrl+K для очистки ввода"

document.addEventListener('keydown', function(e){
  if (e.ctrlKey && e.key === "k") {
    e.preventDefault();
    input13.value = ""
    out13.textContent = "Ctrl+K нажат! Ввод очищен"
  }
})

// Задача 14
let btn14 = document.querySelector("[data-js='t14-next']")
let out14 = document.querySelector("[data-js='t14-out']")
const arr = ["Волк слишком энергичен чтобы работать",
  "Упал – не значит упал. Провал – это там где не встал",
  "Лучше быть тем кем есть, чем быть тем, кем не будешь",
  "Если волк молчит, то лучше его не перебивать"
]

btn14.addEventListener('click', () => {
  const random = Math.floor(Math.random() * arr.length)
  out14.textContent = arr[random]
})


// Задача 15
let coords = document.querySelector("[data-js='t15-coords']")
let area = document.querySelector("[data-js='t15-area']")
let item = document.querySelector("[data-js='t15-item']")
let dragging = false
let x, y

item.addEventListener('mousedown', function(e){
  x = e.x - item.getBoundingClientRect().left
  y = e.y - item.getBoundingClientRect().top
  area.append(item)
  dragging = true
})

document.addEventListener('mousemove',function(e){
  if (dragging == false) return
  const areaRect = area.getBoundingClientRect()
  const itemBox = item.getBoundingClientRect()
  const itemWidth = itemBox.width
  const itemHeight = itemBox.height

  let newLeft = e.x - area.getBoundingClientRect().left - x
  let newTop = e.y - area.getBoundingClientRect().top - y

  newLeft = Math.max(0, Math.min(newLeft, areaRect.width - itemWidth))
  newTop = Math.max(0, Math.min(newTop, areaRect.height - itemHeight))
  
  item.style.left = newLeft + 'px'
  item.style.top = newTop + 'px'
  
  coords.textContent = `x: ${Math.round(newLeft)}, y: ${Math.round(areaRect.height - itemHeight - newTop)}`
})

document.addEventListener('mouseup', () => {
  dragging = false
})

  
// Задача 16
let btn16 = document.querySelector("[data-js='t16-animate']")
let box16 = document.querySelector("[data-js='t16-box']")

btn16.addEventListener('click', () => {
  box16.classList.toggle('is-bouncing')
})