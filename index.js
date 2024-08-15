function addingEventListener() {
  const input = document.getElementById('button');
  input.addEventListener('click', clickAlert); // Add the event listener here
}

function clickAlert() {
  alert('I was clicked!');
}
