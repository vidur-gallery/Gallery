// ONE place to edit your content. Both photo.html and gallery.html read from here.
//
// key     : lowercase, no spaces (used in the URL: gallery.html?place=leicester)
// folder  : the folder name, spelled EXACTLY like the real folder (capitals matter online)
// photos  : file names inside that folder. The FIRST photo is the slider cover.
//
// To add photos:   photos: ['IMG1.JPG', 'IMG2.JPG', 'IMG3.JPG']
// To add a place:  copy one block, change the key, name, text and folder.

const places = {
    albania: {
        name: 'Berat, Albania',
        text: 'My time in Albania.',
        folder: 'Albania',
        cover: 'IMG.JPG', 
        photos: ['IMG1.JPG','IMG2.JPG']
    },
    bath: {
        name: 'Bath, UK',
        text: 'My time in Bath.',
        folder: 'Bath',
        cover: 'IMG.JPG', 
        photos: ['IMG1.JPG']
    },
    belfast: {
        name: 'Belfast, UK',
        text: 'My time in Belfast.',
        folder: 'Belfast',
        cover: 'IMG.JPG', 
        photos: ['IMG1.JPG','IMG2.JPG','IMG3.JPG','IMG4.JPG','IMG5.JPG']
    },
    birmingham: {
        name: 'Birmingham, UK',
        text: 'My time in Birmingham.',
        folder: 'Birmingham',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    cambridge: {
        name: 'Cambridge, UK',
        text: 'My time in Cambridge.',
        folder: 'Cambridge',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    Cornwall: {
        name: 'Cornwall, UK',
        text: 'My time in Cornwall.',
        folder: 'Cornwall',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    edinbrugh: {
        name: 'Edinbrugh, UK',
        text: 'My time in Edingrugh.',
        folder: 'Edinbrugh',
        cover: 'IMG.JPG', 
        photos: ['IMG1.JPG']
    },
    leicester: {
        name: 'Leicester, UK',
        text: 'My time in Leicester.',
        folder: 'Leicester',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    london: {
        name: 'London, UK',
        text: 'My time in London.',
        folder: 'London',
        cover: 'IMG.JPG', 
        photos: ['IMG1.JPG','IMG2.JPG']
    },
     montenegro: {
        name: 'Montenegro',
        text: 'My time in Montenegro.',
        folder: 'Montenegro',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG','IMG2.JPG']
    },
    new_castle: {
        name: 'New Castle Upon Tyne, UK',
        text: 'My time in New Castle Upon Tyne.',
        folder: 'New_Castle',
        cover: 'IMG.PNG', 
        photos: ['IMG1.PNG']
    },
    scotland: {
        name: 'Scotland, UK',
        text: 'My time in Scotland.',
        folder: 'Scotland',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    skegness: {
        name: 'Skegness, UK',
        text: 'My time in Skegness.',
        folder: 'Skegness',
        cover: 'IMG.JPG', 
        photos: ['IMG1.JPG','IMG2.JPG']
    },
    stonehenge: {
        name: 'Stonehenge, UK',
        text: 'My time in Stonehenge.',
        folder: 'Stonehenge',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    whales: {
        name: 'Whales, UK',
        text: 'My time in Whales.',
        folder: 'Whales',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    York: {
        name: 'York, UK',
        text: 'My time in York.',
        folder: 'York',
        cover: 'IMG.JPG', 
        photos: ['IMG1.JPG']
    }
    
   
};
