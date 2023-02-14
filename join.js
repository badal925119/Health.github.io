let counters = document.querySelectorAll('.counter');
let time = 300;

counters.forEach(counter =>{
    let updateCount =() => {
    let target = +counter.getAttribute("data-target");
    let count = +counter.innerText;
    let  increment = target / time;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout( updateCount, 1);

    } else {
      count.innerText = target; 
    }
  };
  updateCount();

});
