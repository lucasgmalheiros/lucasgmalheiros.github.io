const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySource = myImage.getAttribute("src");
    if (mySource === "images/fiodor-dostoievski.png") {
        myImage.setAttribute("src", "images/portrait.jpg");
    }
    else {
        myImage.setAttribute("src", "images/fiodor-dostoievski.png");
    }
};