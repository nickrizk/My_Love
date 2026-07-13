const relationshipStartDate = "2026-04-01";

function updateDaysTogether() {
  const start = new Date(`${relationshipStartDate}T00:00:00`);
  const today = new Date();
  const millisecondsPerDay = 1000 * 60 * 60 * 24;
  const days = Math.max(0, Math.floor((today - start) / millisecondsPerDay));

  document.querySelector("#daysTogether").textContent = days.toLocaleString("pt-BR");
}

updateDaysTogether();
