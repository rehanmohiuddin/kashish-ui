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
header_documentation_click.href = "/Components/Avatar";
header_documentation_click.style.textDecoration = "none";
header_documentation_click.style.color = "#000";
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
hamburgerIcon.classList.add("fa-bars", "nav-mobile-icon");
header.appendChild(hamburgerIcon);

const link = document.createElement("link");
const cssFile = document.createElement("link");
link.rel = "stylesheet";
cssFile.rel = "stylesheet";

link.href = "https://pro.fontawesome.com/releases/v5.10.0/css/all.css";
link.integrity =
  "sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p";
link.crossOrigin = "anonymous";
document.getElementsByTagName("head")[0].appendChild(link);

const names = [
  { name: "Avatar", iconName: "fa-user-circle", route: "/Avatar" },
  { name: "Alerts", iconName: "fa-exclamation-circle", route: "/Alerts" },
  { name: "Cards", iconName: "fa-id-card", route: "/Card" },
  { name: "Buttons", iconName: "fa-mouse-pointer", route: "/Button" },
  { name: "Badges", iconName: "fa-certificate", route: "/Badge" },
  { name: "Input", iconName: "fa-text-height", route: "/Input" },
  { name: "Images", iconName: "fa-file-image", route: "/Image" },
  { name: "Typography", iconName: "fa-text", route: "/Typography" },
  { name: "Modal", iconName: "fa-window-maximize", route: "/Modal" },
  { name: "Rating", iconName: "fa-star-half-alt", route: "/Rating" },
  { name: "Snackbar", iconName: "fa-bells", route: "/Snackbar" },
  { name: "Lists", iconName: "fa-list", route: "/List" },
  { name: "Navigation", iconName: "fa-bars", route: "/Navigation" },
  { name: "Simplified Grid", iconName: "fa-th", route: "/Grid" },
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
logo.src = "../../Resources/Flash=Dark.svg";
logoHeaderImage.src = "../../Resources/Flash=Dark.svg";
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
upperLi.onclick = () => (window.location.href = "/");
upperLi.classList.add("getting-started");

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
// aside.appendChild(ul);
aside.classList.add("kash-sidebar");

li.classList.add("kash-clickable");

const mobNav = document.createElement("div");
const _ul = document.createElement("ul");
const _li = document.createElement("li");
const _navBodyContainer = document.createElement("div");
mobNav.classList.add("kash-nav-mob");
const startIcon = document.createElement("i");
startIcon.classList.add("fa");
startIcon.classList.add("fa--book");
mobNav.appendChild(_ul);
_ul.appendChild(_li);
_ul.classList.add("nav-mob-list");
_li.classList.add("kash-flex");
_li.classList.add("kash-h5");
_li.classList.add("kash-gap");
_li.classList.add("kash-align-center");
_li.appendChild(gettingStartedIcon);
_li.innerHTML = _li.innerHTML + "Getting Started";
const __li = document.createElement("li");
__li.classList.add("kash-flex");
__li.classList.add("kash-h5");
__li.classList.add("kash-gap");
__li.classList.add("kash-align-center");
__li.classList.add("kash-between");
__li.classList.add("kash-mt-3");
const _div = document.createElement("div");
_div.appendChild(toggleIcon);
_div.innerHTML = _div.innerHTML + "Components";
_div.classList.add("kash-flex");
_div.classList.add("kash-align-center");
_div.classList.add("kash-gap");
__li.appendChild(_div);
const downIcon = document.createElement("i");
const leftIcon = document.createElement("i");
downIcon.classList.add("fa");
leftIcon.classList.add("fa");
downIcon.classList.add("fa-chevron-right");
leftIcon.classList.add("fa-chevron-left");
__li.appendChild(downIcon);
_ul.appendChild(__li);
const __ul = document.createElement("ul");
__ul.classList.add("kash-mx");
__ul.classList.add("kash-m");
__ul.classList.add("kash-flex");
__ul.classList.add("kash-flex-col");
__ul.classList.add("kash-gap-2");
__ul.style.display = "none";
__ul.id = "comp-list";

// __ul.classList.add("kash-align-center");
downIcon.onclick = () => {
  __ul.style.display = __ul.style.display === "flex" ? "none" : "flex";
  if (downIcon.classList.contains("fa-chevron-right")) {
    downIcon.classList.remove("fa-chevron-right");
    downIcon.classList.add("fa-chevron-down");
    setTimeout(() => {
      __ul.classList.add("comp");
    }, 100);
  } else {
    downIcon.classList.add("fa-chevron-right");
    downIcon.classList.remove("fa-chevron-down");
  }
};

names.forEach((_name) => {
  const li = document.createElement("li");
  const icon = document.createElement("i");
  const a = document.createElement("a");
  a.href = "http://" + window.location.host + "/Components" + _name.route;
  icon.classList.add("fa");
  icon.classList.add(_name.iconName);
  li.classList.add("kash-flex");
  li.classList.add("kash-h5");
  li.classList.add("kash-gap");
  li.classList.add("kash-align-center");
  li.appendChild(icon);
  li.appendChild(a);
  __ul.appendChild(li);
  a.innerHTML = a.innerHTML + _name.name;
  a.classList.add("kash-a-none");
});
_ul.appendChild(__ul);
nav.appendChild(mobNav);

hamburgerIcon.onclick = () => {
  mobNav.style.display = mobNav.style.display === "block" ? "none" : "block";
  setTimeout(() => {
    mobNav.classList.contains("nav-left")
      ? mobNav.classList.remove("nav-left")
      : mobNav.classList.add("nav-left");
  }, 100);
};
hamburgerIcon.id = "bar-btn";
mobNav.style.display = "none";

names.forEach((_name) => {
  const _li = document.createElement("li");
  const Icon = document.createElement("i");
  const a = document.createElement("a");
  ul.appendChild(_li);
  a.appendChild(Icon);
  a.href = "http://" + window.location.host + "/Components" + _name.route;
  _li.appendChild(a);
  Icon.classList.add("fa");
  Icon.classList.add(_name.iconName);
  a.innerHTML = a.innerHTML + _name.name;
});
_navBodyContainer.appendChild(ul);

aside.appendChild(_navBodyContainer);
document.getElementById("kash-container").append(header);
document.getElementById("kash-container").append(nav);

const clickExample = () => {
  alert("Example");
};
