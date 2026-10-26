// Works even if imgfix.js did not load (then it just uses the path as it is)
const findImage = typeof loadFirst === 'function' ? loadFirst : p => Promise.resolve(p);

const slide = document.querySelector('.slide');
const bar = document.querySelector('.progress span');
const DELAY = 6000;                      // time per slide in ms
const RESPECT_REDUCED_MOTION = true;     // false = autoplay even if the device has animations turned off
let busy = false, timer;

// Uses the fade (fade.js) if it exists, otherwise a normal jump
const visit = url => window.goTo ? goTo(url) : location.href = url;

// Shuffle the places (new order on every page load)
const order = Object.entries(places);
for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
}

// Build one slide per place
slide.innerHTML = order.map(([key, p]) => `
    <div class="item" style="background-image: url('${encodeURI(p.folder + '/' + p.cover)}');">
        <div class="content">
            <div class="name">${p.name}</div>
            <div class="des">${p.text}</div>
            <button data-place="${key}">See More</button>
        </div>
        <div class="tag">${p.name.split(',')[0]}</div>
    </div>`).join('');

// Load every cover up front (smooth animation) and fix capital-letter mismatches (imgfix.js)
[...slide.children].forEach((item, i) => {
    const p = order[i][1];
    findImage(p.folder + '/' + p.cover).then(url => {
        item.style.backgroundImage = `url('${encodeURI(url)}')`;
    });
});

// "See More" opens that place's gallery
slide.addEventListener('click', e => {
    const btn = e.target.closest('button[data-place]');
    if (btn) visit('gallery.html?place=' + encodeURIComponent(btn.dataset.place));
});

// Restart the progress bar and the auto-switch countdown
function startTimer() {
    clearTimeout(timer);
    bar.style.animation = 'none';
    bar.offsetWidth;                     // restart the animation
    bar.style.animation = `progress ${DELAY}ms linear forwards`;
    timer = setTimeout(autoNext, DELAY);
}

// Auto-switch. If something is busy (intro still playing, animation running), try again shortly
// instead of stopping for good.
function autoNext() {
    if (busy || document.getElementById('intro')) { timer = setTimeout(autoNext, 300); return; }
    go(1);
}

// Move the slider one step (1 = next, -1 = previous)
function go(dir) {
    if (busy || document.getElementById('intro')) return;   // no moves during the intro
    busy = true;
    startTimer();                        // any move (click or auto) restarts the bar
    const items = slide.children;

    if (dir > 0) {
        const first = items[0];
        first.style.opacity = '0';
        slide.append(first);
        first.getBoundingClientRect();
        requestAnimationFrame(() => first.style.opacity = '');
        setTimeout(() => busy = false, 500);
    } else {
        const last = items[items.length - 1];
        last.style.opacity = '0';
        setTimeout(() => {
            slide.prepend(last);
            last.style.opacity = '';
            busy = false;
        }, 300);
    }
}

document.querySelector('.next').addEventListener('click', () => go(1));
document.querySelector('.prev').addEventListener('click', () => go(-1));
document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') go(1);
    if (e.key === 'ArrowLeft') go(-1);
});

// Autoplay (waits for the intro, pauses while the tab is hidden, off if the device asks for less motion)
if (!(RESPECT_REDUCED_MOTION && matchMedia('(prefers-reduced-motion: reduce)').matches)) {
    if (document.getElementById('intro')) document.addEventListener('introdone', startTimer, { once: true });
    else startTimer();

    document.addEventListener('visibilitychange', () => {
        if (document.getElementById('intro')) return;
        if (document.hidden) { clearTimeout(timer); bar.style.animation = 'none'; }
        else startTimer();
    });
}