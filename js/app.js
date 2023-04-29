const submitBtn = document.querySelector(".submitBtn")
const contact_form = document.querySelector(".contact-form")
const contact_output = document.querySelector(".contact-output")

var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function (){
    var backgroundImg = [
        "../files/bgg.jpg",
        "../files/bgg2.jpg",
        "../files/bgg3.jpg"
    ]
    window.setInterval(()=>{
        var i = Math.floor((Math.random() * 3))

        document.querySelector(".main_page").style.backgroundImage = `url(${backgroundImg[i]})`
    } , 5000)

    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-type');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
}
// INJECT CSS
var css = document.createElement("style");
css.type = "text/css";
css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
document.body.appendChild(css);

}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

const namee = document.querySelector("#name")
const email = document.querySelector("#email")
const message_input = document.querySelector(".message-input")

contactCheck()

function contactCheck(){
  contact_form.addEventListener("submit" , (e)=>{
    e.preventDefault()
    if(namee.value == "" || email.value == "" || message_input.value == ""){
      console.log("not worked")
      contact_output.innerHTML = "Please Fill Everything"
      contact_output.classList.add("notok")
    }else{
      contact_output.innerHTML = "Thanks to Contact Us"
      contact_output.classList.remove("notok")
      contact_output.classList.add("ok")
      console.log("worked")
    }
  
  })
}

    