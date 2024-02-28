let darkMode = false;

function changeDarkMode() {
  if (darkMode) {
    darkMode = false;
    document.documentElement.style.setProperty("--text-color", "black");
    document.documentElement.style.setProperty("--background-color", "#efe7e5");
    document.getElementById("dark-light-mode").innerHTML = "Dark mode";
  } else {
    darkMode = true;
    document.documentElement.style.setProperty("--text-color", "white");
    document.documentElement.style.setProperty("--background-color", "black");
    document.getElementById("dark-light-mode").innerHTML = "Light mode";
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const projects = document.querySelectorAll('.project');

  // Gestion des événements de survol pour les liens
  const links = document.querySelectorAll('nav a, .links a');
  links.forEach(link => {
    link.addEventListener('mouseover', () => {
      link.style.color = darkMode ? "#95a5a6" : "#34495e";
    });
    link.addEventListener('mouseout', () => {
      link.style.color = darkMode ? "white" : "var(--primary-color)";
    });
  });

  // Fermeture des descriptions des projets en cliquant en dehors d'elles
  document.addEventListener('click', (event) => {
    if (!event.target.closest('.project')) {
      projects.forEach(project => {
        project.classList.remove('active');
      });
    }
  });

  projects.forEach(project => {
    project.addEventListener('click', () => {
      project.classList.toggle('active');
      projects.forEach(otherProject => {
        if (otherProject !== project && otherProject.classList.contains('active')) {
          otherProject.classList.remove('active');
        }
      });
    });
  });
});
