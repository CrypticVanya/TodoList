


const Formatter = (function(){

    const domManipulate = (selector, message) => {
        document.getElementById(selector).style.display = message
    }

    const btn = document.querySelector('.open-form')
    btn.addEventListener('click', () => {
        Formatter.domManipulate('popUpForm', 'block')
    })
    
    const cancelBtn = document.querySelector('.btn-cancel')
    cancelBtn.addEventListener('click', () => {
    Formatter.domManipulate('popUpForm', 'none')
    })

    return {
        domManipulate,
    }
})()