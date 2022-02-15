["1", "2", "3"].forEach((_id) => {
  const openBtn_1 = document.getElementById("kash-snackbar-open-btn-" + _id);
  const _snackbar = document.getElementById("kash-snackbar-" + _id);
  openBtn_1.onclick = () => {
    _snackbar.style.display =
      _snackbar.style.display === "none" ? "flex" : "none";
  };
  const closeBtn = document.getElementById("kash-snackbar-close-btn-" + _id);
  closeBtn.onclick = () => (_snackbar.style.display = "none");
});
