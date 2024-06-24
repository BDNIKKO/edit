const list = document.querySelector('ul');

list.children[1].innerHTML = 'Granny Smith Apples';

list.children[3].remove();

const newItem = document.createElement ('li');

newItem.innerHTML = 'Kombucha';

list.appendChild(newItem);

list.innerHTML = '';

const newItems = ['protein bars', 'almonds', 'peanut butter'];

newItems.forEach(item => { 
    const li = document.createElement('li'); 
    li.textContent = item;
    list.appendChild(li); 
});

const almondsItem = Array.from(list.children).find(li => li.textContent==='almonds');
if (almondsItem) {
    almondsItem.classList.add('important');
}
   
   
console.log('Second item is important:', almondsItem.classList.contains('important'));



