import { QUESTION, QUESTIONAMOUNT, QUESTIONOPTION, QUESTION2, QUESTION3, SINGLEOPTION, SINGLECART, SINGLEAMOUNT, SETOPTION, SETCART, SETAMOUNT, OPTION, ADDITIONALORDER, ORDERING, PLACE, PAY, SUBJECTNUM, CATEGORYNUM, NOQUESTION, BASIC, TEENAGER, DISABLED, OLDMAN, SEAT} from '/content/kiosk/common/js/utils/key.js';

const keyArr = [QUESTION, QUESTIONAMOUNT, QUESTIONOPTION, QUESTION2, QUESTION3, SINGLEOPTION, SINGLECART, SINGLEAMOUNT, SETOPTION, SETCART, SETAMOUNT, OPTION, ADDITIONALORDER, ORDERING, PLACE, PAY, NOQUESTION, BASIC, TEENAGER, DISABLED, OLDMAN, SEAT];

for(let i = 0; i < keyArr.length; i++){
  localStorage.removeItem(keyArr[i]);
}

// const a = document.querySelector(".fa-house");

// a.addEventListener("click", () => {
//   location.href = "/content/kiosk/common/html/main-category.html";
// })

// localStorage.setItem(CATEGORYNUM, 1);

// const nextBtn = document.querySelector(".next");
// const back = document.querySelector(".back");

// const subjectNum = localStorage.getItem(SUBJECTNUM);


// if(subjectNum < 9){
//   nextBtn .addEventListener("click", () => {
//   localStorage.setItem(SUBJECTNUM, Number(subjectNum) + 1);
//   location.href = "/content/kiosk/common/html/example/example.html";
//   })
// }

// back.addEventListener("click", () => {
//   location.href = "/content/kiosk/common/html/main-category.html";
// })