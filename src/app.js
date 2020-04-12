var logo = (document.getElementById("home-logo").style.textTransform =
  "uppercase");

// content list class
class Content {
  constructor(title, desc) {
    this.title = title;
    this.desc = desc;
  }
}

//UI class
class UI {
  static createfunc(content) {
    var node = document.querySelector("tbody");
    var row = document.createElement("tr");

    row.innerHTML += `
    <td>${content.title}</td>
    <td>${content.desc}</td>
    <td>2020</td>
    <td><button>X</button></td>`;

    node.appendChild(row);
  }
}
// submit event
const form = document.getElementById("myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //get form data
  const title = document.querySelector("#title").value;
  const desc = document.querySelector("#desc").value;

  // new book initiate
  const content = new Content(title, desc);
  // createfunc method call
  UI.createfunc(content);
}); // function을 실행시키면 error남
