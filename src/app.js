var logo = (document.getElementById("home-logo").style.textTransform =
  "uppercase");

// content list class

//Global variable
let state = "read";
let currentRow = "null";
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
    <td class="title">${content.title}</td>
    <td class="desc">${content.desc}</td>
    <td>2020</td>
    <td><button class="del-button">X</button></td>
    <td><button class="update-btn">UPDATE</button></td>`;

    node.appendChild(row);
    addDelEvent();
  }
  // clear form
  static clearForm() {
    document.querySelector("#title").value = "";
    document.querySelector("#desc").value = "";
  }
  // update form
  static updateForm(target) {
    // // create update button
    // let btn = document.createElement("button");
    // btn.textContent = "UPDATE";
    // document.querySelector("#myform").appendChild(btn);

    // get data from list to form
    let row = target.parentNode.parentNode; // <tr>
    let title = row.querySelector(".title").textContent; // textContent is faster than innerHTML
    let desc = row.querySelector(".desc").textContent;
    document.querySelector("#title").value = title;
    document.querySelector("#desc").value = desc;

    state = "update";
    console.log("now state:" + state);
    currentRow = row;
    const updateContent = new Content(title, desc);
    console.log(updateContent);
  }
}
// submit event shortcut

// submit event
const form = document.getElementById("myform");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let title = document.querySelector("#title").value;
  let desc = document.querySelector("#desc").value;
  if (title === "" || desc === "") {
    alert("make your form!");
  } else {
    if (state == "read") {
      //get form data
      const title = document.querySelector("#title").value;
      const desc = document.querySelector("#desc").value;
      // new book initiate
      const content = new Content(title, desc);
      // createfunc method call
      UI.createfunc(content);
      UI.clearForm();
    }

    // changed data will be updated by sumbit action
    if (state == "update") {
      // get data from form

      currentRow.innerHTML = `
    <td class="title">${title}</td>
    <td class="desc">${desc}</td>
    <td>2020</td>
    <td><button class="del-button">X</button></td>
    <td><button class="update-btn">UPDATE</button></td>`;
      //set state as read
      state = "read";
      UI.clearForm();
    }
  }
}); // function을 실행시키면 error남

function addDelEvent() {
  // click (delete) event

  const delkey = document.querySelector("#content-list");
  console.log(delkey);
  if (delkey) {
    // 클릭 이벤트는 tbody 전체에 add해주고, 그중에서 target되는 node가 BUTTON인 놈일 때 특정 동작을 하도록 해주면 됨!
    delkey.addEventListener("click", function (e) {
      if (e.target.className === "del-button") {
        e.target.parentNode.parentNode.remove();
      } else if (e.target.className === "update-btn") {
        UI.updateForm(e.target);
      }
    });
  }
}
