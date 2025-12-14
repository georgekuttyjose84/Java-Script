const box = document.getElementById("box");
const targets = document.querySelectorAll(".target");

/* Drag start */
box.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text", e.target.id);
});

/* Loop through ALL drop targets */
targets.forEach(target => {

    /* Allow drop */
    target.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    /* Handle drop */
    target.addEventListener("drop", (e) => {
        e.preventDefault();

        const id = e.dataTransfer.getData("text");
        const draggedElement = document.getElementById(id);

        target.appendChild(draggedElement);
    });
});
