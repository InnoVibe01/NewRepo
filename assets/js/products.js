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
        },
        hvac_control: {
            title: "HVAC Control Units",
            images: [
                { src: "./assets/images/hvac/T-C.png", label: "Outdoor Control Unit – T Series" },
                { src: "./assets/images/hvac/LS-C.png", label: "Outdoor Control Unit – LS Series" },
                { src: "./assets/images/hvac/T-LS-C.png", label: "Indoor Control Unit – T & LS Series" }
            ]
        },
        thermostat: {
            title: "Smart Thermostats",
            images: [
                { src: "./assets/images/hvac/T-01.png", label: "FCU Thermostat – T Series" },
                { src: "./assets/images/hvac/T-02.png", label: "FCU Thermostat – T Series" },
                { src: "./assets/images/hvac/T-03.png", label: "FCU Thermostat – T Series" },
                { src: "./assets/images/hvac/T-04.png", label: "FCU Thermostat – T Series" },
                { src: "./assets/images/hvac/T-05.png", label: "FCU Thermostat – T Series" },
                { src: "./assets/images/hvac/LS-01.png", label: "FCU Thermostat – LS Series" }
            ]
        },
        curtain: {
            title: "Smart Curtain",
            images: [
                { src: "./assets/images/curtain/T-C.png", label: "Curtain Unit – T Series" },
                { src: "./assets/images/curtain/LS-C.png", label: "Curtain Unit – LS Series" }
            ]
        },
        blind: {
            title: "Smart Blind",
            images: [
                { src: "./assets/images/curtain/T-B.png", label: "Blind Unit – T Series" },
                { src: "./assets/images/curtain/LS-B.png", label: "Blind Unit – LS Series" }
            ]
        },
        curtain_control: {
            title: "Curtain Control",
            images: [
                { src: "./assets/images/curtain/T-C-C.png", label: "Curtain Control Unit – T Series" },
                { src: "./assets/images/curtain/LS-C-C.png", label: "Curtain Control Unit – LS Series" }
            ]
        },
        door: {
            title: "Smart Door Lock",
            images: [
                { src: "./assets/images/door/T-01.png", label: "Door Lock – T Series" },
                { src: "./assets/images/door/T-02.png", label: "Door Lock – T Series" },
                { src: "./assets/images/door/T-03.png", label: "Door Lock – T Series" },
                { src: "./assets/images/door/T-04.png", label: "Door Lock – T Series" },
                { src: "./assets/images/door/LS-01.png", label: "Door Lock – LS Series" },
                { src: "./assets/images/door/LS-02.png", label: "Door Lock – LS Series" }
            ]
        },
        garage: {
            title: "Garage Control",
            images: [
                { src: "./assets/images/door/T-G-01.png", label: "Garage Control Unit – T Series" },
                { src: "./assets/images/door/T-G-03.png", label: "Garage Motor Unit – T Series" },
                { src: "./assets/images/door/T-G-02.png", label: "Garage Arm Motor Unit – T Series" },
                { src: "./assets/images/door/LS-G.png", label: "Garage Control Unit – LS Series" }
            ]
        },
        switch: {
            title: "Switch Control",
            images: [
                { src: "./assets/images/switch/T-01.png", label: "1 Gang Glass Switch – T Series" },
                { src: "./assets/images/switch/T-02.png", label: "2 Gang Glass Switch – T Series" },
                { src: "./assets/images/switch/T-03.png", label: "3 Gang Glass Switch – T Series" },
                { src: "./assets/images/switch/T-04.png", label: "4 Gang Glass Switch – T Series" },
                { src: "./assets/images/switch/T-05.png", label: "1 Gang Button Switch – T Series" },
                { src: "./assets/images/switch/T-06.png", label: "2 Gang Button Switch – T Series" },
                { src: "./assets/images/switch/T-07.png", label: "3 Gang Button Switch – T Series" },
                { src: "./assets/images/switch/T-D.png", label: "Dimmer Control Unit – T Series" },
                { src: "./assets/images/switch/LS-01.png", label: "BLEND Switch PRO (Metal) – LS Series" },
                { src: "./assets/images/switch/LS-02.png", label: "Nature Switch – LS Series" },
                { src: "./assets/images/switch/LS-03.png", label: "BLEND Switch PRO – LS Series" },
                { src: "./assets/images/switch/LS-04.png", label: "Smart Switch Air (8 Key 4 way White) – LS Series" },
                { src: "./assets/images/switch/LS-05.png", label: "Starry Switch – LS Series" },
                { src: "./assets/images/switch/LS-06.png", label: "BLEND Smart Switch – LS Series" },
                { src: "./assets/images/switch/LS-07.png", label: "Moonstone Switch 120 – LS Series" },
                { src: "./assets/images/switch/LS-D.png", label: "Dimmer Control Unit – LS Series" }
            ]
        },
        channel: {
            title: "Channel Control",
            images: [
                { src: "./assets/images/switch/T-C-D.png", label: "Dimmer Channel Control Unit – T Series" },
                { src: "./assets/images/switch/LS-C-01.png", label: "Channel Control Unit – LS Series" },
                { src: "./assets/images/switch/LS-CD-02.png", label: "DimmerChannel Control Unit – LS Series" }
            ]
        },
        socket: {
            title: "Socket Control & Plug",
            images: [
                { src: "./assets/images/switch/T-S-02.png", label: "1 Gang Socket – T Series" },
                { src: "./assets/images/switch/T-S-01.png", label: "2 Gang Socket – T Series" },
                { src: "./assets/images/switch/T-S-P.png", label: "Smart Plug – T Series" },
                { src: "./assets/images/switch/LS-S-P.png", label: "Smart Plug – LS Series" },
                { src: "./assets/images/switch/T-S-S.png", label: "Power Strip – T Series" }
            ]
        },
        water: {
            title: "Water Heater Control",
            images: [
                { src: "./assets/images/switch/T-W.png", label: "Water Heater Control Unit – T Series" },
                { src: "./assets/images/switch/LS-W.png", label: "Water Heater Control Unit – LS Series" }
            ]
        },
        human: {
            title: "Human Devices",
            images: [
                { src: "./assets/images/pets/T-H.png", label: "WiFi Smart Air Purifier – T Series" }
            ]
        },
        pet: {
            title: "Pets Devices",
            images: [
                { src: "./assets/images/pets/T-P-01.png", label: "Smart Pet Food Feeder – T Series" },
                { src: "./assets/images/pets/T-P-02.png", label: "Smart Pet Water Fountain – T Series" }
            ]
        },
        t_series: {
            title: "T Series Sensors",
            images: [
                { src: "./assets/images/sensor/T-D.png", label: "Door Sensor – T Series" },
                { src: "./assets/images/sensor/T-V.png", label: "Vibration Sensor – T Series" },
                { src: "./assets/images/sensor/T-G.png", label: "Gaz Sensor – T Series" },
                { src: "./assets/images/sensor/T-S.png", label: "Siren/Alarm Sensor – T Series" },
                { src: "./assets/images/sensor/T-SM.png", label: "Smoke Sensor – T Series" },
                { src: "./assets/images/sensor/T-M.png", label: "Human Sensor – T Series" },
                { src: "./assets/images/sensor/T-P.png", label: "Motion Sensor – T Series" }
            ]
        },
        ls_series: {
            title: "LS Series Sensors",
            images: [
                { src: "./assets/images/sensor/LS-D.png", label: "Door Sensor – LS Series" },
                { src: "./assets/images/sensor/LS-TH.png", label: "Temperature and Humidity Sensor – LS Series" },
                { src: "./assets/images/sensor/LS-G.png", label: "Gaz Sensor – LS Series" },
                { src: "./assets/images/sensor/LS-S.png", label: "Siren/Alarm Sensor – LS Series" },
                { src: "./assets/images/sensor/LS-W.png", label: "Water Leak Sensor – LS Series" },
                { src: "./assets/images/sensor/LS-M.png", label: "Motion Sensor – LS Series" }
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
