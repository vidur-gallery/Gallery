// ONE place to edit your content. photo.html, gallery.html and map.html all read from here.
//
// key     : lowercase, no spaces (used in the URL: gallery.html?place=york)
// folder  : the folder name, spelled EXACTLY like the real folder (capitals matter on GitHub)
// cover   : image used on the slider only
// photos  : images shown in the gallery after clicking See More
// lat/lng : map pin position (find them by right-clicking a spot in Google Maps)
//
// To add a place: copy one block, change the key, name, text, folder, files and lat/lng.

const places = {
    albania: {
        name: 'Berat, Albania',
        text: 'My time in Albania.',
        folder: 'Albania',
        cover: 'IMG0.jpg',
        photos: ['IMG1.jpg', 'IMG2.JPG'],
        lat: 40.7058, lng: 19.9522
    },
    bath: {
        name: 'Bath, UK',
        text: 'My time in Bath.',
        folder: 'Bath',
        cover: 'IMG0.jpg',
        photos: ['IMG1.jpg'],
        lat: 51.3811, lng: -2.3590
    },
    belfast: {
        name: 'Belfast, UK',
        text: 'My time in Belfast.',
        folder: 'Belfast',
        cover: 'IMG0.jpg',
        photos: ['IMG1.jpg', 'IMG2.jpg', 'IMG3.jpg', 'IMG4.jpg', 'IMG5.JPG'],
        lat: 54.5973, lng: -5.9301
    },
    birmingham: {
        name: 'Birmingham, UK',
        text: 'My time in Birmingham.',
        folder: 'Birmingham',
        cover: 'IMG1.JPG',
        photos: ['IMG1.JPG'],
        lat: 52.4862, lng: -1.8904
    },
    cambridge: {
        name: 'Cambridge, UK',
        text: 'My time in Cambridge.',
        folder: 'Cambridge',
        cover: 'IMG1.jpg',
        photos: ['IMG1.jpg'],
        lat: 52.2053, lng: 0.1218
    },
    cornwall: {
        name: 'Cornwall, UK',
        text: 'My time in Cornwall.',
        folder: 'Cornwall',
        cover: 'IMG1.jpg',
        photos: ['IMG1.jpg'],
        lat: 50.2660, lng: -5.0527
    },
    edinburgh: {
        name: 'Edinburgh, UK',
        text: 'My time in Edinburgh.',
        folder: 'Edinbrugh',            // keep the spelling of your REAL folder
        cover: 'IMG0.jpg',
        photos: ['IMG1.JPG'],
        lat: 55.9533, lng: -3.1883
    },
    leicester: {
        name: 'Leicester, UK',
        text: 'My time in Leicester.',
        folder: 'Leicester',
        cover: 'IMG1.jpg',
        photos: ['IMG1.jpg'],
        lat: 52.6369, lng: -1.1398
    },
    london: {
        name: 'London, UK',
        text: 'My time in London.',
        folder: 'London',
        cover: 'IMG0.jpg',
        photos: ['IMG1.jpg', 'IMG2.jpg'],
        lat: 51.5072, lng: -0.1276
    },
    montenegro: {
        name: 'Montenegro',
        text: 'My time in Montenegro.',
        folder: 'Montenegro',
        cover: 'IMG1.jpg',
        photos: ['IMG1.jpg', 'IMG2.jpg'],
        lat: 42.7087, lng: 19.3744
    },
    new_castle: {
        name: 'New Castle Upon Tyne, UK',
        text: 'My time in New Castle Upon Tyne.',
        folder: 'New_Castle',
        cover: 'IMG0.jpg',
        photos: ['IMG1.jpg'],
        lat: 54.9783, lng: -1.6178
    },
    scotland: {
        name: 'Scotland, UK',
        text: 'My time in Scotland.',
        folder: 'Scotland',
        cover: 'IMG1.JPG',
        photos: ['IMG1.JPG'],
        lat: 56.4907, lng: -4.2026       // centre of Scotland; change to the exact spot you visited
    },
    skegness: {
        name: 'Skegness, UK',
        text: 'My time in Skegness.',
        folder: 'Skegness',
        cover: 'IMG0.jpg',
        photos: ['IMG1.jpg', 'IMG2.jpg'],
        lat: 53.1440, lng: 0.3360
    },
    stonehenge: {
        name: 'Stonehenge, UK',
        text: 'My time in Stonehenge.',
        folder: 'Stonehenge',
        cover: 'IMG1.JPG',
        photos: ['IMG1.JPG'],
        lat: 51.1789, lng: -1.8262
    },
    wales: {
        name: 'Wales, UK',
        text: 'My time in Wales.',
        folder: 'Whales',               // keep the spelling of your REAL folder
        cover: 'IMG1.jpg',
        photos: ['IMG1.jpg'],
        lat: 52.1307, lng: -3.7837
    },
    york: {
        name: 'York, UK',
        text: 'My time in York.',
        folder: 'York',
        cover: 'IMG0.jpg',
        photos: ['IMG1.jpg'],
        lat: 53.9591, lng: -1.0815
    }
};
