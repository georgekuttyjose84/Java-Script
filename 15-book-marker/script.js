const addBookMark = document.getElementById('show-model');
const model = document.getElementById('bookmarkModal');
const close = document.getElementById('closeModal');
const bookmarkForm = document.getElementById('bookmarkForm');

const title = document.getElementById('title');
const url = document.getElementById('url');

const section = document.querySelector('.bookmark');

// helper: ensure url has protocol so comparisons are consistent
function normalizeUrl(raw) {
    raw = (raw || '').trim();
    if (!raw) return raw;
    if (!/^https?:\/\//i.test(raw)) {
        return 'http://' + raw;
    }
    return raw;
}

let items = JSON.parse(localStorage.getItem('bookmarks')) || [];

// render existing bookmarks
if (items.length > 0) {
    items.forEach(item => {
        createDivElement(item.title, item.url);
    });
}

addBookMark.addEventListener('click', () => {
    model.classList.add('show');
    bookmarkForm.reset();
});

close.addEventListener('click', () => {
    model.classList.remove('show');
});

bookmarkForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let titleValue = title.value.trim();
    let urlValue = normalizeUrl(url.value);

    if (!titleValue || !urlValue) {
        alert('Please provide both title and URL.');
        return;
    }

    // prevent duplicate by URL
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    // optional: check duplicates

    let obj = { title: titleValue, url: urlValue };

    bookmarks.push(obj);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    createDivElement(titleValue, urlValue);
    model.classList.remove('show');
    bookmarkForm.reset();
});

function createDivElement(titleValue, urlValue) {
    // normalize url for element storage
    const normalizedUrl = normalizeUrl(urlValue);

    let h3 = document.createElement('h3');
    h3.textContent = titleValue;               // safer than innerHTML

    let a = document.createElement('a');
    a.setAttribute('href', normalizedUrl);
    a.setAttribute('target', '_blank');
    a.setAttribute('rel', 'noopener noreferrer');
    a.appendChild(h3);

    let div = document.createElement('div');
    div.appendChild(a);
    div.classList.add('bookmark-box');

    // store the url in a data attribute so the close handler can access it
    div.dataset.url = normalizedUrl;

    let divClose = document.createElement('div');
    divClose.classList.add('icon', 'closing-button');

    let icon = document.createElement('i');
    icon.classList.add('fas', 'fa-times');

    divClose.appendChild(icon);

    divClose.addEventListener('click', () => {
        // 1) Remove from DOM
        div.remove();

        // 2) Remove from localStorage using the data-url captured on the element
        const targetUrl = div.dataset.url;
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
        bookmarks = bookmarks.filter(item => item.url !== targetUrl);

       console.log(bookmarks);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    });

    div.appendChild(divClose);
    section.appendChild(div);
}
