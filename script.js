const capturarTarea = document.querySelector("#task");
const listaTarea = document.querySelector("#task-list");
const formulario = document.querySelector("#formulario");

const agregarTarea = () => {
    const tarea = document.createElement("li");
    tarea.classList.add("flex","justify-between","mt-2");
    tarea.textContent = capturarTarea.value;
    const btnCerrar = document.createElement("p");
    btnCerrar.classList.add("inline-block","text-white","bg-red-500","w-6","h-6","text-center","rounded-full","cursor-pointer")
    btnCerrar.textContent = "X";
    tarea.appendChild(btnCerrar);
    listaTarea.appendChild(tarea);
    formulario.reset();
}

document.addEventListener("submit",(e) => {
    e.preventDefault();
    agregarTarea();
});

