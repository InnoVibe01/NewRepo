const data = {
    direct: [
        { img: './assets/images/direct1.jpg', title: 'Direct Power Camera – Tuya Compatible' },
        { img: './assets/images/direct2.jpg', title: 'Night Vision Direct Camera – Smart Life' }
    ],
    solar: [
        { img: './assets/images/solar1.jpg', title: 'Solar Camera – Smart Life' },
        { img: './assets/images/solar2.jpg', title: '4G Solar Camera – Tuya Compatible' }
    ],
    poe: [
        { img: './assets/images/poe1.jpg', title: 'PoE Dome Camera – Tuya' },
        { img: './assets/images/poe2.jpg', title: 'Outdoor PoE Camera – Smart Life' }
    ],
    intercom: [
        { img: './assets/images/intercom1.jpg', title: 'WiFi Video Intercom – Tuya' },
        { img: './assets/images/intercom2.jpg', title: 'Smart Gate Intercom – Smart Life' }
    ]
};

function openPopup(key) {
    const popup = document.getElementById('popup');
    const body = document.getElementById('popup-body');
    const title = document.getElementById('popup-title');
    title.innerText = key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' ') + ' Products';
    body.innerHTML = '';
    data[key].forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `<img src="${item.img}" alt="${item.title}"><div class="popup-title">${item.title}</div>`;
        body.appendChild(div);
    });
    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
