function toggleDetails(btn) {
  const details = btn.nextElementSibling;

  if (details.style.display === "block") {
    details.style.display = "none";
    btn.innerText = "View More";
  } else {
    details.style.display = "block";
    btn.innerText = "View Less";
  }
}
