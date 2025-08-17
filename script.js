console.log("Mickey Blog");
//////////////////////////////////////////////////////////////////////////////////////////

// 頁面淡入動畫
window.addEventListener('load', () => {
  document.querySelector('.container').classList.add('visible')
})

setTimeout(function () {
  document.querySelector('.container').classList.add('visible')
}, 1000)