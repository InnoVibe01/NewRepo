function openPopup(category) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const body = document.getElementById("popup-body");

    const data = {
        direct: {
            title: "Direct Power Cameras",
            images: [
                { src: "assets/images/cctv/S-D-01.png", label: "Direct Power Camera – Life Smart" },
                { src: "assets/images/cctv/S-D-02.png", label: "Direct Power Camera – Life Smart" }
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
                { src: "assets/images/cctv/S-P-01.png", label: "PoE Camera – Life Smart" },
                { src: "assets/images/cctv/S-P-02.png", label: "PoE Camera – Life Smart" }
            ]
        },
        intercom: {
            title: "Smart Intercoms",
            images: [
                { src: "assets/images/cctv/T-I-01.png", label: "Intercom – Tuya" },
                { src: "assets/images/cctv/T-I-02.png", label: "Intercom – Tuya" }
            ]
        },
        tuya: {
            title: "Tuya Smart Control Devices",
            images: [
                { src: "./assets/images/smart home control/T-03.png", label: "3.5\" Screen - Tuya" },
                { src: "./assets/images/smart home control/T-04.png", label: "4\" Screen - Tuya" },
                { src: "./assets/images/smart home control/T-05.png", label: "5\" Screen - Tuya" },
                { src: "./assets/images/smart home control/T-06.png", label: "6\" Screen - Tuya" },
                { src: "./assets/images/smart home control/T-08.png", label: "8\" Screen - Tuya" },
                { src: "./assets/images/smart home control/T-10.png", label: "10\" Screen - Tuya" },
                { src: "./assets/images/smart home control/T-R.png", label: "Remote control - Tuya" }
            ]
        },
        lifesmart: {
            title: "Life Smart Control Devices",
            images: [
                { src: "./assets/images/smart home control/S-04.png", label: "Nature Mini PRO - Life Smart" },
                { src: "./assets/images/smart home control/S-06.png", label: "Nature Mini L - Life Smart" },
                { src: "./assets/images/smart home control/S-07.png", label: "Nature 7 PRO - Life Smart" },
                { src: "./assets/images/smart home control/S-10.png", label: "Nature - Life Smart" },
                { src: "./assets/images/smart home control/S-R.png", label: "Nature X - Life Smart" }
            ]
        },
        gateway: {
            title: "Gateways & Smart Stations",
            images: [
                { src: "./assets/images/smart home control/Gateway/T-G-W.png", label: "Tuya WIFI Gateway" },
                { src: "./assets/images/smart home control/Gateway/T-G-L.png", label: "Tuya LAN Gateway" },
                { src: "./assets/images/smart home control/Gateway/T-G-R.png", label: "Tuya Router Gateway" },
                { src: "./assets/images/smart home control/Gateway/S-S.png", label: "Life Smart Smart Station" }
            ]
        }
    };

    const selected = data[category];
    if (!selected) return;

    title.textContent = selected.title;

    body.innerHTML = selected.images
        .map(
            (item) => `
    <div class="popup-item">
      <img src="${item.src}" alt="${item.label}" class="product-image" />
      <p>${item.label}</p>
    </div>
  `
        )
        .join("");

    popup.classList.add("open");
}

function closePopup() {
    document.getElementById("popup").classList.remove("open");
}
