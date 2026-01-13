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
const { webProjects, softwareProjects } = projects;

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
  if (!Array.isArray(items)) {
    console.error("Certifications data is not an array:", items);
    return;
  }

  const certificationsTag = document.getElementById(id);
  items.forEach(({ title, link }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank"; // Opens link in a new tab
    a.textContent = title;

    // Change text color dynamically
    a.style.color = "black"; // Set the desired color here
    a.style.textDecoration = "none"; // Optional: Removes underline if needed

    li.appendChild(a);
    certificationsTag.appendChild(li);
  });
}


/**
 * Populates a unified grid of projects to the HTML page.
 * @param {Array} items - An array of project objects from data.js
 * @param {string} id - The ID of the container (e.g., "unified-projects-grid")
 */
function populateProjects(items, id) {
  const projectContainer = document.getElementById(id);
  if (!projectContainer) return;

  // Clear existing content in case of re-render
  projectContainer.innerHTML = "";

  items.forEach((project) => {
    // Create the column wrapper (Bootstrap grid)
    const col = getElement("div", "col-md-6 col-lg-4 animate-box");
    col.setAttribute("data-animate-effect", "fadeInLeft");

    // Create the Card
    const card = getElement("div", "project-card");

    // Image
    const img = getElement("img", "");
    img.src = project.image;
    img.alt = project.projectName;

    // Title
    const title = getElement("h3", "");
    title.innerHTML = project.projectName;

    // Summary
    const summary = getElement("p", "");
    summary.innerHTML = project.summary;

    // Tech Stack Container
    const techStackDiv = getElement("div", "tech-stack");
    project.techStack.forEach((tech) => {
      const span = getElement("span", "tag");
      span.innerHTML = tech;
      techStackDiv.append(span);
    });

    // Link/Button
    const btn = getElement("a", "btn-custom");
    btn.href = project.preview;
    btn.target = "_blank";
    btn.innerHTML = "View Project";

    // Assemble the card
    card.append(img, title, summary, techStackDiv, btn);
    col.append(card);
    
    // Final injection
    projectContainer.append(col);
  });
}

function populateExp_Edu(items, id) {
    let mainContainer = document.getElementById(id);
  
    for (let i = 0; i < items.length; i++) {
      let spanTimelineSublabel = document.createElement("span");
      spanTimelineSublabel.className = "timeline-sublabel";
      spanTimelineSublabel.innerHTML = items[i].subtitle;
  
      let spanh2 = document.createElement("span");
      spanh2.innerHTML = items[i].duration;
  
      let h2TimelineLabel = document.createElement("h2");
      h2TimelineLabel.innerHTML = items[i].title;
      h2TimelineLabel.append(spanh2);
  
      let divTimelineLabel = document.createElement("div");
      divTimelineLabel.className = "timeline-label";
      divTimelineLabel.append(h2TimelineLabel);
      divTimelineLabel.append(spanTimelineSublabel);
  
      for (let j = 0; j < items[i].details.length; j++) {
        let pTimelineText = document.createElement("p");
        pTimelineText.className = "timeline-text";
        pTimelineText.innerHTML = "&blacksquare; " + items[i].details[j];
        divTimelineLabel.append(pTimelineText);
      }
  
      let divTags = document.createElement("div");
      for (let j = 0; j < items[i].tags.length; j++) {
        let spanTags = document.createElement("span");
        spanTags.className = "badge badge-secondary";
        spanTags.innerHTML = items[i].tags[j];
        divTags.append(spanTags);
      }
      divTimelineLabel.append(divTags);
  
      let iFa = document.createElement("i");
      iFa.className = "fa fa-" + items[i].icon;
  
      let divTimelineIcon = document.createElement("div");
      divTimelineIcon.className = "timeline-icon color-2";
      divTimelineIcon.append(iFa);
  
      let divTimelineEntryInner = document.createElement("div");
      divTimelineEntryInner.className = "timeline-entry-inner";
      divTimelineEntryInner.append(divTimelineIcon);
      divTimelineEntryInner.append(divTimelineLabel);
  
      let article = document.createElement("article");
      article.className = "timeline-entry animate-box";
      article.append(divTimelineEntryInner);
  
      mainContainer.append(article);
    }
  
    let divTimelineIcon = document.createElement("div");
    divTimelineIcon.className = "timeline-icon color-2";
  
    let divTimelineEntryInner = document.createElement("div");
    divTimelineEntryInner.className = "timeline-entry-inner";
    divTimelineEntryInner.append(divTimelineIcon);
  
    let article = document.createElement("article");
    article.className = "timeline-entry begin animate-box";
    article.append(divTimelineEntryInner);
  
    mainContainer.append(article);
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
populateProjects(softwareProjects, "software-projects");
populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");
populateLinks(footer, "footer");

