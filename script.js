// FUNCTION SMOOTH SCROLL DENGAN ZOOM EFEK
function scrollToSection(sectionId) {
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('zoom-out');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });

        setTimeout(() => {
            target.classList.remove('zoom-out');
            target.classList.add('zoom-in');
        }, 400);

        setTimeout(() => {
            target.classList.remove('zoom-in');
        }, 800);
    }
}

// TOGGLE SUB-BLOCK (JENIS OTOT / ANATOMI MAKRO)
function toggleSubBlock(blockId, btnElement) {
    const parent = btnElement.parentElement;
    const buttons = parent.querySelectorAll('.toggle-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');

    const container = btnElement.closest('.content-block');
    const subBlocks = container.querySelectorAll('.sub-block');

    subBlocks.forEach(block => {
        if (block.id === blockId) {
            block.classList.remove('hidden');
            block.classList.add('zoom-in');
            setTimeout(() => block.classList.remove('zoom-in'), 300);
        } else {
            block.classList.add('hidden');
        }
    });
}

// ACCORDION TOGGLE WITH SMOOTH ZOOM
function toggleAccordion(headerElement) {
    const body = headerElement.nextElementSibling;
    const isOpened = body.classList.contains('open');

    if (isOpened) {
        body.classList.remove('open');
        headerElement.querySelector('span').innerText = '▼';
    } else {
        body.classList.add('open');
        body.classList.add('zoom-in');
        headerElement.querySelector('span').innerText = '▲';
        setTimeout(() => body.classList.remove('zoom-in'), 300);
    }
}

// INTERACTIVE CARD TOGGLE (UMUM UNTUK SEMUA KARTU KLIK)
function toggleDetail(cardElement) {
    const detail = cardElement.querySelector('.card-detail');
    if (detail) {
        const isVisible = window.getComputedStyle(detail).display !== 'none';
        
        if (isVisible) {
            cardElement.classList.remove('zoom-in');
            cardElement.classList.add('zoom-out');
            setTimeout(() => {
                detail.style.display = 'none';
                cardElement.classList.remove('zoom-out');
            }, 200);
        } else {
            detail.style.display = 'block';
            cardElement.classList.add('zoom-in');
            setTimeout(() => cardElement.classList.remove('zoom-in'), 300);
        }
    }
}

// MODAL POPUP SYSTEM UNTUK STRUKTUR MIKROSKOPIS
const modalData = {
    'mod-sarkolema': {
        title: '📱 Sarkolema',
        text: 'Membran plasma yang membungkus sarkoplasma/serat otot. Terdiri atas plasmalema dan membran basalis. Berperan menerima dan meneruskan depolarisasi listrik ke tubulus T.'
    },
    'mod-tubulus-t': {
        title: '🔌 Tubulus T & Triad',
        text: 'Invaginasi sarkolema yang masuk jauh ke dalam serat otot mengelilingi miofibril. Diapit dua sisterna terminalis membentuk Triad untuk menghantarkan sinyal pelepasan Ca²⁺.'
    },
    'mod-retikulum': {
        title: '💧 Retikulum Sarkoplasma',
        text: 'Sistem membran intraseluler yang khusus menyimpan dan mereabsorpsi ion kalsium (Ca²⁺) melalui pompa SERCA.'
    },
    'mod-miofibril': {
        title: '🧵 Miofibril & Miofilamen',
        text: 'Organel kontraktil berbentuk silinder berisi miofilamen tebal (miosin), filamen tipis (aktin), dan filamen elastis (titin).'
    }
};

function openModal(key) {
    const modal = document.getElementById('modal-container');
    const content = document.getElementById('modal-content');
    const data = modalData[key];

    if (data) {
        content.innerHTML = `<h3>${data.title}</h3><p style="margin-top:10px;">${data.text}</p>`;
        modal.style.display = 'flex';
        modal.querySelector('.modal-body').classList.add('zoom-in');
    }
}

function closeModal() {
    const modal = document.getElementById('modal-container');
    const body = modal.querySelector('.modal-body');

    body.classList.remove('zoom-in');
    body.classList.add('zoom-out');

    setTimeout(() => {
        modal.style.display = 'none';
        body.classList.remove('zoom-out');
    }, 200);
}
