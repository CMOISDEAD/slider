document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", (event) => {
    const { key: name } = event;
    if (name === "ArrowDown" || name == "ArrowRight" || name == "j") {
      event.preventDefault();
      scrollToNextSection();
    } else if (name === "ArrowUp" || name == "ArrowLeft" || name == "k") {
      event.preventDefault();
      scrollToPreviousSection();
    } else if (name == "g") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (name == "G") {
      // move this to a function ?
      const lastChild = document.querySelector(".slider").lastElementChild;
      const currentSection = document.querySelector(".active-section");
      currentSection.classList.remove("active-section");
      lastChild.classList.add("active-section");
      window.scrollTo({
        top: lastChild.offsetTop,
        behavior: "smooth",
      });
    } else if (name == "F11") {
      // this doesn't work as expected, because is not trigger when event is out
      refreshViewport();
    }
  });

  document.addEventListener("fullscreenchange", () => {
    refreshViewport();
  });

  const refreshViewport = () => {
    const currentSection = document.querySelector(".active-section");
    window.scrollTo({
      top: currentSection.offsetTop,
      behavior: "smooth",
    });
  };

  // change the current section to another
  const changeSection = (prevSection, nextSection) => {
    prevSection.classList.remove("active-section");
    nextSection.classList.add("active-section");
    window.scrollTo({
      top: nextSection.offsetTop,
      behavior: "smooth",
    });
  };

  // scroll to the next section
  const scrollToNextSection = () => {
    const currentSection = document.querySelector(".active-section");
    const nextSection = currentSection.nextElementSibling;

    if (nextSection !== null) {
      changeSection(currentSection, nextSection);
    }
  };

  // scroll to the previous section
  const scrollToPreviousSection = () => {
    const currentSection = document.querySelector(".active-section");
    const previousSection = currentSection.previousElementSibling;

    if (previousSection !== null) {
      changeSection(currentSection, previousSection);
    }
  };
});
