/* Detail movie page js */
const playlists = [
    { nav: 'playlist-nav-1', des: 'playlist-des-1' },
    { nav: 'playlist-nav-2', des: 'playlist-des-2' },
    { nav: 'playlist-nav-3', des: 'playlist-des-3' }
];

playlists.forEach(({ nav, des }, index) => {
    document.getElementById(nav).addEventListener('click', function() {
        playlists.forEach(({ nav: otherNav, des: otherDes }, otherIndex) => {
            const isActive = index === otherIndex;
            document.getElementById(otherNav).classList.toggle('toggle', isActive);
            document.getElementById(otherDes).classList.toggle('hidden', !isActive);
        });
    });
});

// Show the Creat New Playlist dialog
const creatPlaylistBt = document.getElementById('creat-playlist-bt');
const creatPlaylistDialog = document.getElementById('playlist-dialog');
const PlaylistDialogEx = document.getElementById('playlist-dialog-exit');
const PlaylistDialogCancel = document.getElementById('playlist-dialog-cancel');

creatPlaylistBt.addEventListener('click', () => {
    creatPlaylistDialog.style.display = 'block'
});
PlaylistDialogEx.addEventListener('click', () => {
    creatPlaylistDialog.style.display = 'none'
});
PlaylistDialogCancel.addEventListener('click', () => {
    creatPlaylistDialog.style.display = 'none'
});
// Close dialog if user clicks outside of it
window.addEventListener('click', function(event) {
    if (event.target === creatPlaylistDialog) {
        creatPlaylistDialog.style.display = 'none';
    }
});