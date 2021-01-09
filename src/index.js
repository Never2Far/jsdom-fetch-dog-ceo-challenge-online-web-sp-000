
document.addEventListener("DOMContentLoaded", () => {
    console.log('%c HI', 'color: firebrick')
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImgContainer = document.getElementById("dog-image-container");
    let dogImg;
fetch("https://dog.ceo/api/breeds/image/random/4")
.then(response => response.json())
.then(data => displayDogs(data['message']));

function displayDogs(data) {
        data.forEach(element => {
            dogImg = document.createElement('img')
           dogImg.setAttribute('src', element)
           dogImgContainer.appendChild(dogImg);
        });
}
});
