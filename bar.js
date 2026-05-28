
var params = new URLSearchParams(window.location.search);

var bar = document.querySelectorAll(".bottom_element_grid");

var top = localStorage.getItem('top');
var bottom;

if (localStorage.getItem('bottom')){
    bottom = localStorage.getItem('bottom');

    bar.forEach((element) => {
        var image = element.querySelector('.bottom_element_image');
        var text = element.querySelector('.bottom_element_text');

        var send = element.getAttribute('send');
        if (send === bottom){
            image.classList.add(bottom + "_open");
            text.classList.add("open");
        }else{
            image.classList.remove(send + "_open");
            image.classList.add(send);
            text.classList.remove("open");
        }
    })
}

function sendTo(url, top, bottom){
    if (top){
        localStorage.setItem('top', top)
    }
    if (bottom){
        localStorage.setItem('bottom', bottom)
    }

    var routes = {
        home: "home1436.html",
        home1436: "home1436.html",
        documents: "documents1436.html",
        documents1436: "documents1436.html",
        services: "services1436.html",
        services1436: "services1436.html",
        more: "more1436.html",
        more1436: "more1436.html",
        card: "card1436.html",
        card1436: "card1436.html",
        qr: "qr1436.html",
        qr1436: "qr1436.html",
        scan: "scan1436.html",
        scan1436: "scan1436.html",
        show: "show1436.html",
        show1436: "show1436.html"
    };
    var target = routes[url] || (url.endsWith(".html") ? url : url + ".html");
    var query = params.toString();

    location.href = query ? target + "?" + query : target;
}

var options = { year: 'numeric', month: '2-digit', day: '2-digit' };
var optionsTime = { second: '2-digit', minute: '2-digit', hour: '2-digit' };

bar.forEach((element) => {
    element.addEventListener('click', () => {
        localStorage.removeItem('top');
        localStorage.removeItem('bottom');

        sendTo(element.getAttribute("send"))
    })
})

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/windows phone/i.test(userAgent)) {
        return 1;
    }
  
    if (/android/i.test(userAgent)) {
        return 2;
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 3;
    }
  
    return 4;
}
  
if (getMobileOperatingSystem() == 2){
    document.querySelector(".bottom_bar").style.height = "70px"
}

function getRandom(min, max) {
    return parseInt(Math.random() * (max - min) + min);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}
