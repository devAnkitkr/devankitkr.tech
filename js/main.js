$(window).on("load", function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_avb7shg", "template_syhwxtl", this).then(
        function () {
          console.log("SUCCESS!");
          $(".modal").css("bottom", "0px");
          $("#contact-form").trigger("reset");
          function myFunction() {
            setInterval(function () {
              $(".modal").css("bottom", "-80px");
            }, 3000);
          }
          myFunction();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });

  document
    .getElementById("getQuote-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      this.contact_number.value = (Math.random() * 100000) | 0;
      emailjs.sendForm("service_avb7shg", "template_syhwxtl", this).then(
        function () {
          const getQuoteForm = document.getElementsByClassName(
            "get-quote-form"
          );
          getQuoteForm[0].style.display = "none";
          const getBody = document.getElementsByTagName("BODY");
          getBody[0].style.overflowY = "scroll";
          $(".modal").css("bottom", "0px");
          $("#getQuote-form").trigger("reset");
          function myFunction() {
            setInterval(function () {
              $(".modal").css("bottom", "-80px");
            }, 3000);
          }
          myFunction();
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });

  function isElementInViewport(el) {
    // Special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight ||
          document.documentElement.clientHeight) /* or $(window).height() */ &&
      rect.right <=
        (window.innerWidth ||
          document.documentElement.clientWidth) /* or $(window).width() */
    );
  }

  $(window).scroll(function () {
    var scrollPercent = (100 * $(window).scrollTop()) / $(window).height();

    $(".bar-long").css("width", scrollPercent + "%");
    var finalScrollPosition = (100 * scrollPercent) / 360;
    // console.log(finalScrollPosition);
    $(".line-span").css("top", finalScrollPosition + "%");
  });
  // var flag = false;
  console.log(isElementInViewport($(".wrapper")));
  var flag = true;
  $(window).scroll(() => {
    if (flag == true) {
      if (isElementInViewport($(".wrapper"))) {
        $(".circle").circleProgress({
          value: 0.75,
          size: 150,
          fill: {
            color: "#ff5a5f",
          },
          animation: { duration: 500 },
        });
        $(".circle1").circleProgress({
          value: 0.75,
          size: 150,
          fill: {
            color: "#ff5a5f",
          },
          animation: { duration: 500 },
        });
        $(".circle").circleProgress({ value: 0.7 });
        $(".circle1").circleProgress({ value: 0.9 });

        // Line progress bar
        document.getElementById("progress90").style.animation =
          "ninty 2s forwards";
        document.getElementById("progress95").style.animation =
          "nintyfive 2s forwards";
        document.getElementById("progress65").style.animation =
          "sixtyfive 2s forwards";
        document.getElementById("progress75").style.animation =
          "seventyfive 2s forwards";

        flag = false;
      }
    }
  });
});

const setGetQuoteForm = (serviceId) => {
  const getQuoteForm = document.getElementsByClassName("get-quote-form");
  const subject = document.getElementById("subject");
  subject.value = `${serviceId} - Devankitkr.tech`;
  console.log("subject.value", subject.value);
  getQuoteForm[0].style.display = "flex";
  const getBody = document.getElementsByTagName("BODY");
  getBody[0].style.overflow = "hidden";
};

const getQuoteButton = (i) => {
  if (i == "1") {
    setGetQuoteForm("Basic website");
  } else if (i == "2") {
    setGetQuoteForm("Advance website");
  } else {
    setGetQuoteForm("Ecommerce website");
  }
};

const closeGetQuote = () => {
  const getQuoteForm = document.getElementsByClassName("get-quote-form");
  $("#get-quote-form").trigger("reset");
  getQuoteForm[0].style.display = "none";
  const getBody = document.getElementsByTagName("BODY");
  getBody[0].style.overflowY = "scroll";
};
