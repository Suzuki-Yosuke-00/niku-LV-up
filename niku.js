'use strict'
// 1行目に記載している 'use strict' は削除しないでください


//にわとりの部位の名前
  const toriPart = {momo: "もも", mune: "むね", teba: "てばさき", seseri: "セセリ", reba: "レバー"}

//ぶたの部位の名前
  const butaPart = {momo: "もも", bara: "ばら", rosu: "ロース", ashi: "とんそく", mimi: "みみ"}

//うしの部位の名前
  const cowPart = { momo: "もも", bara: "ばら", rosu: "ロース", saroin: "サーロイン", tan: "タン"}

// --------------------------------------------------------------------

// 画像データ
const images = {
  niwatori: {
    momo: { raw: 'img_deta/momo_nama.jpeg', cooked: 'img_deta/momo.jpg' },
    mune: { raw: 'img_deta/mune_nama.jpeg', cooked: 'img_deta/mune.jpg' },
    teba: { raw: 'img_deta/teba_nama.jpg', cooked: 'img_deta/teba.jpg' },
    seseri: { raw: 'img_deta/seseri_nama.jpg', cooked: 'img_deta/seseri.jpg' },
    reba: { raw: 'img_deta/reba_nama.jpg', cooked: 'img_deta/reba.jpg' }
  },
  buta: {
    momo: { raw: 'img_deta/buta_momo_nama.jpg', cooked: 'img_deta/buta_momo.jpg' },
    bara: { raw: 'img_deta/buta_bara_nama.jpg', cooked: 'img_deta/buta_bara.jpg' },
    rosu: { raw: 'img_deta/buta_rosu_nama.jpg', cooked: 'img_deta/buta_rosu.jpg' },
    ashi: { raw: 'img_deta/buta_ashi_nama.jpg', cooked: 'img_deta/buta_ashi.jpeg' },
    mimi: { raw: 'img_deta/buta_mimi_nama.jpg', cooked: 'img_deta/buta_mimi.jpg' }
  },
  cow: {
    momo: { raw: 'img_deta/cow_momo_nama.jpg', cooked: 'img_deta/cow_momo.jpg' },
    bara: { raw: 'img_deta/cow_bara_nama.jpg', cooked: 'img_deta/cow_bara.jpg' },
    rosu: { raw: 'img_deta/cow_rosu_nama.jpg', cooked: 'img_deta/cow_rosu.jpg' },
    saroin: { raw: 'img_deta/cow_saroin_nama.jpg', cooked: 'img_deta/cow_saroin.jpg' },
    tan: { raw: 'img_deta/cow_tan_nama.jpg', cooked: 'img_deta/cow_tan.jpg' }
  },
  firstImage: {raw:'img_deta/nikumoji.jpg', cooked:'img_deta/nikukuwasero.jpg'}
};

let currentAnimal = null;

// ---------------------------------------------------------------------------

// 音を鳴らす関数
function playSound(soundId) {
  const clickSound = document.getElementById(soundId);
  clickSound.play();
}

// ---------------------------------------------------------------------

// 部位を変更する関数
function changeParts(part, animal) {
  currentAnimal = animal;
  const partNames = Object.keys(part);
  for (let i = 0; i < partNames.length; i++) {
    const item = partNames[i];
    const button = document.getElementById(i + "Botton");
    if (button) {
      button.textContent = part[item];
      button.dataset.part = item; // 部位名をデータ属性に保存
    }
  }
}

// ------------------------------------------------------------------------

// にわとりの画像をクリックしたら
let toriBotton = document.getElementById("toriImage");
toriBotton.addEventListener("click", function() {
  playSound('toriSound');
  changeParts(toriPart, 'niwatori');
});

// ぶたの画像をクリックしたら
let butaBotton = document.getElementById("butaImage");
butaBotton.addEventListener("click", function() {
  playSound('butaSound');
  changeParts(butaPart, 'buta');
});

// うしの画像をクリックしたら
let cowBotton = document.getElementById("cowImage");
cowBotton.addEventListener("click", function() {
  playSound('cowSound');
  changeParts(cowPart, 'cow');
  //imgSelect("firstImage");
});

// ----------------------------------------------------------------------

//画像を入れ替える関数
function imgSelect(event) {
  if (!currentAnimal) return;
  const part = event.target.dataset.part;
  const rawMeatImage = document.getElementById("rawMeatImage"); 
  const cookedMeatImage = document.getElementById("cookedMeatImage");
  rawMeatImage.src = images[currentAnimal][part].raw;
  cookedMeatImage.src = images[currentAnimal][part].cooked;
}

// 部位ボタンをクリックしたら
for (let i = 0; i < 5; i++) {
  let button = document.getElementById(i + "Botton");
  button.addEventListener("click", imgSelect);
}
