// handler for Nav & DownScroll
const scrollToSection = (sectionID) => {
  const elem = document.getElementById(sectionID);

  if (elem) {
    elem.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  }
};

export default scrollToSection;