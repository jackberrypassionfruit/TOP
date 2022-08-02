import './style.css'

localStorage.setItem('currentUser', 'jack');

const userName = localStorage.getItem('currentUser');
console.log(userName);
document.getElementById('profile').innerHTML = userName;

const testULs = document.getElementById('test').getElementsByTagName('li');
for (let li of testULs) {
  const btn = document.createElement('button');
  btn.classList.add('done');
  li.prepend(btn);
}