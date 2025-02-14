import * as bootstrap from "bootstrap";
import "./index.scss";

document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.querySelector("#sidebarToggle");

  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", (event) => {
      event.preventDefault();
      document.body.classList.toggle("sb-sidenav-toggled");
      localStorage.setItem(
        "sb|sidebar-toggle",
        document.body.classList.contains("sb-sidenav-toggled")
      );
    });
  }
});
