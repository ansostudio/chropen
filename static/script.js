window.addEventListener("load", main, false);

function main() {
    const button = document.getElementById("button");

    button.addEventListener('click', (e) => {
        window.close();
    }, false);
}
