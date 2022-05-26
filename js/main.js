let elQuestionsItem = document.querySelectorAll('.questions__item');
let elQuestionsItemTexts = document.querySelectorAll('.questions__item-texts');

function Open() {
  elQuestionsItemTexts.forEach(function(item){
    item.classList.remove('questions__item-js')
  })
}

elQuestionsItem.forEach(function(item, index) {
  item.addEventListener('click', function(){
    Open()
    elQuestionsItemTexts[index].classList.add('questions__item-js')
  })
})
