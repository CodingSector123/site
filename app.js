function progress(){
    var loaddiv = document.querySelector('.loading')
    var percent = document.querySelector('.percent');
    var progress = document.querySelector('.progress');
    var body = document.querySelector('.mainbody');
    var text = document.querySelector('.text');
    var maincon = document.querySelector('.othercontent');
    var count = 4;
    var per = 16;
    var loading = setInterval(animate, 50);
    function animate(){
      if(count == 100 && per == 400){
        percent.classList.add("text-blink");
        text.style.display = "block";
        maincon.style.display = 'block';
        clearInterval(loading);
        loaddiv.style.display = 'none';
        body.style.backgroundColor = 'white';

      }else{
        loaddiv.style.position = 'fixed';
        maincon.style.display = 'none';
        per = per + 4;
        count = count + 1;
        progress.style.width = per + 'px';
        percent.textContent = count + '%';
      }
    }
  }
  progress();

  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links li");
  
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
      link.classList.toggle("fade");
    });
  });