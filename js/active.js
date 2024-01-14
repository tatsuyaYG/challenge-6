const btn = document.querySelector('.c-menubutton');
const menu = document.querySelector('.p-menulist');
const sns = document.querySelector('.p-sns');
const header = document.querySelector('.p-header');
const bg = document.querySelector('.p-bg');

btn.addEventListener('click', function() {
  btn.classList.toggle('active');
  menu.classList.toggle('active');
  sns.classList.toggle('active');
  header.classList.toggle('active');
  bg.classList.toggle('active');
});
