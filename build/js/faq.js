/* FAQ js */

const FAQItem = [
    { nav: 'faq-nav1', des: 'faq-des1', plus: 'faq-plus1' },
    { nav: 'faq-nav2', des: 'faq-des2', plus: 'faq-plus2' },
    { nav: 'faq-nav3', des: 'faq-des3', plus: 'faq-plus3' },
    { nav: 'faq-nav4', des: 'faq-des4', plus: 'faq-plus4' },
    { nav: 'faq-nav5', des: 'faq-des5', plus: 'faq-plus5' },
];
FAQItem.forEach(({ nav}, index) => {
    document.getElementById(nav).addEventListener('click', function() {
        FAQItem.forEach(({ nav: otherNav, des: otherDes, plus:otherPlus }, otherIndex) => {
            const isActive = index === otherIndex;
            document.getElementById(otherDes).classList.toggle('active', isActive);
            document.getElementById(otherPlus).classList.toggle('hidden', isActive);
        });
    });
});
