// Section 8 js
const handleSeasons = (seasons) => {
    seasons.forEach(({ nav, des }, index) => {
        document.getElementById(nav).addEventListener('click', function() {
            seasons.forEach(({ nav: otherNav, des: otherDes }, otherIndex) => {
                const isActive = index === otherIndex;
                document.getElementById(otherNav).classList.toggle('netflix', isActive);
                document.getElementById(otherDes).classList.toggle('hidden', !isActive);
            });
        });
    });
};

const homeSec8S1 = [
    { nav: 'sec8-season1', des: 'sec8-season1-content' },
    { nav: 'sec8-season2', des: 'sec8-season2-content' },
    { nav: 'sec8-season3', des: 'sec8-season3-content' },
];

const homeSec8S2 = [
    { nav: 'sec8-season1-s2', des: 'sec8-season1-content-s2' },
    { nav: 'sec8-season2-s2', des: 'sec8-season2-content-s2' },
    { nav: 'sec8-season3-s2', des: 'sec8-season3-content-s2' },
];

const homeSec8S3 = [
    { nav: 'sec8-season1-s3', des: 'sec8-season1-content-s3' },
    { nav: 'sec8-season2-s3', des: 'sec8-season2-content-s3' },
    { nav: 'sec8-season3-s3', des: 'sec8-season3-content-s3' },
];

handleSeasons(homeSec8S1);
handleSeasons(homeSec8S2);
handleSeasons(homeSec8S3);