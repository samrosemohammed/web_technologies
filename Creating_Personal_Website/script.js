// console.log("Hello world!");

// const myName = "Mohammed Samrose";
// const h1 = document.querySelector(".heading-primary");
// console.log(myName);
// console.log(h1);

// h1.addEventListener("click", function () {
//   h1.textContent = myName;
//   h1.style.backgroundColor = "red";
//   h1.style.padding = "5rem";
// });

///////////////////////////////////////////////////////////
// Set current year
// const yearEl = document.querySelector(".year");
// const currentYear = new Date().getFullYear();
// yearEl.textContent = currentYear;

///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile naviagtion
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

///////////////////////////////////////////////////////////
// Sticky navigation

const sectionHeroEl = document.querySelector(".first-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// for button click that open my mail
const hireBtn = document.querySelector(".btn--hire");
const chatBtn = document.querySelector(".btn--chat");
const hireMe = document.querySelector(".btn--hireMe");
const resumeBtn = document.querySelector(".btn--contact");

resumeBtn.addEventListener("click", function () {
  // Create a link element
  var link = document.createElement("a");
  link.href = "resume.pdf"; // Replace with the actual path to your resume file
  link.download = "resume.pdf"; // Set the desired file name

  // Append the link to the document body
  document.body.appendChild(link);

  // Simulate a click on the link to trigger the download
  link.click();

  // Remove the link from the document body (optional)
  document.body.removeChild(link);
});

hireBtn.addEventListener("click", () => {
  const emailAddress = "samrose.mohammed@gmail.com";

  const mailtoLink = `mailto:${emailAddress}`;

  window.location.href = mailtoLink;
});

chatBtn.addEventListener("click", () => {
  window.open("https://www.instagram.com/bekey_9/");
});

hireMe.addEventListener("click", () => {
  const emailAddress = "samrose.mohammed@gmail.com";

  const mailtoLink = `mailto:${emailAddress}`;

  window.location.href = mailtoLink;
});

// for social link
const linkInsta = document.querySelector(".link-insta");
linkInsta.addEventListener("click", function () {
  window.open("https://www.instagram.com/bekey_9/", "_blank");
});

const linkFB = document.querySelector(".link-fb");
linkFB.addEventListener("click", function () {
  window.open(
    "https://www.facebook.com/profile.php?id=100069831617699",
    "_blank"
  );
});

const linkLDIN = document.querySelector(".link-ln");
linkLDIN.addEventListener("click", function () {
  window.open(
    "https://www.linkedin.com/in/mohammed-samrose-64b14525a/",
    "_blank"
  );
});

// FOOTER MAIL AND NUMBER
const footerLinks = document.querySelectorAll(".footer-link");

footerLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const linkHref = link.getAttribute("href");
    if (linkHref.startsWith("tel:")) {
      window.location.href = linkHref;
    } else if (linkHref.startsWith("mailto:")) {
      window.location.href = linkHref;
    }
  });
});

// when the portfolio footer is clicked
const portfolioHeading = document.getElementById("portfolio-heading");

portfolioHeading.onclick = function () {
  location.href = "#home";
};

/* Download pdf */

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
