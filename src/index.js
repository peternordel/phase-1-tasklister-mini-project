document.addEventListener("DOMContentLoaded", () => {

  
  //select form
  const form = document.getElementById('create-task-form');
  //create an event listener for that form
  form.addEventListener('submit', (e) => {
    
    e.preventDefault();
    
    //grab parent node (ul list id is tasks)
    const list = document.getElementById('tasks');

    //create child list item
    const newTask = document.createElement('li');
    
    //grab text from text box and add to child list item
    newTask.textContent = document.getElementById('new-task-description').value + ' 's;

    //add delete button to child list item
    const newButton = document.createElement('button');
    newButton.textContent = 'X';
    newButton.addEventListener('click', () => {
      newTask.remove();
      newButton.remove();
    })

    //append child list item to parent node
    newTask.appendChild(newButton);
    list.appendChild(newTask);
  })
});
