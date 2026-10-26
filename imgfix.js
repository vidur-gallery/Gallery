// GITHUB FIX: Windows ignores capital letters in file names, GitHub does not.
// If an image fails to load, try the same file with other extensions (.JPG / .jpg / .jpeg / .png).
// Folder names must still match exactly.
function loadFirst(path) {
    const m = path.match(/^(.*)\.(\w+)$/);
    const list = m
        ? [...new Set([m[2], m[2].toLowerCase(), m[2].toUpperCase(), 'jpg', 'JPG', 'jpeg', 'JPEG', 'png', 'PNG'])].map(e => m[1] + '.' + e)
        : [path];
    return new Promise(resolve => {
        let i = 0;
        (function next() {
            if (i >= list.length) return resolve(path);
            const im = new Image();
            im.onload = () => resolve(list[i]);
            im.onerror = () => { i++; next(); };
            im.src = encodeURI(list[i]);
        })();
    });
}
