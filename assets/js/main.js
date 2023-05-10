const newsItem = document.querySelectorAll('.news__item');

newsItem.forEach((item) => {
    const newsHeader = item.querySelector('.news__item-header');

    newsHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.news-open');

        toggleItem(item);

        if(openItem && openItem!== item){
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const newsContent = item.querySelector ('.news__item-content');

    if(item.classList.contains('news-open')){
        newsContent.removeAttribute('style');
        item.classList.remove('news-open');
    }else{
        newsContent.style.height = newsContent.scrollHeight + 'px';
        item.classList.add('news-open');
    }
};