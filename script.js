const container = document.querySelector('#container');
const content = document.createElement('div');
content.textContent ='This is the glorious text-content!';

const content2 =document.createElement('p');
content2.style.color = 'red';
content2.textContent ='Hey I’m red!';

const content3 = document.createElement('h3');
content3.style.color = 'blue';
content3.textContent ='I’m a blue h3!';

container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);


