//! slider
const prev = document.getElementById('prev'),
    next = document.getElementById('next'),
    slides = document.querySelectorAll('.slide'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDot(index);
}

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add("active");
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
        prepareCurrentSlide(index);
    })
})

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);


//!kll


function scrollto(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
} 

const buttom1 = document.querySelector('.buttom1')
const buttom1_1 = document.querySelector('#buttom1_1')

buttom1.addEventListener('click', () => {
    scrollto(buttom1_1);
})

const buttom2 = document.querySelector('.buttom2')
const buttom2_1 = document.querySelector('#buttom2_1')

buttom2.addEventListener('click', () => {
    scrollto(buttom2_1);
})

const buttom3 = document.querySelector('.buttom3')
const buttom3_1 = document.querySelector('#buttom3_1')

buttom3.addEventListener('click', () => {
    scrollto(buttom3_1);
})

const buttom4 = document.querySelector('.buttom4')
const buttom4_1 = document.querySelector('#buttom4_1')

buttom4.addEventListener('click', () => {
    scrollto(buttom4_1);
})

//! slider.2
const prev1 = document.getElementById('prev1'),
    next1 = document.getElementById('next1'),
    slides1 = document.querySelectorAll('.slide1'),
    dots1 = document.querySelectorAll('.dot1');

let index1 = 0;

const prepareCurrentSlide1 = ind => {
    activeSlide1(index1);
    activeDot1(index1);
}

const activeSlide1 = n => {
    for (slide1 of slides1) {
        slide1.classList.remove('active');
    }
    slides1[n].classList.add("active");
}

const activeDot1 = n => {
    for (dot1 of dots1) {
        dot1.classList.remove('active');
    }
    dots1[n].classList.add('active');
}

const nextSlide1 = () => {
    if (index1 == slides1.length - 1) {
        index1 = 0;
        prepareCurrentSlide1(index1);
    } else {
        index1++;
        prepareCurrentSlide1(index1);
    }
}

const prevSlide1 = () => {
    if (index1 == 0) {
        index1 = slides1.length - 1;
        prepareCurrentSlide1(index1);
    } else {
        index1--;
        prepareCurrentSlide1(index1);
    }
}

dots1.forEach((item1, indexDot1) => {
    item1.addEventListener('click', () => {
        index1 = indexDot1
        prepareCurrentSlide1(index1);
    })
})

next1.addEventListener('click', nextSlide1);
prev1.addEventListener('click', prevSlide1);


//! scroll

function scrollto(element){
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
} 

const buttom11 = document.querySelector('.buttom11')

buttom11.addEventListener('click', () => {
    scrollto(buttom1_1);
})

const buttom21 = document.querySelector('.buttom21')

buttom21.addEventListener('click', () => {
    scrollto(buttom2_1);
})

const buttom31 = document.querySelector('.buttom31')

buttom31.addEventListener('click', () => {
    scrollto(buttom3_1);
})

const buttom41 = document.querySelector('.buttom41')

buttom41.addEventListener('click', () => {
    scrollto(buttom4_1);
})



