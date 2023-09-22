// import "./style.css";
// // import javascriptLogo from "./javascript.svg";
// // import viteLogo from "/vite.svg";
// // import { setupCounter } from "./counter.js";

// // document.querySelector("#app").innerHTML = `
// //   <div>
// //     <a href="https://vitejs.dev" target="_blank">
// //       <img src="${viteLogo}" class="logo" alt="Vite logo" />
// //     </a>
// //     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
// //       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
// //     </a>
// //     <h1>Hello AUBIN</h1>
// //     <div class="card">
// //       <button id="counter" type="button"></button>
// //     </div>
// //     <p class="read-the-docs">
// //       Click on the Vite logo to learn more
// //     </p>
// //   </div>
// // `;

// // setupCounter(document.querySelector("#counter"));

// const app = document.querySelector("#app");

// console.log("app");

// // creation de changement de couleur via un tableau js
// // setTimeout(() => {
// //   app.style.background = "red";
// // }, 1000);

// // const colors = ["green", "red", "yellow"];

// // let i = 0;
// // setInterval(() => {
// //   app.style.background = colors[i];
// //   i++;
// //   if (i > colors.length - 1) {
// //     i = 0;
// //   }
// // }, 1000);

// const firsChild = app.firstElementChild;

// firsChild.style.background = "red";

// import "./style.css";
// import { Questions } from "./questions";

// const app = document.querySelector("#app");

// //❌deconseille
// // app.innerHTML = "<h1>Salut</h1>";

// // //✅ conseille
// // const div = document.createElement("div");
// // const title = document.createElement("h1");
// // title.innerText = "Aubin !";
// // div.appendChild(title);
// // const input = document.createElement("input");
// // div.appendChild(input);
// // app.appendChild(div);

// // setInterval(() => {
// //   //   input.value += "🤣 ";
// // }, 1000);
// const startButton = document.querySelector("#start");

// startButton.addEventListener("click", startQuiz);

// app.addEventListener("click", (e) => {
//   console.log("App", e);
// });

// function startQuiz(event) {
//   let currentQuestion = 0;
//   let score = 0;

//   displayQuestion(currentQuestion);

//   function displayQuestion(index) {
//     const question = Questions[index];

//     if (!question) {
//       //finish question
//     }

//     const title = getTitleElement(question.question);
//     app.appendChild(title);
//     const answersDiv = createAnswers(question.answers);
//     app.appendChild(answersDiv);

//     const subtmitButton = getSubmitButton();

//     subtmitButton.addEventListener("click", submit);

//     app.appendChild(subtmitButton);

//     function clean() {
//       while (app.firstElementChild) {
//         app.firstElementChild.remove();
//       }
//     }
//   }

//   function submit() {
//     const selectedAnswer = app.querySelector("input[name='answer']:checked");
//   }

//   function createAnswers(answers) {
//     const answersDiv = document.createElement("div");

//     answersDiv.classList.add("answers");

//     for (const answer of answers) {
//       const label = getAnswerElement(answer);
//       answersDiv.appendChild(label);
//       //   const answersDiv = document.createElement("div");
//     }
//     return answersDiv;
//   }
// }

// function getTitleElement(text) {
//   const title = document.createElement("h3");
//   title.innerText = text;

//   return title;
// }

// function getAnswerElement(text) {
//   const label = document.createElement("label");
//   label.innerText = text;
//   const input = document.createElement("input");
//   const id = text.replaceAll("", "-").toLowercase();
//   input.id = id;
//   label.htmlFor = id;
//   input.setAttribute("type", "radio");
//   input.setAttribute("name", "text");
//   input.setAttribute("value", "text");

//   label.appendChild(input);

//   return label;
// }

// // app.insertBefore(p, startButton);

// // const COLORS = ["red", "blue", "yellow"];
// // let i = 0;

// // startButton.addEventListener("click", () => {
// //   const question =
// //     document.querySelector("#question") ?? document.createElement("p");
// //   question.id = "question";
// //   question.innerText = Questions[i].question;
// //   app.insertBefore(question, startButton);

// //   i++;

// //   if (i > Questions.length - 1) {
// //     question.remove();
// //     i = 0;
// //   }

// //   p.innerText = "❌✅ C'est parti !";
// //   p.id = "go";
// // });

// function getSubmitButton() {
//   const subtmitButton = document.querySelector("button");
//   subtmitButton.innerText = "submit";
// }

// fichier inutile

function feed() {
  alert("fichier inutile");
}
