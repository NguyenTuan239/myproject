// My account js
const myAccount = [
    { nav: 'myAccount-nav-1', des: 'myAccount-des-1' },
    { nav: 'myAccount-nav-2', des: 'myAccount-des-2' },
    { nav: 'myAccount-nav-3', des: 'myAccount-des-3' },
    { nav: 'myAccount-nav-4', des: 'myAccount-des-4' },
    { nav: 'myAccount-nav-5', des: 'myAccount-des-5' },
    { nav: 'myAccount-nav-6', des: 'myAccount-des-6' },
];

myAccount.forEach(({ nav, des }, index) => {
    document.getElementById(nav).addEventListener('click', () => {
        myAccount.forEach(({ nav: otherNav, des: otherDes }, otherIndex) => {
            const isActive = index === otherIndex;
            document.getElementById(otherNav).classList.toggle('netflix', isActive);
            document.getElementById(otherDes).classList.toggle('hidden', !isActive);
        });
    });
});