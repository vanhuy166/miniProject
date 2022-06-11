const body = document.querySelector('body')
const range = document.querySelector('.range')
const rangeBar = document.querySelector('.range-bar')

function setRangeBar(val) {

    val = Math.round(val);
    rangeBar.style.width = `${val}%`;
    rangeBar.querySelector('span').innerText = `${val}%`;
    body.style.backgroundColor = `rgba(0, 0, 0, ${val/100})`;
    if (val >= 50) {
        body.querySelector('h1').style.color = 'white';
    } else {
        body.querySelector('h1').style.color = '#246bac';
    }
}

range.addEventListener('mousemove', function(e) {
    const processRange = e.pageX - this.offsetLeft
    let percentRange = (processRange / this.offsetWidth) * 100

    percent = Math.ceil(percentRange)
    setRangeBar(percentRange)
});

setRangeBar(50);