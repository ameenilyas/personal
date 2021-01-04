const porjectDetail = [
  {
    project: "Hulu",
    text: "Hulu is the Streaming Service Website for Movies.",
    mainImage: "https://thisis.hulu.com/img/img-logo-green.png",
    subImage:
      "https://www.nerdsandbeyond.com/wp-content/uploads/2020/08/hulu.png",
    url: "https://hulu-clone-ee19d.web.app/",
  },
  {
    project: "Netflix",
    text: "Netflix is the Streaming Service Website for movies.",
    mainImage:
      "https://yt3.ggpht.com/ytc/AAUvwngDBuChyi5LOiP4Od1GOqyczL6Sx9I-Ujk6rCP0Sg=s900-c-k-c0x00ffffff-no-rj",
    subImage: "https://variety.com/wp-content/uploads/2020/05/netflix-logo.png",
    url: "https://netflix-clone-a5187.web.app/",
  },
  {
    project: "Covid Tracker",
    text: "This Covid Tracker Gives You real Time Data..",
    mainImage:
      "https://media.istockphoto.com/vectors/coronavirus-sign-caution-corona-virus-icon-logo-coronavirus-outbreak-vector-id1216346524?k=6&m=1216346524&s=170667a&w=0&h=u6WWDxlbFl5otFzCi1USEDkTY5zcdMYo-OgbH_bOEFc=",
    subImage:
      "https://media.istockphoto.com/vectors/letter-c-corona-viruses-logo-design-template-vector-id1214386033?k=6&m=1214386033&s=170667a&w=0&h=-b2Gm91E8v9JPsXTqv2ZcZ6ukh1GQFsYiyAHJuK3i3M=",
    url: "https://covid-tracker-2327c.web.app/",
  },
  {
    project: "Airbnb",
    text: "Airbnb in an online marketplace for getting rooms on rent..",
    mainImage: "https://www.fastgrowthbrands.com/files/2019/10/airbnb.jpg",
    subImage:
      "https://ouwa.org/wp-content/uploads/2020/11/Airbnbs-IPO-filing-shows-its-navigating-the-pandemic-better-than-travel-industry-peers.jpg",
    url: "https://airbnb-3a248.web.app/",
  },
  {
    project: "Twitter",
    text: "Twitter is a Social site Where You can Share Your Thoughts.",
    mainImage:
      "https://media.socastsrm.com/wordpress/wp-content/blogs.dir/2162/files/2020/05/twittter.png",
    subImage:
      "https://www.trussvilletribune.com/wp-content/uploads/2017/11/twit.jpg",
    url: "https://twiter-clone-189ee.web.app/",
  },
  {
    project: "Google ",
    text:
      "it is a Google Search Page Which Gives you the real search experience..",
    mainImage: "https://blog.hubspot.com/hubfs/image8-2.jpg",
    subImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSszvCIWRgJ9a_BliVFDGMNvYzBVIioVTo42Q&usqp=CAU",
    url: "https://clone-6609a.web.app/",
  },
  {
    project: "Art Gallery ",
    text: "The E-Commerce Art Gallery Collection of images ..",
    mainImage:
      "https://i.pinimg.com/originals/a2/21/84/a2218443b27823d024a03fc1b61a9832.jpg",
    subImage:
      "https://img.freepik.com/free-vector/tourists-looking-paintings-art-gallery-illustration_1262-18981.jpg?size=626&ext=jpg",
    url: "https://z-plan-7fa5e.web.app/",
  },
];

const carousel = document.querySelector(".carousel");

function section(detail) {
  let section = detail.map(
    ({ project, mainImage, subImage, url, text }) =>
      `
    <div class="card-container ${project.toLowerCase()}">
    <img class="card-container-img" src=${mainImage} alt="">
    <div class="card">
    <div class="box">
    <img src=${subImage} alt="">
    <div class="text">${project}</div>
    <a href=${url} target="blank">${text} </a>
    </div>
    </div>
    </div>
    `
  );
  console.log(section);
  section = section.join("");
  console.log(section);
  carousel.innerHTML = section;
}

section(porjectDetail);

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
  });

  //toggle menu/navbar script

  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing animation script
  var typed = new Typed(".typing", {
    strings: ["Web Developer", "Web Designer", "MERN Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed(".typing-2", {
    strings: ["Web Developer", "Web Designer", "MERN Stack Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
