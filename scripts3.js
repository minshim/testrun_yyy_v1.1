document.addEventListener("DOMContentLoaded", function () {
    const titles = document.querySelectorAll(".title");
    
    titles.forEach(function (title) {
        title.addEventListener("click", function () {
            // Find the corresponding gallery for the clicked title
            const gallery = title.nextElementSibling;
            if (gallery && gallery.classList.contains("gallery")) {
                gallery.classList.toggle("hidden");
            }
        });
    });
});



  //------------------------------------

// --- gallery //
// --- Gateway //
const galleryData = {
  1: [
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7596.jpg", caption: "" },
  
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7571.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7593.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7582.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7280.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_20200423_0002.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_20200423_0003.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_20200423_0005.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_20200423_0006.jpg", caption: "" },
    { src: "bau/img/IMG_3914.mp4", type: "video", caption: "" }, // 動画
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7242.jpg", caption: " << exhibition" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7285.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7251.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7265.jpg", caption: "" },
    { src: "bau/img/01_GATEWAY-2015-01/IMG_7294.jpg", caption: "" },


  ],

// --- NewHabitations //
  2: [
    { src: "bau/img/11_NewHabitations/DSC_6418_in.jpg", caption: "images" },
    { src: "bau/img/11_NewHabitations/DSC_6423_in.jpg", caption: "images" },
    { src: "bau/img/11_NewHabitations/IMG_6898.mp4", type: "video", caption: "" }, // 動画
    

    { src: "bau/img/11_NewHabitations/DSC_6418_in.jpg", caption: "images" },
    { src: "bau/img/11_NewHabitations/DSC_6432_in.jpg", caption: "images" },
    { src: "bau/img/11_NewHabitations/DSC_6448_in.jpg", caption: "images" },
    { src: "bau/img/11_NewHabitations/IMG_6897.mp4", type: "video", caption: "" }, // 動画

    { src: "bau/img/11_NewHabitations/DSC_6453_in.jpg", caption: "images" }
  ],

// --- Common Face //
  3: [
    { src: "bau/img/11.1_Common Face/2_DSCF1660z.jpg", caption: " " },
    { src: "bau/img/11.1_Common Face/2_DSCF1660z.jpg", caption: " " },
    { src: "bau/img/11.1_Common Face/3_DSCF1662.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/6_DSCF1692.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/7_DSCF1695.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/8_DSCF1670.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/9_DSCF1671.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/10_DSCF1677.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/DSCF1656.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/DSCF1702.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/IMG_3741.JPG", caption: " " },
    { src: "bau/img/11.1_Common Face/IMG_6999.mp4", type: "video", caption: "" }, // 動画
  ],

  // --- Common Face //
  4: [
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_1.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_5.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_7.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/IMG_2787.JPG", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_8.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_12.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_19.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_20.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/GATEWAY202405_21.jpg", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/IMG_2771.JPG", caption: " " },
    { src: "bau/img/12_GATEWAY-2024-05/IMG_2774.JPG", caption: " " },
    


  ],
};




// 各ギャラリーのインデックスをトラッキング
const galleryIndices = {
  1: 1, // ギャラリー1の次に追加する画像のインデックス
  2: 1, // ギャラリー2の次に追加する画像のインデックス
  3: 1, // ギャラリー1の次に追加する画像のインデックス
  4: 1 // ギャラリー1の次に追加する画像のインデックス
};


function addImage(event) {
  const galleryElement = event.currentTarget;
  const galleryId = galleryElement.dataset.galleryId; // ギャラリーIDを取得
  const images = galleryData[galleryId];
  const currentIndex = galleryIndices[galleryId];

  if (currentIndex < images.length) {
    const newFigure = document.createElement("figure");

    // 画像または動画のタイプを確認
    if (images[currentIndex].type === "video") {
      // 動画を追加
      const newVideo = document.createElement("video");
      newVideo.src = images[currentIndex].src;
      newVideo.autoplay = true;  // 自動再生
      newVideo.muted = true;    // 無音
      newVideo.loop = false;    // ループなし
      newVideo.controls = false; // コントロールを非表示（残り秒数等も非表示）
      
      // スクロールバーを非表示にするためのスタイル設定
      newVideo.style.overflow = "hidden";  // 動画が表示される部分以外にスクロールバーが出ないようにする

      newFigure.appendChild(newVideo);
    } else {
      // 画像を追加
      const newImage = document.createElement("img");
      newImage.src = images[currentIndex].src;
      newImage.alt = `Gallery ${galleryId} - Image ${currentIndex + 1}`;
      newFigure.appendChild(newImage);
    }

    // キャプションを追加
    const newCaption = document.createElement("figcaption");
    newCaption.textContent = images[currentIndex].caption;
    newFigure.appendChild(newCaption);

    // ギャラリーに新しいfigureを追加
    galleryElement.prepend(newFigure);

    // インデックスを次に進める
    galleryIndices[galleryId]++;
  }
}




