(function(){
    window.addEventListener('scroll', (e)=> {
       let scroll = window.scrollY
       if(scroll > 50) document.querySelector('header').classList.add('scroll-header')
       else document.querySelector('header').classList.remove('scroll-header')
    })
    document.getElementById('name').innerText = '<Jafar Idris/>'
})()