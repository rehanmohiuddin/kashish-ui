const nav = document.createElement("nav");
const aside = document.createElement("aside");
const h2 = document.createElement("h2");
const ul = document.createElement("ul");
const li = document.createElement("li");
const upperUl = document.createElement("ul");
const upperLi = document.createElement("li");
const avatarIcon = document.createElement("i");
const gettingStartedIcon = document.createElement("i");
const toggleIcon = document.createElement("i");
const downArrowIcon = document.createElement("i");
const hamburgerIcon = document.createElement("i");

const header = document.createElement("header");
header.classList.add("kash-header");
const headerDiv = document.createElement("div");
const searchIcon = document.createElement("i");
const searchInput = document.createElement("input");
const header_documentation_click = document.createElement("a");
header_documentation_click.innerHTML = "Documentation";
searchIcon.classList.add("fa");
searchIcon.classList.add("fa-search");
searchInput.placeholder = "Search Component";
headerDiv.appendChild(searchIcon);
headerDiv.appendChild(searchInput);
header.appendChild(headerDiv);
headerDiv.classList.add("kash-input-container");
header.appendChild(headerDiv);
header.appendChild(header_documentation_click);
hamburgerIcon.classList.add("fa");
hamburgerIcon.classList.add("fa-bars");
header.appendChild(hamburgerIcon);

const names = [
  { name: "Avatar", iconName: "fa-user-circle", route: "/Avatar" },
  { name: "Alerts", iconName: "fa-exclamation-circle", route: "/Alerts" },
  { name: "Cards", iconName: "fa-id-card", route: "/Card" },
  { name: "Buttons", iconName: "fa-mouse-pointer", route: "/Button" },
  { name: "Badges", iconName: "fa-certificate", route: "/Badge" },
];

const avatarList = document.createElement("a");
const btn = document.createElement("button");
const logoDiv = document.createElement("div");
const logoHeaderDiv = document.createElement("div");
const logoHeaderImage = document.createElement("img");
const logo = document.createElement("img");
const h3 = document.createElement("h3");
const span = document.createElement("span");

logoDiv.classList.add("kash-logo-container");
logoHeaderDiv.classList.add("kash-logo-container");
logo.src = "../Resources/Flash=Dark.svg";
logoHeaderImage.src = "../Resources/Flash=Dark.svg";
logo.classList.add("kash-logo");
logoHeaderImage.classList.add("kash-logo");
logoDiv.appendChild(logo);
logoHeaderDiv.appendChild(logoHeaderImage);
aside.appendChild(logoDiv);
header.appendChild(logoHeaderDiv);
aside.appendChild(upperUl);
upperUl.appendChild(upperLi);
upperLi.classList.add("kash-clickable");
upperLi.appendChild(h3);
gettingStartedIcon.classList.add("fa");
gettingStartedIcon.classList.add("fa-book");
h3.appendChild(gettingStartedIcon);
h3.innerHTML = h3.innerHTML + " Getting Started";

btn.classList.add("kash-components-list");
btn.appendChild(span);

toggleIcon.classList.add("fa");
toggleIcon.classList.add("fa-toggle-on");
span.appendChild(toggleIcon);
span.innerHTML = span.innerHTML + " Components";
btn.appendChild(span);
downArrowIcon.classList.add("fa");
downArrowIcon.classList.add("fa-chevron-down");
btn.appendChild(downArrowIcon);
aside.appendChild(btn);
nav.appendChild(aside);
aside.appendChild(ul);
aside.classList.add("kash-sidebar");

li.classList.add("kash-clickable");

names.forEach((_name) => {
  const _li = document.createElement("li");
  const Icon = document.createElement("i");
  const a = document.createElement("a");
  ul.appendChild(_li);
  a.appendChild(Icon);
  a.href = "http://" + window.location.host + _name.route;
  _li.appendChild(a);
  Icon.classList.add("fa");
  Icon.classList.add(_name.iconName);
  a.innerHTML = a.innerHTML + _name.name;
});

document.getElementById("kash-container").append(header);
document.getElementById("kash-container").append(nav);

const clickExample = () => {
  alert("Example");
};
