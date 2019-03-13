function showPage(pageId) {
  const pages = document.getElementsByClassName('container');
  for (let i = 0; i < pages.length; i++) {
    pages[i].style.display = 'none';
  }
  document.getElementById(pageId).style.display = 'block';
}

document.getElementById('btnToPage2').addEventListener('click', function() {
  history.pushState({}, '', '/page2');
  showPage('page2');
});

document.getElementById('btnToPage3').addEventListener('click', function() {
  history.pushState({}, '', '/page3');
  showPage('page3');
});

document.getElementById('btnToPage1').addEventListener('click', function() {
  history.pushState({}, '', '/');
  showPage('page1');
});

showPage('page1');
