function convertToMl() {
  // 升合の値を取得
  const volume = parseFloat(document.getElementById('volume').value);
  const unit = document.getElementById('unit').value;

  // 一升をミリリットルに変換
  let ml;
  if (unit === 'issho') {
    ml = volume * 1800;
  } else if (unit === 'ichigou') {
    ml = volume * 180;
  }

  // 結果を表示
  document.getElementById('result').innerText = `${volume}${unit === 'issho' ? '升' : '合'}は${ml}mlです。`;
}
