function openPopup(category) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const body = document.getElementById("popup-body");

    const data = {
        direct: {
            title: "Direct Power Cameras",
            images: [
                { src: "assets/images/cctv/S-D-01.png", label: "Direct Power Camera – Smart Life" },
                { src: "assets/images/cctv/S-D-02.png", label: "Direct Power Camera – Smart Life" }
            ]
        },
        solar: {
            title: "Solar Panel Cameras",
            images: [
                { src: "assets/images/cctv/T-S-01.png", label: "Solar Camera – Tuya" },
                { src: "assets/images/cctv/T-S-02.png", label: "Solar Camera – Tuya" }
            ]
        },
        poe: {
            title: "PoE Cameras",
            images: [
                { src: "assets/images/cctv/T-P-01.png", label: "PoE Camera – Tuya" },
                { src: "assets/images/cctv/S-P-01.png", label: "PoE Camera – Smart Life" },
                { src: "assets/images/cctv/S-P-02.png", label: "PoE Camera – Smart Life" }
            ]
        },
        intercom: {
            title: "Smart Intercoms",
            images: [
                { src: "assets/images/cctv/T-I-01.png", label: "Intercom – Tuya" },
                { src: "assets/images/cctv/T-I-02.png", label: "Intercom – Tuya" }
            ]
        }
    };

    const selected = data[category];
    if (!selected) return;

    title.textContent = selected.title;

    body.innerHTML = selected.images.map(item => `
    <div class="popup-item">
      <img src="${item.src}" alt="${item.label}" class="product-image" />
      <p>${item.label}</p>
    </div>
  `).join("");

    popup.classList.add("open");
}

function closePopup() {
    document.getElementById("popup").classList.remove("open");
}
