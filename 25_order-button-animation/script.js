let start = document.querySelector('.default')
console.log(start.innerText)
document.querySelector(".order").addEventListener("click", function (e) {
    let button = this;
    if (!button.classList.contains("animate")) {
        button.classList.add("animate");
        start.innerHTML = "注文完了"
        setTimeout(() => {
            button.classList.remove("animate");
        }, 10000);
    }
});
