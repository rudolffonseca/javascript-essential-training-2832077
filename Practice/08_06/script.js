/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function changeDOM(message) {
  const htmlTag = document.createElement("h1");
  htmlTag.style.color = "gray";
  htmlTag.innerHTML = message;
  let mainTag = document.querySelector("main");
  mainTag.append(htmlTag);
}

changeDOM("Titulo");

const testeFunction = function () {
  const htmlTag = document.createElement("p");
  htmlTag.innerHTML = "description of Titulo";
  let mainTag = document.querySelector("main");
  mainTag.appendChild(htmlTag);
};

testeFunction();
