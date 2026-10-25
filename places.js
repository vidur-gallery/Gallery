// ONE place to edit your content. Both photo.html and gallery.html read from here.
//
// key     : lowercase, no spaces (used in the URL: gallery.html?place=leicester)
// folder  : the folder name, spelled EXACTLY like the real folder (capitals matter online)
// photos  : file names inside that folder. The FIRST photo is the slider cover.
//
// To add photos:   photos: ['IMG1.JPG', 'IMG2.JPG', 'IMG3.JPG']
// To add a place:  copy one block, change the key, name, text and folder.

const places = {
    Albania: {
        name: 'Berat, Albania',
        text: 'My time in Albania.',
        folder: 'Albania',
        cover: 'IMG0.jpg', 
        photos: ['IMG1.jpg','IMG2.JPG']
    },
    Bath: {
        name: 'Bath, UK',
        text: 'My time in Bath.',
        folder: 'Bath',
        cover: 'IMG0.jpg', 
        photos: ['IMG1.jpg']
    },
    Belfast: {
        name: 'Belfast, UK',
        text: 'My time in Belfast.',
        folder: 'Belfast',
        cover: 'IMG0.jpg', 
        photos: ['IMG1.jpg','IMG2.jpg','IMG3.jpg','IMG4.jpg','IMG5.JPG']
    },
    Birmingham: {
        name: 'Birmingham, UK',
        text: 'My time in Birmingham.',
        folder: 'Birmingham',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    Cambridge: {
        name: 'Cambridge, UK',
        text: 'My time in Cambridge.',
        folder: 'Cambridge',
        cover: 'IMG1.jpg', 
        photos: ['IMG1.jpg']
    },
    Cornwall: {
        name: 'Cornwall, UK',
        text: 'My time in Cornwall.',
        folder: 'Cornwall',
        cover: 'IMG1.jpg', 
        photos: ['IMG1.jpg']
    },
    Edinbrugh: {
        name: 'Edinbrugh, UK',
        text: 'My time in Edingrugh.',
        folder: 'Edinbrugh',
        cover: 'IMG0.jpg', 
        photos: ['IMG1.JPG']
    },
    Leicester: {
        name: 'Leicester, UK',
        text: 'My time in Leicester.',
        folder: 'Leicester',
        cover: 'IMG1.jpg', 
        photos: ['IMG1.jpg']
    },
    London: {
        name: 'London, UK',
        text: 'My time in London.',
        folder: 'London',
        cover: 'IMG0.jpg', 
        photos: ['IMG1.jpg','IMG2.jpg']
    },
    Montenegro: {
        name: 'Montenegro',
        text: 'My time in Montenegro.',
        folder: 'Montenegro',
        cover: 'IMG1.jpg', 
        photos: ['IMG1.jpg','IMG2.jpg']
    },
    New_Castle: {
        name: 'New Castle Upon Tyne, UK',
        text: 'My time in New Castle Upon Tyne.',
        folder: 'New_Castle',
        cover: 'IMG0.jpg', 
        photos: ['IMG1.jpg']
    },
    Scotland: {
        name: 'Scotland, UK',
        text: 'My time in Scotland.',
        folder: 'Scotland',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    Skegness: {
        name: 'Skegness, UK',
        text: 'My time in Skegness.',
        folder: 'Skegness',
        cover: 'IMG0.jpg', 
        photos: ['IMG1.jpg','IMG2.jpg']
    },
    Stonehenge: {
        name: 'Stonehenge, UK',
        text: 'My time in Stonehenge.',
        folder: 'Stonehenge',
        cover: 'IMG1.JPG', 
        photos: ['IMG1.JPG']
    },
    Whales: {
        name: 'Whales, UK',
        text: 'My time in Whales.',
        folder: 'Whales',
        cover: 'IMG1.jpg', 
        photos: ['IMG1.jpg']
    },
    York: {
        name: 'York, UK',
        text: 'My time in York.',
        folder: 'York',
        cover: 'IMG0.jpg', 
        photos: ['IMG1.jpg']
    }
    
   
};
