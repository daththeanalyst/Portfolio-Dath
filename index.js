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
 * Populates projects to the HTML page.
 * @param {Array} items - An array of project objects.
 * @param {string} id - The target HTML element ID.
 */
function populateProjects(items, id) {
    let projectdesign = document.getElementById(id);
  
    let h4 = document.createElement("h4");
    h4.className = "project-heading";
  
    let a = document.createElement("a");
    a.target = "_blank";
  
    let img = document.createElement("img");
    img.className = "img-fluid";
  
    let divResumeContentLeft = document.createElement("div");
    divResumeContentLeft.className = "resume-content";
    divResumeContentLeft.id = "left-div";
    divResumeContentLeft.append(img);
  
    let divResumeContentRight = document.createElement("div");
    divResumeContentRight.className = "resume-content";
    divResumeContentRight.id = "right-div";
  
    let p = document.createElement("p");
    p.className = "project-description";
  
    let divSpan = document.createElement("div");
  
    let divSubHeading = document.createElement("div");
    divSubHeading.className = "sub-heading";
    divSubHeading.append(p);
    divSubHeading.append(divSpan);
    divResumeContentRight.append(divSubHeading);
  
    let divResumeItem = document.createElement("div");
    divResumeItem.className = "resume-item";
    divResumeItem.append(divResumeContentLeft);
    divResumeItem.append(divResumeContentRight);
    a.append(divResumeItem);
  
    let divProjectCard = document.createElement("div");
    divProjectCard.className = "project-card";
    divProjectCard.append(a);
  
    let li = document.createElement("li");
    li.append(divProjectCard);
  
    let hr = document.createElement("hr");
  
    for (let i = 0; i < items.length; i++) {
      h4.innerHTML = items[i].projectName;
      a.href = items[i].preview;
  
      img.src = items[i].image;
  
      p.innerHTML = items[i].summary;
  
      divSpan.innerHTML = "";
      for (let k = 0; k < items[i].techStack.length; k++) {
        let span = document.createElement("span");
        span.className = "badge badge-secondary";
        span.innerHTML = items[i].techStack[k];
        divSpan.append(span);
      }
  
      projectdesign.append(li.cloneNode(true));
  
      if (i != items.length - 1) {
        projectdesign.append(hr.cloneNode(true));
      }
    }
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
