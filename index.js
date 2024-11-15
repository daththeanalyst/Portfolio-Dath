import {
  bio,
  skills,
  projects,
  education,
  experience,
  certifications,
  footer,
} from "./data.js";

// Ensure `projects` contains `webProjects`
const { webProjects } = projects;

/**
 * Populates bio to the HTML page.
 * @param {Array} items - An array of bio strings.
 * @param {string} id - The target HTML element ID.
 */
function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  if (!bioTag) return;
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

/**
 * Populates skills to the HTML page.
 * @param {Array} items - An array of skill objects.
 * @param {string} id - The target HTML element ID.
 */
function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  if (!skillsTag) return;
  items.forEach(({ skillName, color, percentage }) => {
    const h3 = getElement("h3", null);
    h3.innerHTML = skillName;

    const divProgress = getElement("div", "progress");
    const divProgressBar = getElement("div", `progress-bar color-${color}`);
    divProgressBar.style = `width: ${percentage}%`;
    divProgress.append(divProgressBar);

    const divProgressWrap = getElement("div", "progress-wrap");
    divProgressWrap.append(h3, divProgress);

    const divAnimateBox = getElement("div", "col-md-6 animate-box");
    divAnimateBox.append(divProgressWrap);

    skillsTag.append(divAnimateBox);
  });
}

/**
 * Populates certifications to the HTML page.
 * @param {Array} items - An array of certification objects.
 * @param {string} id - The target HTML element ID.
 */
function populateCertifications(items, id) {
  const certificationsTag = document.getElementById(id);
  if (!certificationsTag || !items || items.length === 0) return;

  items.forEach(({ title, link }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank"; // Open link in a new tab
    a.textContent = title;
    li.appendChild(a);
    certificationsTag.appendChild(li);
  });
}

/**
 * Populates projects to the HTML page.
 * @param {Array} items - An array of project objects.
 * @param {string} id - The target HTML element ID.
 */
function populateProjects(items, id) {
  const projectDesign = document.getElementById(id);
  if (!projectDesign) return;

  items.forEach(({ projectName, preview, image, summary, techStack }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = preview;
    a.target = "_blank"; // Open in new tab
    a.innerHTML = `
      <div class="project-card">
        <img src="${image}" class="img-fluid" alt="${projectName}">
        <h4 class="project-heading">${projectName}</h4>
        <p class="project-description">${summary}</p>
        <div class="tech-stack">${techStack.map(
          (tech) => `<span class="badge badge-secondary">${tech}</span>`
        ).join("")}</div>
      </div>
    `;
    li.appendChild(a);
    projectDesign.appendChild(li);
  });
}

/**
 * Helper function to create an HTML element with a class name.
 * @param {string} tagName - The name of the HTML element.
 * @param {string} className - The class name of the element.
 * @returns {HTMLElement} The created element.
 */
function getElement(tagName, className) {
  const item = document.createElement(tagName);
  if (className) item.className = className;
  return item;
}

// Populate the webpage content
populateBio(bio, "bio");
populateSkills(skills, "skills");
populateCertifications(certifications, "certifications");
populateProjects(webProjects, "web-projects");
populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");
populateLinks(footer, "footer");
