// Correctly select the unordered list element (by ID)
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list'); // Correct: needs the '#' for an ID

// Add event listener to the button
button.addEventListener('click', function () {
  // Check if the input is not empty
  if (input.value.trim() !== '') {
    // Create a new list item and delete button
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Set the text content
    li.textContent = input.value;
    deleteButton.textContent = '❌';

    // Add accessible label
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Append the delete button to the list item
    li.append(deleteButton);

    // Append the list item to the unordered list
    list.append(li);

    // Clear the input field and focus it
    input.value = '';
    input.focus();

    // Add functionality to the delete button
    deleteButton.addEventListener('click', () => {
      list.removeChild(li);
    });
  } else {
    alert("Please enter a chapter.");
  }
});
