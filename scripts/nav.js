// document.body.innerHTML =
//   document.body.innerHTML +
//   "<nav><aside class='kash-sidebar'><h2 class='kash-sidebar-heading'>Kashish Component Library</h2><ul><li class='kash-clickable'><i class='fa fa-user-circle'></i> Avatar</li><li class='kash-clickable'><i class='fa fa-exclamation-circle'></i> Alerts</li></ul></aside></nav>";

const nav = document.createElement("nav");
const aside = document.createElement("aside");
const h2 = document.createElement("h2");
const ul = document.createElement("ul");
const li = document.createElement("li");
const avatarIcon = document.createElement("i");
const avatarList = document.createElement("a");
nav.appendChild(aside);
aside.appendChild(h2);
aside.appendChild(ul);
aside.classList.add("kash-sidebar");
h2.classList.add("kash-sidebar-heading");
h2.innerText = "Kashish Component Library";
li.classList.add("kash-clickable");
ul.appendChild(li);
li.appendChild(avatarIcon);
li.appendChild(avatarList);
avatarList.innerHTML = "Avatar";
// li.innerHTML = li.innerHTML + "Avatar";
// li.appendChild();
// li.innerText = "Avatar";
avatarIcon.classList.add("fa");
avatarIcon.classList.add("fa-user-circle");

// li.appendChild(avatarIcon);
document.getElementById("kash-container").append(nav);
