var typed = new Typed('#element', {
    strings: ['Web developer', 'CSS enthusiast', '&amp; Web designer'],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});

let downloadBtn = document.getElementById("download")

downloadBtn.addEventListener('click', function() {
    alert("Resume coming soon!!")
})