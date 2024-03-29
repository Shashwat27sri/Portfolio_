
$(document).ready(function () {

  $('#menu').click(function () {
      $(this).toggleClass('fa-times');
      $('.tags').toggleClass('nav-toggle');
  });

  $(window).on('scroll load', function () {
      $('#menu').removeClass('fa-times');
      $('.tags').removeClass('nav-toggle');

      if (window.scrollY > 60) {
          document.querySelector('#scroll-top').classList.add('active');
      } else {
          document.querySelector('#scroll-top').classList.remove('active');
      }

      // scroll spy
      // $('section').each(function () {
      //     let height = $(this).height();
      //     let offset = $(this).offset().top - 200;
      //     let top = $(window).scrollTop();
      //     let id = $(this).attr('id');

      //     if (top > offset && top < offset + height) {
      //         $('.tags ul li a').removeClass('active');
      //         $('.tags').find(`[href="#${id}"]`).addClass('active');
      //     }
      // });
  });

  // smooth scrolling
  // $('a[href*="#"]').on('click', function (e) {
  //     e.preventDefault();
  //     $('html, body').animate({
  //         scrollTop: $($(this).attr('href')).offset().top,
  //     }, 500, 'linear')
  // });

  // <!-- emailjs to mail contact form data -->
  $("#contact-form").submit(function (event) {
      emailjs.init("sPxLzIqQXppiP_LZ5");

      emailjs.sendForm('service_3fv3nnv', 'template_te72jsh', '#contact-form')
          .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
              document.getElementById("contact-form").reset();
              alert("Form Submitted Successfully");
          }, function (error) {
              console.log('FAILED...', error);
              alert("Form Submission Failed! Try Again");
          });
      event.preventDefault();
  });
  // <!-- emailjs to mail contact form data -->

});


// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: [ "Web Development","Frontend Development","Backend Development", "Web Designing","UI/UX Designing", "Open-Source", "Graphic Designing"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->



// fetching skills data from json file

async function fetchData(type = "skills") {
  let response
  type === "skills" ?
      response = await fetch("json/skills.json")
      :
      response = await fetch("json/project.json")    //else fetch the projects 
  const data = await response.json();
  return data;
}

function showSkills(skills) {
  let skillsContainer = document.getElementById("skillsContainer");
  let skillHTML = "";
  skills.forEach(skill => {
      skillHTML += `
      <div class="bar">
            <div class="info">
              <img src=${skill.icon} alt="skill" />
              <span>${skill.name}</span>
            </div>
          </div>`
  });
  skillsContainer.innerHTML = skillHTML;
}

// fetching done


// to display the fetched skills 
fetchData().then(data => {
  showSkills(data);
});

// skill display done 



// function to show projects
function showProjects(projects) {
  let projectsContainer = document.querySelector("#work .box-container");
  let projectHTML = "";
  projects.slice(0, 10).filter(project => project.category != "react").forEach(project => {
      projectHTML += `
      <div class="box tilt">
    <img draggable="false" src="assets/projects/${project.image}.png" alt="project" />
    <div class="content">
      <div class="tag">
      <h3>${project.name}</h3>
      </div>
      <div class="desc">
        <p>${project.desc}</p>
        <div class="btns">
          <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
          <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
        </div>
      </div>
    </div>
  </div>`
  });
  projectsContainer.innerHTML = projectHTML;

  // fetching of projects and logic done 


  // <!-- tilt js effect starts -->
  // VanillaTilt.init(document.querySelectorAll(".tilt"), {
  //     max: 15,
  // });
  // <!-- tilt js effect ends -->
}

// to display the fetched projects 
fetchData("projects").then(data => {
  showProjects(data);
});
// project display done


// // <!-- tilt js effect starts -->
// VanillaTilt.init(document.querySelectorAll(".tilt"), {
//   max: 15,
// });
// // <!-- tilt js effect ends -->


// // pre loader start
// // function loader() {
// //     document.querySelector('.loader-container').classList.add('fade-out');
// // }
// // function fadeOut() {
// //     setInterval(loader, 500);
// // }
// // window.onload = fadeOut;
// // pre loader end

// disable developer mode
document.onkeydown = function (e) {
  if (e.keyCode == 123) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
      return false;
  }
  if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
      return false;
  }
}

// Start of Tawk.to Live Chat
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/65dc645c8d261e1b5f656178/1hnieg3av';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();

// End of Tawk.to Live Chat


/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 1000,
  reset: true
});

/* SCROLL HOME */
srtop.reveal('.main .content h2', { delay: 200 });
srtop.reveal('.main .content p', { delay: 200 });
srtop.reveal('.main .content .btn', { delay: 200 });

srtop.reveal('.main .image', { delay: 400 });
srtop.reveal('.main .linkedin', { interval: 600 });
srtop.reveal('.main .github', { interval: 800 });
srtop.reveal('.main .twitter', { interval: 1000 });
srtop.reveal('.main .instagram', { interval: 600 });
srtop.reveal('.main .facebook', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 300 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box-container', { interval: 500 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 300 });
srtop.reveal('.experience .timeline .container', { interval: 300 });
srtop.reveal('.experience .morebtn',{delay: 300 });
/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 300 });
srtop.reveal('.contact .container .form-group', { delay: 300 });
