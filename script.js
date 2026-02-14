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
input.addEventListener('keydown',() => {
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
  pane_a.classList.replace('pane', 'pane is-active')
  pane_b.classList.replace('pane is-active', 'pane')
  pane_c.classList.replace('pane is-active', 'pane')
})
tab_b.addEventListener('click', () => {
  pane_b.classList.replace('pane', 'pane is-active')
  pane_a.classList.replace('pane is-active', 'pane')
  pane_c.classList.replace('pane is-active', 'pane')
})
tab_a.addEventListener('click', () => {
  pane_c.classList.replace('pane', 'pane is-active')
  pane_b.classList.replace('pane is-active', 'pane')
  pane_a.classList.replace('pane is-active', 'pane')
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
  if (btn9.textContent == "Скрыть"){
    text.setAttribute('hidden', '')
    btn9.textContent = "Показать"
  }
  else{
    text.removeAttribute('hidden')
    btn9.textContent = "Скрыть"
  }

})

// Задача 10
let square = document.querySelector("[data-js='t10-box']")
let size = document.querySelector("[data-js='t10-out']")
let range = document.querySelector("[data-js='t10-range']")




// Задача 11
let input11 = document.querySelector("[data-js='t11-seconds']")
let start = document.querySelector("[data-js='t11-start']")
let stop = document.querySelector("[data-js='t11-stop']")
let output11 = document.querySelector("[data-js='t11-out']")
let time_left = 0

start.addEventListener('click', () => {
    timer_left = Number(input11.value)
    console.log("it works")
    input11.value = ''
    let timer = setInterval(() => {
      output11.textContent = time_left
      if (time_left <= 0) {
        clearInterval(timer)
        output11.textContent = "Время вышло!"
      } 
      else {
        time_left--
      }
    }, 1000)

})

stop.addEventListener('click', () => {
  clearInterval(timer)
  output11.textContent = "Таймер остановлен!"
})