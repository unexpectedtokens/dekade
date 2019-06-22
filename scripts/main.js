const navItems = document.getElementsByClassName("scroll");
const hamburger = document.getElementsByClassName("hamburger")[0];
const ul = document.getElementsByClassName("navul")[0];
document.querySelector("h3").addEventListener("click", () => {
  document.querySelector("header").scrollIntoView({ behavior: "smooth" });
});
for (let i = 0; i < navItems.length; i++) {
  navItems[i].addEventListener("click", e => {
    scrollElIntoView(e.target.getAttribute("data-scrollto"));
  });
}
document.querySelector(".overlay").addEventListener("click", e => {
  showOverlay();
  ul.classList.toggle("closed");
});
document.querySelector(".backtotop").addEventListener("click", e => {
  if (window.pageYOffset > window.innerHeight) {
    document.querySelector("header").scrollIntoView({ behavior: "smooth" });
  }
});
const showOverlay = () => {
  const overlay = document.querySelector(".overlay");
  if (window.innerWidth < 815) {
    if (!overlay.classList.contains("showoverlay")) {
      overlay.style.display = "block";
      setTimeout(() => {
        overlay.classList.add("showoverlay");
      }, 50);
    } else {
      overlay.classList.remove("showoverlay");
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300);
    }
  }
};
hamburger.addEventListener("click", () => {
  showOverlay();
  ul.classList.toggle("closed");
});
const scrollElIntoView = element => {
  if (window.innerWidth < 721) {
    ul.classList.toggle("closed");
  }
  document
    .getElementsByClassName(element)[0]
    .scrollIntoView({ behavior: "smooth" });
  showOverlay();
};
// var userLang = navigator.language || navigator.userLanguage;
// alert("The language is: " + userLang);
let scrolling = false;

addEventListener("scroll", () => (scrolling = true));

setInterval(() => {
  if (scrolling) {
    if (window.pageYOffset > 100 && window.innerWidth > 800) {
      document.querySelector("nav").classList.add("stick");
    } else {
      document.querySelector("nav").classList.remove("stick");
    }
    if (window.pageYOffset > window.innerHeight) {
      document.querySelector(".backtotop").classList.add("showbacktotop");
    } else {
      document.querySelector(".backtotop").classList.remove("showbacktotop");
    }
  }
}, 250);

//Slideshow
let selector = 0;
const updateImage = image => {
  document.querySelector(".slideshow").style.background = `url(${image})`;
  for (
    let i = 0;
    i < document.getElementsByClassName("slideshowtracker").length;
    i++
  ) {
    document
      .getElementsByClassName("slideshowtracker")
      [i].classList.remove("active");
  }
  document
    .getElementsByClassName("slideshowtracker")
    [selector].classList.add("active");
};
const imgArr = ["../media/maps.png", "../media/planten_bg.jpg"];
updateImage(imgArr[selector]);
document.querySelector(".forward").addEventListener("click", e => {
  if (selector < imgArr.length - 1) {
    selector++;
    updateImage(imgArr[selector]);
  }
});
document.querySelector(".back").addEventListener("click", e => {
  if (selector >= 1) {
    selector--;
    updateImage(imgArr[selector]);
  }
});
for (
  let i = 0;
  i < document.getElementsByClassName("slideshowtracker").length;
  i++
) {
  document
    .getElementsByClassName("slideshowtracker")
    [i].addEventListener("click", e => {
      const index = parseInt(e.target.getAttribute("data-index"));
      selector = index;
      updateImage(imgArr[selector]);
    });
}
