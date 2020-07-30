const images = document.querySelectorAll("[data-src]")

const imgOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
};

const imgObserver = new IntersectionObserver((entries, imgObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            queue.loadFile({ id: entry.target.getAttribute("id"), src: entry.target.getAttribute("data-src") }); 
            //preloadImage(entry.target);
            imgObserver.unobserve(entry.target);
        }
    })
}, imgOptions);


images.forEach(image => {
    imgObserver.observe(image);
});

var queue = new createjs.LoadQueue(false);

queue.on("fileload", handleFileLoad);

function handleFileLoad(event) {
    //const src = event.item; // A reference to the item that was passed in to the LoadQueue
    var item = event.item; // A reference to the item that was passed in to the LoadQueue
    const loadedImage = event.result;
    loadedImage.className = "fade-in p-1";
    item2 = document.getElementById(item.id);
    item2.appendChild(loadedImage);
}

var allImages = [];

//img.className = "fade-in p-1";

