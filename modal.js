const modalBtns = document.querySelectorAll(".modal-btn");
const closeBtns = document.querySelectorAll(".close-btn");
const modals = document.querySelectorAll(".modal");
const body = document.querySelector("body");
// Open modal when modal button is clicked
modalBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = document.querySelector(btn.dataset.modal);
        modal.classList.add("open");
        modal.classList.remove("close");
        body.classList.add("overflow-hidden");
        body.classList.add("bg-overlay");
    });
});
// Close modal when close button is clicked
closeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const modal = btn.closest(".modal");
        modal.classList.remove("open");
        modal.classList.add("close");
        body.classList.remove("overflow-hidden");
        body.classList.remove("bg-overlay");
    });
});

// Close modal when click outside of modal
modals.forEach((modal) => {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
            modal.classList.add("close");
            body.classList.remove("overflow-hidden");
            body.classList.remove("bg-overlay");
        }
    });
});

