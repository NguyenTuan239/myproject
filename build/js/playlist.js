/* Detail movie page js */
const playlistNav1 = document.getElementById('playlist-nav-1');
const playlistNav2 = document.getElementById('playlist-nav-2');
const playlistNav3 = document.getElementById('playlist-nav-3');
const playlistDes1 = document.getElementById('playlist-des-1');
const playlistDes2 = document.getElementById('playlist-des-2');
const playlistDes3 = document.getElementById('playlist-des-3');

playlistNav1.addEventListener('click', function() {
    this.classList.add('toggle');
    playlistNav2.classList.remove('toggle');
    playlistNav3.classList.remove('toggle');
    playlistDes1.classList.remove('hidden');
    playlistDes2.classList.add('hidden');
    playlistDes3.classList.add('hidden');
});

playlistNav2.addEventListener('click', function() {
    this.classList.add('toggle');
    playlistNav1.classList.remove('toggle');
    playlistNav3.classList.remove('toggle');
    playlistDes1.classList.add('hidden');
    playlistDes2.classList.remove('hidden');
    playlistDes3.classList.add('hidden');
});

playlistNav3.addEventListener('click', function() {
    this.classList.add('toggle');
    playlistNav1.classList.remove('toggle');
    playlistNav2.classList.remove('toggle');
    playlistDes1.classList.add('hidden');
    playlistDes2.classList.add('hidden');
    playlistDes3.classList.remove('hidden');
});