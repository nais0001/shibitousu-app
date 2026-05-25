const { astro } = require("iztro");

const chart = astro.bySolar(
    "1961-05-01",
    12,
    "female"
);

const root = document.getElementById("chart");

chart.palaces.forEach(palace => {

    const div = document.createElement("div");

    div.className = "palace";

    let html = `
        <div class="title">
            ${palace.name}宮
        </div>

        <div>
            ${palace.heavenlyStem}
            ${palace.earthlyBranch}
        </div>
    `;

    palace.majorStars.forEach(star => {

        html += `
            <div class="star">
                ${star.brightness || ""}
                ${star.name}
            </div>
        `;

    });

    div.innerHTML = html;

    root.appendChild(div);

});