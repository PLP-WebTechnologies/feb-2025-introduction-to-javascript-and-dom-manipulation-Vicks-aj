// Change text content dynamically
function changeContent() {
    const textElement = document.getElementById('changeText');
    textElement.textContent = 'Text changed at: ' + new Date().toLocaleTimeString();
}

// Modify CSS styles through class toggling
function toggleHighlight() {
    const title = document.getElementById('mainTitle');
    title.classList.toggle('highlight');
}

// Add new elements dynamically
let elementCounter = 1;
function addNewElement() {
    const container = document.getElementById('dynamicContent');
    const newElement = document.createElement('div');
    newElement.textContent = `Dynamic Item ${elementCounter++}`;
    newElement.className = 'dynamic-item';
    container.appendChild(newElement);
}

// Remove last added element
function removeLastElement() {
    const container = document.getElementById('dynamicContent');
    if (container.lastChild) {
        container.removeChild(container.lastChild);
        if (elementCounter > 1) elementCounter--;
    }
}