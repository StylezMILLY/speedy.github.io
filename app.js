

var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else {
            // entry.target.classList.remove('show');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


var observer = new IntersectionObserver((entries)=> {
    entries.forEach((entry)=> {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show1');
        }else {
            // entry.target.classList.remove('show1');
        }
    });
});


var hiddenElements = document.querySelectorAll('.hidden1');
hiddenElements.forEach((el) => observer.observe(el));


