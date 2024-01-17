document.addEventListener('DOMContentLoaded', () => {

    const seconds = document.getElementById('seconds');
    const display_text = document.querySelector('.count');
    const startBtn = document.getElementById('startBtn');
    const hand = document.querySelector('.hand');
    display_text.innerHTML = seconds.value

    function timer() {
        seconds.style.color = 'white'
        display_text.innerHTML = seconds.value;
        seconds.value--;
        hand.style.animation = `handAnim ${parseInt(seconds.value) + 1}s linear`
        const timer_start = setInterval(() => {
            if (seconds.value > 0) {
                display_text.innerHTML = seconds.value;
                console.log(seconds.value)
                seconds.value--;
            } else {
                clearInterval(timer_start)
                seconds.value = ''
                seconds.style.color = 'black'
                display_text.innerHTML = 'Timer Over'
                hand.style.animation = `none`
            }
        }, 1000);
    }

    startBtn.addEventListener('click', () => {
        timer()
    })

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            timer()
        }
    })
});