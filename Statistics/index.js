const counterEl = document.querySelectorAll('.counter');
counterEl.forEach((e) => {
    
    let curr = 0;
    let target = e.getAttribute("data-ceil");
    const increment = Math.ceil(target / 20);
    let interval = setInterval(() => {
        curr += increment;
        if (curr > target){
            clearInterval(interval);
            curr = target;
        }
        e.innerHTML = curr;
        
    } , 60);
    
})