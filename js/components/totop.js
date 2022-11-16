let tarTotop = document.getElementById('totop');
console.log(tarTotop);
// tarTotop.addEventListener('click', () => {
//     console.log('suveike');
// });

tarTotop.onclick = function () {
    console.log('suveike');
    let tarPlaylist = document.getElementById('playlist');

    if (tarPlaylist.style.display === 'none') {
        tarPlaylist.style.display = 'block';
    } else {
        tarPlaylist.style.display = 'none';
    }

    // tarPlaylist.style.display = HTML;
};
