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
    <td><button class="del-button">XX</button></td>`;

    node.appendChild(row);
    addDelEvent();
  }
  // clear form
  static clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#desc").value = "";
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
  UI.clearForm();
}); // function을 실행시키면 error남

function addDelEvent() {
  // click (delete) event

  const delkey = document.querySelector("#content-list");
  console.log(delkey);
  if (delkey) {
    // 클릭 이벤트는 tbody 전체에 add해주고, 그중에서 target되는 node가 BUTTON인 놈일 때 특정 동작을 하도록 해주면 됨!
    delkey.addEventListener("click", function (e) {
      if (e.target.nodeName === "BUTTON") {
        e.target.parentNode.parentNode.remove();
      }
    });
  }
}
