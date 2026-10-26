// INTRO (boarding pass + passport stamps)
// To turn it off: delete intro.js + intro.css and the 2 lines marked INTRO in the slider HTML.
(() => {
    // ===== SETTINGS =====
    const FROM = 'COIMBATORE';               // departure city on the pass
    const PASSENGER = 'VIDUR MANOHARAN';      // name on the pass
    const SHOW_ONCE = true;                   // true = once per browser session, false = every visit
                                              // (add ?intro to the address to force it for testing)
    // ====================

    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let seen = null;
    try { seen = sessionStorage.getItem('introSeen'); } catch (e) {}
    const forced = location.search.includes('intro');
    if (reduce || (SHOW_ONCE && seen && !forced)) return;

    const list = Object.values(places);
    const n = list.length;
    const countries = new Set(list.map(p => p.name.split(',').pop().trim())).size;
    const totalPhotos = list.reduce((sum, p) => sum + p.photos.length, 0);
    const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase();

    const el = document.createElement('div');
    el.id = 'intro';
    el.innerHTML = `
        <div class="intro-wrap">
            <div class="pass">
                <div class="pass-main">
                    <div class="pass-head"><span>BOARDING PASS</span><span><i class="fa-solid fa-camera"></i><em> PHOTO JOURNAL</em></span></div>
                    <div class="route">
                        <div><small>FROM</small><b>${FROM}</b></div>
                        <div class="fly"><i class="fa-solid fa-plane"></i></div>
                        <div><small>TO</small><b>EVERYWHERE</b></div>
                    </div>
                    <div class="meta">
                        <div><small>PASSENGER</small><b>${PASSENGER}</b></div>
                        <div><small>PLACES</small><b>${n}</b></div>
                        <div><small>PHOTOS</small><b>${totalPhotos}</b></div>
                        <div><small>COUNTRIES</small><b>${countries}</b></div>
                    </div>
                </div>
                <div class="pass-stub">
                    <div><small>FLIGHT</small><b>VM 001</b></div>
                    <div><small>DATE</small><b>${date}</b></div>
                    <div class="barcode"></div>
                </div>
            </div>
            <div class="status">STAMPS <span id="intro-count">00</span> / ${String(n).padStart(2, '0')}</div>
        </div>
        <div class="stamps"></div>
        <div class="vf">
            <i></i><i></i><i></i><i></i>
            <span><i class="fa-solid fa-camera"></i> 1/250 &nbsp; F2.8 &nbsp; ISO 100</span>
        </div>
        <button class="skip">Skip intro →</button>`;
    document.body.appendChild(el);
    if (getComputedStyle(el).position !== 'fixed') { el.remove(); return; }   // intro.css missing: skip the intro
    document.documentElement.classList.add('intro-on');

    const wrap = el.querySelector('.intro-wrap');
    const pass = el.querySelector('.pass');
    const stamps = el.querySelector('.stamps');
    const count = el.querySelector('#intro-count');
    const timers = [];
    const later = (fn, ms) => timers.push(setTimeout(fn, ms));
    let finished = false;

    // Spread the stamps over the screen, away from the pass first
    function spots(s) {
        const w = innerWidth, h = innerHeight - 70;
        const cols = Math.ceil(Math.sqrt(n * 2 * w / h));
        const rows = Math.ceil(n * 2 / cols);
        const cw = w / cols, ch = h / rows;
        const pr = pass.getBoundingClientRect();
        const free = [], busy = [];
        for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
            const x = c * cw + cw / 2 + (Math.random() - 0.5) * cw * 0.2;
            const y = r * ch + ch / 2 + (Math.random() - 0.5) * ch * 0.2;
            const hit = x > pr.left - cw * 0.3 && x < pr.right + cw * 0.3 && y > pr.top - ch * 0.3 && y < pr.bottom + ch * 0.3;
            const m = s * 0.7;                                   // keep whole stamp on screen
            (hit ? busy : free).push({ x: Math.min(w - m, Math.max(m, x)), y: Math.min(h + 70 - s * 0.6, Math.max(s * 0.6, y)) });
        }
        const shuffle = a => a.sort(() => Math.random() - 0.5);
        return [...shuffle(free), ...shuffle(busy)].slice(0, n);
    }

    function addStamp(p, i, spot, s) {
        const parts = p.name.split(',').map(t => t.trim());
        const city = parts[0].toUpperCase();
        const country = parts.length > 1 ? parts[parts.length - 1].toUpperCase() : 'VISITED';
        const colors = ['#ff7a8a', '#7fc4ff', '#8be0b0', '#c9a6ff', '#ffc46b'];
        const shape = ['', 'rect', 'dash'][i % 3];
        const longest = Math.max(...city.split(' ').map(w => w.length));      // longest word decides the size
        const fs = Math.max(s * 0.075, Math.min(s * 0.15, (s * 0.7) / (longest * 0.72)));
        const d = document.createElement('div');
        d.className = 'stamp ' + shape;
        d.style.cssText = `left:${spot.x}px;top:${spot.y}px;--r:${Math.round(Math.random() * 40 - 20)}deg;--c:${colors[i % colors.length]}`;
        d.innerHTML = `<small><i class="fa-solid fa-camera"></i> ${p.photos.length}</small><b style="font-size:${fs}px">${city}</b><span>${country}</span>`;
        stamps.appendChild(d);
        count.textContent = String(i + 1).padStart(2, '0');
        wrap.classList.remove('bump'); void wrap.offsetWidth; wrap.classList.add('bump');
    }

    function flash() {                                  // camera flash on top of everything
        const f = document.createElement('div');
        f.className = 'intro-flash';
        document.body.appendChild(f);
        setTimeout(() => f.remove(), 800);
    }

    function finish(withFlash) {
        if (finished) return;
        finished = true;
        timers.forEach(clearTimeout);
        if (withFlash === true) flash();
        el.classList.add('leave');
        setTimeout(() => document.documentElement.classList.remove('intro-on'), 350);   // slider text starts animating
        setTimeout(() => {
            el.remove();
            try { sessionStorage.setItem('introSeen', '1'); } catch (e) {}
            document.dispatchEvent(new Event('introdone'));
        }, 1100);
    }

    el.querySelector('.skip').addEventListener('click', () => finish());
    document.addEventListener('keydown', e => { if (e.key === 'Escape' || e.key === 'Enter') finish(); });

    // Timeline: pass appears -> stamps land one by one -> pass slides away
    const s = Math.max(72, Math.min(130, innerWidth * 0.12));
    el.style.setProperty('--s', s + 'px');
    const gap = Math.min(260, 2800 / n);
    later(() => {
        const pts = spots(s);
        list.forEach((p, i) => later(() => addStamp(p, i, pts[i], s), i * gap));
        const last = (n - 1) * gap;
        later(() => el.classList.add('focus'), last + 500);      // viewfinder appears
        later(() => finish(true), last + 1000);                  // click! flash, then the pass slides away
    }, 1000);

    later(() => finish(), 12000);                      // safety net
})();