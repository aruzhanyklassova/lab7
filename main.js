document.getElementsByTagName('title')[0].innerHTML = "Lab7";



const header = document.getElementById('header').innerHTML = "Lab7 Assignment";
document.getElementById('header').style.color = 'blue';

const line = document.createElement('hr');
document.body.appendChild(line);

const newh2 = document.createElement('h2');
document.body.appendChild(newh2);
newh2.innerHTML = "Task";
newh2.style.color = 'red';

const para = document.createElement('p');
para.innerHTML = "In this task you have to reproduce this HTML page as is using <strong>only</strong> JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
document.body.appendChild(para);


const grade = document.createElement('ul');


const liitem1 = document.createElement('li');
liitem1.innerHTML = "find elements in the DOM (<b>5 points</b>);";
liitem1.classList.add('even');
liitem1.style.color='green';
grade.appendChild(liitem1);

const liitem2 = document.createElement('li');
liitem2.innerHTML = "create/add/remove elements (<b>5 points</b>);";
liitem2.classList.add('odd');
liitem2.style.color='purple';
grade.appendChild(liitem2);

const liitem3 = document.createElement('li');
liitem3.innerHTML = "change content of the elements (<b>5 points</b>);";
liitem3.classList.add('even');
liitem3.style.color='green';
grade.appendChild(liitem3);

const liitem4 = document.createElement('li');
liitem4.innerHTML = "change styles of the elements (<b>5 points</b>);";
liitem4.classList.add('odd');
liitem4.style.color='purple';
grade.appendChild(liitem4);

const liitem5 = document.createElement('li');
liitem5.innerHTML = "change attributes of the elements (<b>5 points</b>);";
liitem5.classList.add('even');
liitem5.style.color='green';
grade.appendChild(liitem5);

const liitem6 = document.createElement('li');
liitem6.innerHTML = "change classes of the elements  (<b>5 points</b>).";
liitem6.classList.add('odd');
liitem6.style.color='purple';
grade.appendChild(liitem6);

document.body.appendChild(grade);


const line2 = document.createElement('hr');
document.body.appendChild(line2);



const sub = document.createElement('h2');
sub.innerHTML = "Submission";
sub.style.color = 'red';
document.body.appendChild(sub);


const para2 = document.createElement('p');
para2.innerHTML = "To submit your work, follow these instructions:";
document.body.appendChild(para2);




const points = document.createElement('ul')

const li1 = document.createElement('li');
li1.innerHTML = "Create a new repository on Github, named <b>lab7</b> (<b>1 point</b>).";
li1.classList.add('even');
li1.style.color='green';
points.appendChild(li1);

const li2 = document.createElement('li');
li2.innerHTML = "Clone this repository to your local machine and work inside it.";
li2.classList.add('odd');
li2.style.color='purple';
points.appendChild(li2);

const li3 = document.createElement('li');
li3.innerHTML = 'Create a new HTML file, called <b>index.html</b>, which has only one &lt;h1&gt; tag with "Hello, World!" message (<b>1 point</b>).';
li3.classList.add('even');
li3.style.color='green';
points.appendChild(li3);

const li4 = document.createElement('li');
li4.innerHTML = "Create a new JavaScript file, called <b>main.js</b>, which must contain your program (assignment) described above (<b>1 point</b>).";
li4.classList.add('odd');
li4.style.color='purple';
points.appendChild(li4);

const li5 = document.createElement('li');
li5.innerHTML = "Link this <b>main.js</b> file to your <b>index.html</b> file (Note: place your script at the end of the <b>body</b> section).";
li5.classList.add('even');
li5.style.color='green';
points.appendChild(li5);

const li6 = document.createElement('li');
li6.innerHTML = "Write a JavaScript program in <b>main.js</b> to make your <b>index.html</b> look identical to this HTML file (<b>5 points</b>).";
li6.classList.add('odd');
li6.style.color='purple';
points.appendChild(li6);
const li7 = document.createElement('li');
li7.innerHTML = " After you finish your work, submit it to the Github (<b>2 points</b>).";
li7.classList.add('odd');
li7.style.color='green';
points.appendChild(li7);

document.body.appendChild(points);


const line3 = document.createElement('hr');
document.body.appendChild(line3);