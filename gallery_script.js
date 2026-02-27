const imageGallery = [
    "https://preview.redd.it/at-the-1987-nba-slam-dunk-contest-michael-jordans-air-photo-v0-i01lbg4uypmc1.jpeg?width=640&crop=smart&auto=webp&s=5813d11889bcd45ebb7e14473fb3f7ec94afe3b1",
    "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/98-stephen-curry-noah-graham.jpg",
    "https://i.guim.co.uk/img/media/f84e5bf1176dfaf6bfc215dafcde5e796df14c04/0_21_5296_3179/master/5296.jpg?width=465&dpr=1&s=none&crop=none",
    "https://radioimg.audacy.com/aiu-media/IST-Court-IG-1-cff9511f-9f2f-48cb-be72-2eef5f27c6ae.jpg?width=800"
]

const imageElement = document.getElementById('gallery-image');
const prevButton = document.getElementById('prev-btn');
const nextbutton = document.getElementById('next-btn');

let currentImageIndex = 0;

function updateImage() {
    imageElement.src = imageGallery[currentImageIndex];
}

updateImage();

nextbutton.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % imageGallery.length;
    updateImage();
});