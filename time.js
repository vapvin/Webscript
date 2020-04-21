const clock = document.querySelector(".time-display"),
    titleText = clock.querySelector("h1");

const getGlobalTime = () => {
    const date = new Date();
    const min = date.getMinutes();
    const hour = date.getHours();
    titleText.innerText = `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}`: min}`;
}

const init = () => {
    getGlobalTime()
}
init();
setInterval(init, 1000);
console.log(titleText);