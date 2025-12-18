const dragContainers = document.querySelectorAll('.drag-container');

// ----------------------------
// RESTORE FROM LOCAL STORAGE



const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    const parentElement = button.closest('.drag-item');

    const saveSection = parentElement.querySelector('.add-btn');
    const addContainer = parentElement.querySelector('.add-container');
    const addItem = parentElement.querySelector('.add-item');
    const ul = parentElement.querySelector('ul');

    // ADD ITEM
    button.addEventListener('click', () => {
        button.style.display = 'none';
        saveSection.style.display = 'flex';
        addContainer.style.display = 'flex';
        addItem.focus();
    });

    // SAVE ITEM (ATTACH ONCE)
    saveSection.addEventListener('click', () => {
        const value = addItem.textContent.trim();

        if (!value) return; // 🚫 prevent empty items

        createItem(value, ul);

        addItem.textContent = ''; // clear safely

        button.style.display = 'flex';
        saveSection.style.display = 'none';
        addContainer.style.display = 'none';

        saveToLocalSystem();
    });
});




// ----------------------------
const savedData = JSON.parse(localStorage.getItem('kanbanData')) || {
    progression: [],
    complete: []
};

const progressUI = document.querySelector('.progress');
const completeUI = document.querySelector('.complete');

// Clear default HTML items
progressUI.innerHTML = '';
completeUI.innerHTML = '';

savedData.progression.forEach(text => {
    createItem(text, progressUI);
});

savedData.complete.forEach(text => {
    createItem(text, completeUI);
});

// ----------------------------
// DRAG EVENTS
// ----------------------------
function addDragEvents(item) {
    item.addEventListener('dragstart', () => {
        item.classList.add('dragging');
    });

    item.addEventListener('dragend', () => {
        item.classList.remove('dragging');
        saveToLocalSystem();   // SAVE ON DROP
    });

    item.addEventListener('click', () => {
        item.draggable = false;
        item.contentEditable = "true";
        item.style.background = "#ffffff";
        item.style.color = "black";
        item.focus();

        // Move cursor to end
        const range = document.createRange();
        const selection = window.getSelection();

        range.selectNodeContents(item);
        range.collapse(false); // false = move to end

        selection.removeAllRanges();
        selection.addRange(range);
    });

    item.addEventListener('blur', () => {
        item.contentEditable = "false";
        item.draggable = true;
        item.style.background = "black";
        item.style.color = "white";

        console.log(item.innerHTML);

        if(!item.textContent) {
            console.log('empty');
            const par = item.closest('ul');
            par.removeChild(item);
        }
        saveToLocalSystem();
    });



}

function createItem(text, parent) {
    const li = document.createElement('li');
    li.draggable = true;
    li.textContent = text;
    addDragEvents(li);
    parent.appendChild(li);
}

// ----------------------------
// DRAG OVER LOGIC
// ----------------------------
dragContainers.forEach(container => {
    container.addEventListener('dragover', e => {
        e.preventDefault();

        const ul = container.querySelector('ul');
        const dragging = document.querySelector('.dragging');
        const afterElement = getDragAfterElement(ul, e.clientY);

        if (!afterElement) {
            ul.appendChild(dragging);
        } else {
            ul.insertBefore(dragging, afterElement);
        }
    });
});

// ----------------------------
// POSITION HELPER
// ----------------------------
function getDragAfterElement(container, y) {
    const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];

    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;

        if (offset < 0 && offset > closest.offset) {
            return { offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}

// ----------------------------
// SAVE TO LOCAL STORAGE
// ----------------------------
function saveToLocalSystem() {
    const data = {
        progression: [],
        complete: []
    };

    document.querySelectorAll('.progress li').forEach(li => {
       if(li.textContent.trim()) {
           data.progression.push(li.textContent.trim());
       }
    });

    document.querySelectorAll('.complete li').forEach(li => {
        if(li.textContent.trim()) {
            data.complete.push(li.textContent.trim());
        }
    });

    localStorage.setItem('kanbanData', JSON.stringify(data));
}
