// variables
var slides = document.querySelectorAll('.slide');
var rbtn = document.querySelectorAll('.rad-btn');
var leftArrow = document.querySelector('.left');
var rightArrow = document.querySelector('.right');
// var justify = document.querySelector('.justify');
var slideInt; // Store ongoin timer
var intTime = 5000;

// Iterate all radio navigation buttons
rbtn.forEach(function(item, index){
    // click events for buttons
    item.addEventListener('click', function(){
        manButtonNav(index);
    })
});

// click events for arrows
// right arrow
rightArrow.addEventListener('click', function(e){
    e.preventDefault();
    nextSlide();
    clrInterval();
});

// left arrow
leftArrow.addEventListener('click', function(e){
    e.preventDefault();
    prevSlide();
    clrInterval();
});

// click justify logo
// justify.addEventListener('click', function(e){
//     e.preventDefault();

// })

// function fot radio navigation
function manButtonNav(index){
    for( var i =0; i < slides.length; i++){
       // set slides and radio navigation button
       if(i !== index){
           slides[i].classList.remove('curr');
           rbtn[i].classList.remove('active');
       }
       else{
           slides[index].classList.add('curr');
           rbtn[index].classList.add('active');
       }
       clrInterval();
    }
}

// Function for the next line
function nextSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');
    // Unset current slide and radio button
    curr.classList.remove('curr');
    active.classList.remove('active');
    // set next slide and radio button
    if(curr.nextElementSibling){
        curr.nextElementSibling.classList.add('curr');
        active.nextElementSibling.classList.add('active');
    }
    else{
        slides[0].classList.add('curr');
        rbtn[0].classList.add('active');
    }
}

//function for the previous slide
function prevSlide(){
    var curr = document.querySelector('.curr');
    var active = document.querySelector('.active');
    // Unset current slide and radio button
    curr.classList.remove('curr');
    active.classList.remove('active');
    // set next slide and radio button
    if(curr.previousElementSibling){
        curr.previousElementSibling.classList.add('curr');
        active.previousElementSibling.classList.add('active');
    }
    else{
        slides[slides.length-1].classList.add('curr');
        rbtn[rbtn.length-1].classList.add('active');
    }
}

// function for clear interval
function clrInterval(){
    clearInterval(slideInt);
    slideInt = setInterval(nextSlide, intTime);
}

// automatic salide navigation
slideInt = setInterval(nextSlide, intTime);





// ------------------Cart---------------------
// ------------------Cart---------------------
// ------------------Cart---------------------


