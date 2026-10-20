const slide = document.querySelector('.slide');
const bar = document.querySelector('.progress span');
const DELAY = 7000;                      // time per slide in ms
let busy = false, timer;

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

// "See More" opens that place's gallery
slide.addEventListener('click', e => {
    const btn = e.target.closest('button[data-place]');
    if (btn) location.href = 'gallery.html?place=' + btn.dataset.place;
});

// Restart the progress bar and the auto-switch countdown
function startTimer() {
    clearTimeout(timer);
    bar.style.animation = 'none';
    bar.offsetWidth;                     // restart the animation
    bar.style.animation = `progress ${DELAY}ms linear forwards`;
    timer = setTimeout(() => go(1), DELAY);
}

// Move the slider one step (1 = next, -1 = previous)
function go(dir) {
    if (busy) return;
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

// Autoplay (paused while the tab is hidden, off if the device asks for less motion)
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
    startTimer();
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) { clearTimeout(timer); bar.style.animation = 'none'; }
        else startTimer();
    });
}