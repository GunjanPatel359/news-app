let query = "india";
let page=1;

if(window.location.search == "" ){

}else if((!window.location.search.split("?")[1].includes("&"))){
    query = window.location.search.split("?")[1].split("=")[1];
}else{
    query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
    page = parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
}


let totalpages;
const fetchNews = async (query, page) => {
    let a = await fetch(
        `https://newsapi.org/v2/everything?q=${query}&apiKey=17216cd32df0441e81232b736ae0ac7b&pageSize=10&page=${page}`
    );
    let b = await a.json();
    totalpages = Math.ceil(b.totalResults / 10);
    console.log(b);

    let str=''
    for(let item of b.articles){
        str+=`<div class="newscard" style="width: 18rem;">
        <img src="${item.urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <a target="_blank" href="${item.url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
    }
    News_cards_container.innerHTML=str;

};
fetchNews(query, page);


/*----------------------------------------------
------------------------------------------------
---------------------btn setup------------------
------------------------------------------------
----------------------------------------------*/

page==1?pre.href="#":pre.href=`?q=${query}&page=${page-1}`;
page==totalpages?next.href="#":next.href=`?q=${query}&page=${page+1}`;

f_btn.innerHTML=`${page+1}`;
s_btn.innerHTML=`${page+2}`;
t_btn.innerHTML=`${page+3}`;

f_btn.href=`?q=${query}&page=${page+1}`
s_btn.href=`?q=${query}&page=${page+1}`
t_btn.href=`?q=${query}&page=${page+1}`

/////////////////////////////////////////////////
