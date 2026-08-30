const XML_URL = "https://raw.githubusercontent.com/msnsports-31000/10-Store/refs/heads/main/apps.xml";

async function loadStoreApps() {
  const statusEl = document.getElementById("status");
  const countEl = document.getElementById("app-count");
  const gridEl = document.getElementById("app-grid");

  try {
    const response = await fetch(XML_URL);
    if (!response.ok) {
      throw new Error(`HTTP Error ${response.status}`);
    }

    const xmlText = await response.text();
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    if (xmlDoc.querySelector("parsererror")) {
      throw new Error("XML Parsing Failed");
    }

    // Select all <app> elements
    const appNodes = xmlDoc.querySelectorAll("app");
    countEl.textContent = appNodes.length;
    statusEl.style.display = "none";

    appNodes.forEach(node => {
      // Helper function to safely read XML tag text
      const getTagText = (tagName) => {
        const el = node.querySelector(tagName);
        return el ? el.textContent.trim() : "";
      };

      const name = getTagText("name");
      const version = getTagText("version");
      const publisher = getTagText("publisher");
      const icon = getTagText("icon");
      const description = getTagText("description");
      const packageUrl = getTagText("package");

      // Build card element
      const card = document.createElement("div");
      card.className = "app-card";
      card.innerHTML = `
        <div>
          <div class="app-header">
            <img class="app-icon" src="${icon}" alt="${name} Icon" onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'48\' height=\'48\'><rect width=\'48\' height=\'48\' fill=\'%23ccc\'/></svg>'">
            <div>
              <div class="app-title">${name}</div>
              <div class="app-publisher">${publisher}</div>
              <div class="app-version">v${version}</div>
            </div>
          </div>
          <div class="app-desc" title="${description}">${description}</div>
        </div>
        ${packageUrl ? `<a href="${packageUrl}" class="download-btn" target="_blank" rel="noopener">Download AppX</a>` : ''}
      `;

      gridEl.appendChild(card);
    });

  } catch (err) {
    statusEl.textContent = `Error loading apps: ${err.message}`;
    statusEl.style.color = "#d9534f";
    countEl.textContent = "0";
  }
}

document.addEventListener("DOMContentLoaded", loadStoreApps);
