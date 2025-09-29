window.addEventListener('scroll', function () {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / docHeight;

  const startRGB = [29, 32, 36];      
  const middleRGB = [100, 120, 150]; 
  const endRGB = [29, 32, 36];    

  let r, g, b;

  if (scrollFraction < 0.5) {
    const percent = scrollFraction / 0.5; 
    r = Math.round(startRGB[0] + (middleRGB[0] - startRGB[0]) * percent);
    g = Math.round(startRGB[1] + (middleRGB[1] - startRGB[1]) * percent);
    b = Math.round(startRGB[2] + (middleRGB[2] - startRGB[2]) * percent);
  } else {
    const percent = (scrollFraction - 0.5) / 0.5; 
    r = Math.round(middleRGB[0] + (endRGB[0] - middleRGB[0]) * percent);
    g = Math.round(middleRGB[1] + (endRGB[1] - middleRGB[1]) * percent);
    b = Math.round(middleRGB[2] + (endRGB[2] - middleRGB[2]) * percent);
  }

  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

gsap.to(".intro_text", {
  yPercent: 1900, 
  duration: 1.3, 
  stagger: 0.06,
  ease: "power1" 
});

setTimeout(function() {
  window.scrollTo(0, 900); 
}, 3000); 

$(document).ready(function(){
    $(".skill_bg").each(function(i){
        let skill = $(this).find(".skill_bar");
        let num = 0;    
        let percent = parseInt(skill.text());
        console.log(percent)
        skill.delay(i * 1000).animate({
            width : percent + "%"
        },function(){
            let increase = setInterval(function(){
                num++
                if(num > percent){
                    clearInterval(increase)
                } else{
                    skill.text(num + "%")
                }
            },10)
        })
    })



}) //jquery end

const cursor = document.getElementById('cursor');

    document.addEventListener('mousemove', function(e) {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    document.addEventListener('mousedown', function() {
      cursor.classList.add('click');
    });

    document.addEventListener('mouseup', function() {
      cursor.classList.remove('click');
    });




const tooltip = document.getElementById('hoverTooltip');
const links = document.querySelectorAll('a.more-link img');

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    tooltip.style.opacity = '1';
  });

  link.addEventListener('mouseleave', () => {
    tooltip.style.opacity = '0';
  });

  link.addEventListener('mousemove', (e) => {
    tooltip.style.left = (e.clientX + 15) + 'px';
    tooltip.style.top = (e.clientY + -35) + 'px';
  });
});

const hoverImage = document.getElementById('hover-image');
    const hoverTargets = document.querySelectorAll('.hover-target');

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    let isHovering = false;

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX + 30;
      mouseY = e.clientY + 30;
    });

    function animate() {
      const speed = 0.1;
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      hoverImage.style.transform = `translate(${currentX}px, ${currentY}px) scale(${isHovering ? 1 : 0.9})`;
      requestAnimationFrame(animate);
    }
    animate();

    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        const imgUrl = el.getAttribute('data-img');
        hoverImage.style.backgroundImage = `url('${imgUrl}')`;
        hoverImage.style.opacity = 1;
        isHovering = true;
      });
      el.addEventListener('mouseleave', () => {
        hoverImage.style.opacity = 0;
        isHovering = false;
      });
    });

    