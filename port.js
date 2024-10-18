const learnMoreBtn = document.getElementById('learn-more-btn');
const learnMoreContent = document.getElementById('learn-more-content');


learnMoreBtn.addEventListener('click', () => {
    learnMoreContent.src = 'learn-more-content.html';
});