import {
  bio,
  skills,
  projects,
  education,
  experience,
  certifications,
  footer,
} from "./data.js";

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  if (!bioTag) return;
  items.forEach((bioItem) => {
    const p = getElement("p", null);
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

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

function populateCertifications(items, id) {
  const certificationsTag = document.getElementById(id);
  if (!certificationsTag) return;
  items.forEach(({ title, link }) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = link;
    a.target = "_blank";
    a.textContent = title;
    a.style.color = "black";
    a.style.textDecoration = "none";

    li.appendChild(a);
    certificationsTag.appendChild(li);
  });
}

// Updated Unified Projects Function
function populateProjects(items, id) {
  const projectContainer = document.getElementById(id);
  if (!projectContainer) return;

  projectContainer.innerHTML = "";

  items.forEach((project) => {
    // Each project gets a full 12-column row
    const col = getElement("div", "col-md-12 animate-box");
    
    // The main horizontal card
    const card = getElement("div", "project-card");

    // Left Side: Image Container
    const imgCont = getElement("div", "project-image-container");
    const img = getElement("img", "");
    img.src = project.image;
    img.alt = project.projectName;
    imgCont.append(img);

    // Right Side: Content Container
    const content = getElement("div", "project-content");

    const title = getElement("h3", "");
    title.innerHTML = project.projectName;

    const summary = getElement("p", "");
    summary.innerHTML = project.summary;

    const footerRow = getElement("div", "d-flex justify-content-between align-items-center");

    const techStackDiv = getElement("div", "tech-stack");
    project.techStack.forEach((tech) => {
      const span = getElement("span", "tag");
      span.innerHTML = tech;
      techStackDiv.append(span);
    });

    const btn = getElement("a", "btn-custom");
    btn.href = project.preview;
    btn.target = "_blank";
    btn.innerHTML = "View Project";
    btn.style.width = "auto"; // Prevents button from being full width

    // Assemble Content
    content.append(title, summary, techStackDiv, btn);
    
    // Assemble Card
    card.append(imgCont, content);
    col.append(card);
    projectContainer.append(col);
  });
}

function populateExp_Edu(items, id) {
  let mainContainer = document.getElementById(id);
  if (!mainContainer) return;

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
    divTimelineLabel.append(h2TimelineLabel, spanTimelineSublabel);

    items[i].details.forEach(detail => {
      let p = document.createElement("p");
      p.className = "timeline-text";
      p.innerHTML = "&blacksquare; " + detail;
      divTimelineLabel.append(p);
    });

    let divTags = document.createElement("div");
    items[i].tags.forEach(tag => {
      let span = document.createElement("span");
      span.className = "badge badge-secondary";
      span.style.marginRight = "5px";
      span.innerHTML = tag;
      divTags.append(span);
    });
    divTimelineLabel.append(divTags);

    let iFa = document.createElement("i");
    iFa.className = "fa fa-" + items[i].icon;

    let divTimelineIcon = document.createElement("div");
    divTimelineIcon.className = "timeline-icon color-2";
    divTimelineIcon.append(iFa);

    let divTimelineEntryInner = document.createElement("div");
    divTimelineEntryInner.className = "timeline-entry-inner";
    divTimelineEntryInner.append(divTimelineIcon, divTimelineLabel);

    let article = document.createElement("article");
    article.className = "timeline-entry animate-box";
    article.append(divTimelineEntryInner);

    mainContainer.append(article);
  }
}

function getElement(tagName, className) {
  const item = document.createElement(tagName);
  if (className) item.className = className;
  return item;
}

// EXECUTION CALLS
populateBio(bio, "bio");
populateSkills(skills, "skills");
populateCertifications(certifications, "certifications");
populateProjects(projects, "unified-projects-grid"); // Single Call for all projects
populateExp_Edu(experience, "experience");
populateExp_Edu(education, "education");
