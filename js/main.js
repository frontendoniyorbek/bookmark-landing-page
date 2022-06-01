let elQuestionsItem = document.querySelectorAll('.questions__item');
let elQuestionsItemTexts = document.querySelectorAll('.questions__item-texts');
const elsTabsItem = document.querySelectorAll('.tabs__item');
const elsPanel = document.querySelectorAll('.panel');
const elsTabLink = document.querySelectorAll('.js-tab-link');

function deactivateTabsItem () {
  elsTabsItem.forEach(function (elsTabsItem) {
    elsTabsItem.classList.remove('tabs__item--active');
  });
}

function deactivatePanels () {
  elsPanel.forEach(function (elPanel) {
    elPanel.classList.remove('panel-active');
  });
}

elsTabLink.forEach(function (elsTabLink) {
  elsTabLink.addEventListener('click', function(evt) {
    // Prevent page move
    evt.preventDefault();

    //Remove active class form tabs__item elemnts
    deactivateTabsItem();

    // Add active class to current tabs__item
    elsTabLink.parentElement.classList.add('tabs__item--active');

    // Remove active class from tabs__panel elemnts
    deactivatePanels();

    // Show active tab panel
    // const elTargetPanel = document.querySelector(`#${elsTabLink.href.split('#')[1]}`);
    const elTargetPanel = document.querySelector(elsTabLink.dataset.tabTarget);
    elTargetPanel.classList.add('panel-active');
  });
});

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
