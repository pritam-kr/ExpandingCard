const panels = document.querySelectorAll('.panel');
console.log(panels);

panels.forEach((eachPanel) =>{
    eachPanel.addEventListener('click', () =>{
         removePanel()
        eachPanel.classList.add('active')
    })
})

function removePanel(){
    panels.forEach((e) => {
       e.classList.remove('active')
    })
}