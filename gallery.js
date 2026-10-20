const $ = id => document.getElementById(id);

// Pick the place from the URL (case-insensitive); fall back to the first one
const requested = (new URLSearchParams(location.search).get('place') || '').toLowerCase();
const key = places[requested] ? requested : Object.keys(places)[0];
const g = places[key];
const photos = g.photos.map(file => encodeURI(g.folder + '/' + file));
let current = 0;

// Place tabs
$('places').innerHTML = Object.entries(places).map(([k, p]) =>
    `<a href="gallery.html?place=${k}"${k === key ? ' class="active"' : ''}>${p.name.split(',')[0]}</a>`
).join('');

// Title and grid
document.title = g.name + ' | Gallery';
$('title').textContent = g.name;
$('subtitle').textContent = g.text;

photos.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = g.name + ' photo ' + (i + 1);
    img.loading = 'lazy';
    img.addEventListener('click', () => openLightbox(i));
    $('grid').appendChild(img);
});

// Lightbox
function show(i) {
    current = (i + photos.length) % photos.length;
    $('lb-img').src = photos[current];
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
