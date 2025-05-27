// Creating new paragraph element
const greeting = document.createElement("p");

// Getting current hour
const currentHour = new Date().getHours();

// Determining correct greeting
if (currentHour < 12) {
  greeting.textContent = "Good morning! I hope you have a great day!";
} else if (currentHour < 18) {
  greeting.textContent = "Good afternoon! I hope your day has been going well so far!";
} else {
  greeting.textContent = "Good evening! I hope you had a great day!";
}

// Selecting sections
const aboutSection = document.getElementById("about");
const projectsSection = document.getElementById("projects");

// Inserting new paragraph at the end of About
aboutSection.parentNode.insertBefore(greeting, projectsSection);