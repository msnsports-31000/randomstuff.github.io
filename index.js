const XML_URL = "https://raw.githubusercontent.com/msnsports-31000/10-Store/refs/heads/main/apps.xml";

async function fetchAndCountApps() {
  const statusEl = document.getElementById("status");
  const countEl = document.getElementById("app-count");

  try {
    // 1. Fetch the raw XML content
    const response = await fetch(XML_URL);
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const xmlText = await response.text();

    // 2. Parse the XML text into a DOM object
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    // Check if the XML parsing resulted in an error
    const parseError = xmlDoc.querySelector("parsererror");
    if (parseError) {
      throw new Error("Failed to parse XML content.");
    }

    // 3. Select all <app> nodes (or adjust the selector if the XML tag differs)
    const apps = xmlDoc.querySelectorAll("app");

    // 4. Display the count
    statusEl.textContent = "Total Applications Found:";
    countEl.textContent = apps.length;

  } catch (error) {
    statusEl.textContent = `Error: ${error.message}`;
    statusEl.classList.add("error");
    countEl.textContent = "";
  }
}

// Execute on page load
document.addEventListener("DOMContentLoaded", fetchAndCountApps);
