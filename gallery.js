// Works even if imgfix.js did not load (then it just uses the path as it is)
const findImage = typeof loadFirst === 'function' ? loadFirst : p => Promise.resolve(p);

const $ = id => document.getElementById(id);

// Pick the place from the URL (case-insensitive); fall back to the first one
const requested = (new URLSearchParams(location.search).get('place') || '').toLowerCase();
const keys = Object.keys(places);
const key = keys.find(k => k.toLowerCase() === requested) || keys[0];
if (key.toLowerCase() !== requested) console.warn('Place not found in places.js:', requested);
const g = places[key];
const photos = g.photos.map(file => g.folder + '/' + file);
let current = 0;

// Place tabs
$('places').innerHTML = Object.entries(places).map(([k, p]) =>
    `<a href="gallery.html?place=${encodeURIComponent(k)}"${k === key ? ' class="active"' : ''}>${p.name.split(',')[0]}</a>`
).join('');

// Title and grid
document.title = g.name + ' | Gallery';
$('title').textContent = g.name;
$('subtitle').textContent = g.text;

photos.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = encodeURI(src);
    img.onerror = () => {                       // try other capitals/extensions once
        img.onerror = null;
        findImage(src).then(u => { photos[i] = u; img.src = encodeURI(u); });
    };
    img.alt = g.name + ' photo ' + (i + 1);
    img.loading = 'lazy';
    img.addEventListener('click', () => openLightbox(i));
    $('grid').appendChild(img);
});

// Lightbox
function show(i) {
    current = (i + photos.length) % photos.length;
    $('lb-img').src = encodeURI(photos[current]);
    $('lb-cap').textContent = g.name + ' (' + (current + 1) + '/' + photos.length + ')';
}
function openLightbox(i) { show(i); $('lightbox').hidden = false; }
function closeLightbox() { $('lightbox').hidden = true; }

document.querySelector('.lb-close').addEventListener('click', closeLightbox);
document.querySelector('.lb-prev').addEventListener('click', () => show(current - 1));
document.querySelector('.lb-next').addEventListener('click', () => show(current + 1));
$('lightbox').addEventListener('click', e => { if (e.target === $('lightbox')) closeLightbox(); });
document.addEventListener('keydown', e => {
    if ($('lightbox').hidden) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') show(current - 1);
    if (e.key === 'ArrowRight') show(current + 1);
});
