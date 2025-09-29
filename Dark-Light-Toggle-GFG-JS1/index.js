const toggleBtn = document.getElementById("toggle-btn")
const body = document.body

body.classList.add("light-mode")

toggleBtn.addEventListener("click" , ()=>{
    if(body.classList.contains('light-mode')){
        body.classList.replace('light-mode','dark-mode')
        toggleBtn.textContent='Switch To Light Mode'
        body.style.backgroundColor = 'black'
        
    }
    else{
        body.classList.replace('dark-mode','light-mode')
        toggleBtn.textContent = 'Switch To Dark Mode'
        body.style.backgroundColor = 'white'
    }
})
