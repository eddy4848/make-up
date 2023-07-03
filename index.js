const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('toggle-menu'),
    closeMenu = document.getElementById('close-menu')

    toggleMenu.addEventListener('click', () =>{
        navMenu.classList.toggle('show')
        console.log (toggleMenu)
    })

    closeMenu.addEventListener('click', () =>{
        navMenu.classList.remove('show')
    })