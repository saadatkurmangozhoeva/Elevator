let upBtn = document.querySelector("#up");
let promptBtn = document.querySelector("#prompt");
let downBtn = document.querySelector("#down");
let elevator = document.querySelector(".elevator");

upBtn.addEventListener("click", () => {
  console.log(elevator.style.bottom);
  if (elevator.style.bottom === "") {
    elevator.style.bottom = "30px";
  } else if (elevator.style.bottom === "30px") {
    elevator.style.bottom = "60px";
  } else if (elevator.style.bottom === "60px") {
    elevator.style.bottom = "90px";
  } else if (elevator.style.bottom === "90px") {
    elevator.style.bottom = "120px";
  } else if (elevator.style.bottom === "150px") {
    elevator.style.bottom = "150px";
  }
});

downBtn.addEventListener("click", () => {
  console.log(elevator.style.bottom);
  if (elevator.style.bottom === "150px") {
    elevator.style.bottom = "120px";
  } else if (elevator.style.bottom === "120px") {
    elevator.style.bottom = "90px";
  } else if (elevator.style.bottom === "90px") {
    elevator.style.bottom = "60px";
  } else if (elevator.style.bottom === "60px") {
    elevator.style.bottom = "30px";
  } else if (elevator.style.bottom === "30px") {
    elevator.style.bottom = " 0px";
  }
});

promptBtn.addEventListener("click", () => {
  let floor = +prompt("Введите этаж");
  switch (floor) {
    case 1:
      elevator.style.bottom === "0px ";
      break;
    case 2:
      elevator.style.bottom = "30px ";
      break;
    case 3:
      elevator.style.bottom = "60px";
      break;
    case 4:
      elevator.style.bottom = "90px ";
      break;
    case 5:
      elevator.style.bottom = "120px ";
      break;
  }
});
