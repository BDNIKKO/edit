const list = document.querySelector('ul');

// Change the content of the second child <li> element to 'Granny Smith Apples'
list.children[1].innerHTML = 'Granny Smith Apples';

// Remove the fourth child <li> element from the list
list.children[3].remove();

// Create a new <li> element
const newItem = document.createElement ('li');

newItem.innerHTML = 'Kombucha';
// Append the new <li> element to the end of the list
list.appendChild(newItem);

list.innerHTML = '';

const newItems = ['protein bars', 'almonds', 'peanut butter'];

// Iterate over the new items array
newItems.forEach(item => { 
    const li = document.createElement('li');  // Create a new <li> element for each item
    li.textContent = item;// Set the text content of the <li> element to the current item
    list.appendChild(li); // Append the new <li> element to the list
});

// Find the <li> element with text content 'almonds' in the list
const almondsItem = Array.from(list.children).find(li => li.textContent==='almonds');
if (almondsItem) {
    almondsItem.classList.add('important');
}
   
   
// // console.log('Second item is important:', almondsItem.classList.contains('important'));



