const btAddUser = document.getElementById("addUser");
btAddUser?.addEventListener("click", (e) => {
    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("hidden");
    modalRegister.classList.add("flex")
});

const btClose = document.getElementById("close");
btClose?.addEventListener("click", (e) => {
    const modalRegister = document.getElementById("modalRegister");
    modalRegister.classList.remove("flex");
    modalRegister.classList.add("hidden")
});