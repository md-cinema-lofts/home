// вопросы

// document.getElementById('multiCollapseExample1').on('hidden.bs.collapse', function () {
//   // do something…
//   console.log('closed');
// })

// header scroll
let navBtns = document.querySelectorAll('.nav-btn')
let sections = document.querySelectorAll('section')


window.addEventListener('scroll', function () {
  function isAnyPartOfElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    const vertInView = (rect.top + 200 <= windowHeight) && ((rect.top + rect.height) >= 0);
    if (vertInView == true) {
      return true
    } else {
      return false
    }
  }
});

// 
navBtns.forEach((item, index) => {
  console.log(index);

  function handleButtonClick() {
    sections[index + 1].scrollIntoView({ block: "start", behavior: "smooth" });
  }

  item.addEventListener('click', handleButtonClick);
})

getTable.addEventListener('click', () => sections[3].scrollIntoView({ block: "start", behavior: "smooth" }))

let checkboxes = [
  document.getElementById('checkbox1'),
  document.getElementById('checkbox2'),
  document.getElementById('checkbox3')
]

let getTableBtns = [
  document.getElementById('getTableBtn1'),
  document.getElementById('getTableBtn2'),
  document.getElementById('getTableBtn3')
]


function checkForm(i, x) {
  let inputs = [
    document.getElementById('field-' + i + '-1'),
    document.getElementById('field-' + i + '-2'),
    document.getElementById('field-' + i + '-3'),
    document.getElementById('field-' + i + '-4')
  ]


 if (inputs[0].value.length > 1 && inputs[1].value.length > 9 && inputs[2].value && inputs[3].value) {
  document.getElementById('getTable-' + i + '-' + Number( checkboxes[x].checked) ).click()

 } else {
  alert('Заполните форму')
 }
  
}

getTableBtns[0].onclick=()=>{ checkForm(1, 0) }
getTableBtns[1].onclick=()=>{ checkForm(2, 1) }
getTableBtns[2].onclick=()=>{ checkForm(3, 2) }

checkboxes[0].addEventListener('change', function () {
  (this.checked) ?
    getTableBtns[0].innerText = ` Забронировать - 750 MDL `
    :
    getTableBtns[0].innerText = ` Забронировать - 600 MDL `
})

checkboxes[1].addEventListener('change', function () {
  (this.checked) ?
    getTableBtns[1].innerText = ` Забронировать - 1150 MDL `
    :
    getTableBtns[1].innerText = ` Забронировать - 1000 MDL `
})

checkboxes[2].addEventListener('change', function () {
  (this.checked) ?
    getTableBtns[2].innerText = ` Забронировать - 1750 MDL `
    :
    getTableBtns[2].innerText = ` Забронировать - 1600 MDL `
})








