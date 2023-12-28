/* click event, collapse faq tabs click and check for enter*/

const faqs = document.querySelectorAll('.faq')


faqs.forEach(faq => {
    faq.addEventListener("click", ()=> {
        faq.classList.toggle('active')
    })
})


function onKeyUp(e){
    if (e.key === "Enter"){
       e.target.classList.toggle('active')
    }
  }
