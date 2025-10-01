

const form = document.getElementById("todo-form")
const input = document.getElementById('todo-input')
const list = document.getElementById("todo-list")

console.log("Form:" , form)
console.log("Input:", input)
console.log("List:", list)

form.addEventListener("submit", (e)=>{
    e.preventDefault()

    const taskContent = input.value.trim()

    if(taskContent !== ""){
        const li = document.createElement('li')
        li.textContent = taskContent

        const deleteBtn = document.createElement("button")
        deleteBtn.textContent = "Delete"
        deleteBtn.style.marginLeft = "10px"

        deleteBtn.addEventListener("click", ()=>{
            li.remove
        })

        li.appendChild(deleteBtn)
        list.appendChild(li)

        input.value = ""
    }
})