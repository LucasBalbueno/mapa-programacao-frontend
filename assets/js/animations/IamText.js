const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "o Lucas";
    }, 0);
    setTimeout(() => {
        text.textContent = "Developer";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Designer";
    }, 8000);
}

export default textLoad;