document.addEventListener("DOMContentLoaded", function () {
  const orderButton = document.getElementById("Order");
  const galleryContainer = document.querySelector(".gallery-container");

  if (!orderButton || !galleryContainer) {
      console.error("Button or gallery container not found!");
      return;
  }

  // 初期のボタン状態を設定
  orderButton.dataset.order = "latest";

  orderButton.addEventListener("click", function () {
      // 全ての要素を取得
      const items = Array.from(galleryContainer.children);

      // タイトルとギャラリーをペアにする
      let groupedItems = [];
      for (let i = 0; i < items.length; i += 2) {
          if (items[i].classList.contains("title") && items[i + 1]?.classList.contains("gallery")) {
              groupedItems.push([items[i], items[i + 1]]);
          }
      }

      if (groupedItems.length === 0) {
          console.error("No valid title-gallery pairs found.");
          return;
      }

      // ペアを逆順に並び替え
      groupedItems.reverse();

      // 既存の要素を並び替え
      groupedItems.forEach(([title, gallery]) => {
          galleryContainer.appendChild(title);
          galleryContainer.appendChild(gallery);
      });

      // ボタンのテキストを切り替え
      if (orderButton.dataset.order === "latest") {
          orderButton.textContent = "Latest \u2192 Earliest";
          orderButton.dataset.order = "oldest";
      } else {
          orderButton.textContent = "Earliest \u2192 Latest";
          orderButton.dataset.order = "latest";
      }

      console.log("Gallery order switched!");
  });
});


// 0.6倍を加えた拡大率のリスト
const zoomLevels = [0.6, 0.8, 1.0, 1.2, 1.4]; // 0.6, 0.8, 1.0, 1.2, 1.4の5段階
let currentZoomIndex = 2; // 初期状態（1.0倍）

const galleryContainer = document.querySelector(".gallery-container"); // クラス名で取得

if (!galleryContainer) {
    console.error("Gallery container not found!");
} else {
    // 拡大ボタンの処理
    document.getElementById("zoomInBtn").addEventListener("click", function() {
        if (currentZoomIndex < zoomLevels.length - 1) {
            currentZoomIndex++;
            galleryContainer.style.transform = `scale(${zoomLevels[currentZoomIndex]})`;
        }
    });

    // 縮小ボタンの処理
    document.getElementById("zoomOutBtn").addEventListener("click", function() {
        if (currentZoomIndex > 0) {
            currentZoomIndex--;
            galleryContainer.style.transform = `scale(${zoomLevels[currentZoomIndex]})`;
        }
    });
}




document.querySelectorAll("button").forEach(button => {
  button.addEventListener("click", () => {
    const colorClass = button.className; // ボタンのクラス名を取得
    const colors = {
      "gray-0": "#FFFFFF",
      "gray-10": "#e5e5e5",
      "gray-40": "#a0a0a0",
      "gray-80": "#404040",
      "gray-100": "#000000",
      "r-100": "#FF0000",
      "g-100": "#00FF00",
      "b-100": "#0000FF"
    };
    document.body.style.backgroundColor = colors[colorClass] || "#ffffff";
  });
});



function toggleDetails(element) {
  element.classList.toggle("clicked");
}


  // リセットボタンのクリックイベント
  document.getElementById('reset-button').addEventListener('click', function() {
    window.scrollTo(0, 0);  // スクロール位置をリセット
    location.reload();      // ページをリロード
  });
  

  