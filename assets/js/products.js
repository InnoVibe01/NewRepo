function openPopup(category) {
    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const body = document.getElementById("popup-body");

    const data = {
        direct: {
            title: "Direct Power Cameras",
            images: [
                { src: "assets/images/cctv/S-D-01.png", label: "Direct Power Camera – LS Series" },
                { src: "assets/images/cctv/S-D-02.png", label: "Direct Power Camera – LS Series" }
            ]
        },
        solar: {
            title: "Solar Panel Cameras",
            images: [
                { src: "assets/images/cctv/T-S-01.png", label: "Solar Camera – T Series" },
                { src: "assets/images/cctv/T-S-02.png", label: "Solar Camera – T Series" }
            ]
        },
        poe: {
            title: "PoE Cameras",
            images: [
                { src: "assets/images/cctv/T-P-01.png", label: "PoE Camera – T Series" },
                { src: "assets/images/cctv/S-P-01.png", label: "PoE Camera – LS Series" },
                { src: "assets/images/cctv/S-P-02.png", label: "PoE Camera – LS Series" }
            ]
        },
        intercom: {
            title: "Smart Intercoms",
            images: [
                { src: "assets/images/cctv/T-I-01.png", label: "Intercom – T Series" },
                { src: "assets/images/cctv/T-I-02.png", label: "Intercom – T Series" }
            ]
        },
        tuya: {
            title: "T Series Smart Control Devices",
            images: [
                { src: "./assets/images/smart home control/T-03.png", label: "3.5\" Screen – T Series" },
                { src: "./assets/images/smart home control/T-04.png", label: "4\" Screen – T Series" },
                { src: "./assets/images/smart home control/T-05.png", label: "5\" Screen – T Series" },
                { src: "./assets/images/smart home control/T-06.png", label: "6\" Screen – T Series" },
                { src: "./assets/images/smart home control/T-08.png", label: "8\" Screen – T Series" },
                { src: "./assets/images/smart home control/T-10.png", label: "10\" Screen – T Series" },
                { src: "./assets/images/smart home control/T-R.png", label: "Remote control – T Series" }
            ]
        },
        lifesmart: {
            title: "LS Series Smart Control Devices",
            images: [
                { src: "./assets/images/smart home control/S-04.png", label: "Nature Mini PRO – LS Series" },
                { src: "./assets/images/smart home control/S-06.png", label: "Nature Mini L – LS Series" },
                { src: "./assets/images/smart home control/S-07.png", label: "Nature 7 PRO – LS Series" },
                { src: "./assets/images/smart home control/S-10.png", label: "Nature – LS Series" },
                { src: "./assets/images/smart home control/S-R.png", label: "Nature X – LS Series" }
            ]
        },
        gateway: {
            title: "Gateways & Smart Stations",
            images: [
                { src: "./assets/images/smart home control/Gateway/T-G-W.png", label: "WIFI Gateway – T Series " },
                { src: "./assets/images/smart home control/Gateway/T-G-L.png", label: "LAN Gateway – T Series" },
                { src: "./assets/images/smart home control/Gateway/T-G-R.png", label: "Router Gateway – T Series" },
                { src: "./assets/images/smart home control/Gateway/S-S.png", label: "Smart Station – LS Series" }
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
