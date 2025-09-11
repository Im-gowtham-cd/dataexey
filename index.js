const file = [
    {
        version: "1.1",
        des: "Dataexey 1.1 includes improvements and bug fixes. It still focuses on duplicate file detection and prevention.",
        file: "./Duplicate-detection.zip"
    },
    {
        version: "1.0",
        des: "Dataexey 1.0 is the initial release of the browser extension. It includes basic features such as duplicate file detection and prevention.",
        file: "./Duplicate-detection.zip"
    }
];

const container = document.getElementById("version-download");
const download = document.getElementById("download");

const latest = file[0];

download.innerHTML = `Download Dataexey ${latest.version} <i class='bx bx-download bx-sm'></i>`;
download.href = latest.file;
download.setAttribute("download", latest.file);

file.forEach(v => {
    const div = document.createElement("div");
    div.classList.add("version-download-content");
    div.innerHTML = `
      <p>Version ${v.version}</p>
      <p>${v.des}</p>
      <a href="${v.file}" download>
        Dataexey ${v.version} <i class='bx bx-download bx-sm'></i>
      </a>
    `;
    container.appendChild(div);
});
