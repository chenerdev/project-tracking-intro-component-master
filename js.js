const openbtn = document.querySelector(".mobilepopupopen"),
  closebtn = document.querySelector(".mobilepopupclose"),
  theList = document.querySelector(".mobilepopup");

openbtn.addEventListener("click", () => {
  theList.classList.add("popon");

  openbtn.classList.add("openmoves");

  openbtn.addEventListener("transitionend", () => {
    openbtn.style.display = `none`;
    closebtn.style.display = `block`;
  });

  closebtn.classList.remove("closemove");

  console.log("jj");
});

closebtn.addEventListener("click", () => {
  theList.classList.remove("popon");

  closebtn.classList.add("closemove");

  closebtn.addEventListener("transitionend", () => {
    closebtn.style.display = `none`;
    openbtn.style.display = `block`;
  });

  openbtn.classList.remove("openmoves");
});
