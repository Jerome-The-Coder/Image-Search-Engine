const apikey = 'waok7-ih0CN-6OLuIOrNteJ5PNjpxbUL1LAAS8LDEBU';
const search = document.querySelector('input')
const btn1 = document.getElementById('searchbtn')
const results = document.getElementById('results')
let page = 1;

async function getImages() {
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${search.value}&client_id=${apikey}`;
    const res = await fetch(url).then(data => data.json());
    if (page === 1) {
        results.innerHTML = "";
    }
    res.results.map(data => {
      const div  = document.createElement('div')
      div.classList.add('img')
      const img = document.createElement('img')
      img.src = data.urls.small;
      img.alt = data.alt_description
      const lnk = document.createElement('a')
      lnk.textContent = data.alt_description;
      results.appendChild(div)
      div.appendChild(img)
      div.appendChild(lnk)
    })
    page++;
    if (page > 1) {
        btn2.style.display = 'block';
    }
}

addEventListener('submit', ev => {
    ev.preventDefault()
    if(!search.value) return;
    page = 1;
    getImages()
})
btn2.addEventListener('click', ev => {
    ev.preventDefault()
    getImages()
})