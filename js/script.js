const [...card] = document.querySelectorAll('.card')

card.map(e => {
    if(e.classList.contains('supervisor')){
        e.insertAdjacentHTML('beforeend',`<img src="images/icon-supervisor.svg" alt="" srcset="" class="image">`)
    }else if(e.classList.contains('karma')){
        e.insertAdjacentHTML('beforeend',`<img src="images/icon-karma.svg" alt="" srcset="" class="image">`)
    }else if(e.classList.contains('team-builder')){
        e.insertAdjacentHTML('beforeend',`<img src="images/icon-team-builder.svg" alt="" srcset="" class="image">`)
    }else{
        e.insertAdjacentHTML('beforeend',`<img src="images/icon-calculator.svg" alt="" srcset="" class="image">`)
    }
})