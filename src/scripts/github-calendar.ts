import GitHubCalendar from "github-calendar";

document.addEventListener("DOMContentLoaded", () => {
  GitHubCalendar("#github-calendar", "ahillahaffat", { 
    responsive: true,
    tooltips: true,
    summary_text: ' contributions in the last year',
    global_stats: true,
  });
});