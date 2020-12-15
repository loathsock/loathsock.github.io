const slide = () => {
    const slider = document.querySelector('.slide')
    const nav = document.querySelector('.nav-links')
    const navlinks = document.querySelectorAll('.nav-links li')
    // toggle nav
    slider.addEventListener('click', () => {
        nav.classList.toggle('nav-active')
        slider.classList.toggle('toggle')
        if(!nav.classList.contains('transform')) {
            nav.classList.add('transform')
        }


     // animate links
      navlinks.forEach((link, index) => {
          if(link.style.animation) {
            link.style.animation= ''
          } else {        
          link.style.animation = `navlinkFade 0.5s ease forwards ${index/ 6}s`
        }
      })
    })    
}

slide()