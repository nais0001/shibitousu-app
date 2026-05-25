import { astro } from 'iztro'
import './style.css'

console.log('NEW MAIN JS')

// 第2引数の時間のルール（時辰インデックス）:
// 0: 子 (23:00-00:59), 1: 丑 (01:00-02:59), 2: 寅 (03:00-04:59), 3: 卯 (05:00-06:59),
// 4: 辰 (07:00-08:59), 5: 巳 (09:00-10:59), 6: 午 (11:00-12:59), 7: 未 (13:00-14:59),
// 8: 申 (15:00-16:59), 9: 酉 (17:00-18:59), 10: 戌 (19:00-20:59), 11: 亥 (21:00-22:59)
// ※「12」は夜子時(23:00-23:59)として扱われる場合があります。

// 例：1961-05-01生まれ、お昼の12時（午時＝6）、女性("female")
const chart = astro.bySolar(
  '1961-05-01',
  3,
  'female'
)

console.log(chart)

// HTMLのレンダリング処理
const root = document.getElementById("chart");

if (root) {
  root.innerHTML = ""; // 初期化

  chart.palaces.forEach(palace => {
    const div = document.createElement("div");
    div.className = "palace";

    let html = `
      <div class="title">
        ${palace.name}宮
      </div>
      <div class="stem-branch">
        ${palace.heavenlyStem} ${palace.earthlyBranch}
      </div>
    `;

    // 主星のループ処理
    palace.majorStars.forEach(star => {
      html += `
        <div class="star">
          ${star.brightness ? `(${star.brightness})` : ""} ${star.name}
        </div>
      `;
    });

    div.innerHTML = html;
    root.appendChild(div);
  });
}