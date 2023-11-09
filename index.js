let page=0;

const fetchNews = async (pages) => {
    let a = await fetch(`News.json`);
    let b = await a.json();

    let e=b.articles
    let str=''
    let limit=0;
    let pageno=pages;
    for(let i=(pageno==0?pageno=0:pageno=pageno*10);limit!=10;i++){
        str+=`<div class="newscard" style="width: 18rem;">
        <img src="${e[i].urlToImage}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${e[i].title}</h5>
          <p class="card-text">${e[i].description}</p>
          <a target="_blank" href="${e[i].url}" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>`
      limit++;
    }
    News_cards_container.innerHTML=str;

};
fetchNews(page);


const btn=(page)=>{
    if(page==0){
        pre.style.display="none";
    }else{
        pre.style.display="block";
    }
    if(page>=8){
        next.style.display="none";
    }else{
        next.style.display="block";
    }
    f_btn.style.display="block";
    s_btn.style.display="block";
    t_btn.style.display="block";
f_btn.innerHTML=`${page==0?f_btn.style.display="none":++page}`;
s_btn.innerHTML=`${(page+1)>9?s_btn.style.display="none":++page}`;
t_btn.innerHTML=`${(page+1)>9?t_btn.style.display="none":++page}`;
}
btn(page);





document.getElementById("f_btn").addEventListener('click',()=>{
    page=f_btn.innerHTML;
    fetchNews(page);
    btn(page);
})
document.getElementById("s_btn").addEventListener('click',()=>{
    page=s_btn.innerHTML;
    fetchNews(page);
    btn(page);
})
document.getElementById("t_btn").addEventListener('click',()=>{
    page=t_btn.innerHTML;
    fetchNews(page);
    btn(page);
})
document.getElementById("pre").addEventListener('click',()=>{
    page--;
    fetchNews(page);
    btn(page);
})
document.getElementById("next").addEventListener('click',()=>{
    page++;
    fetchNews(page);
    btn(page);
})

























/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////with the help of api///////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////



// let query = "india";
// let page=1;

// if(window.location.search =="" ){

// }else if((!window.location.search.split("?")[1].includes("&"))){
//     query = window.location.search.split("?")[1].split("=")[1];
// }else{
//     query = window.location.search.split("?")[1].split("&")[0].split("=")[1];
//     page = parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
// }


// let totalpages;
// const fetchNews = async (query, page) => {
    // let a = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=&pageSize=10&page=${page}`);
    // let b = await a.json();
    // console.log(b);
    // totalpages = Math.ceil(b.totalResults / 10);

    // let str=''
    // for(let item of b.articles){
    //     str+=`<div class="newscard" style="width: 18rem;">
    //     <img src="${item.urlToImage}" class="card-img-top" alt="...">
    //     <div class="card-body">
    //       <h5 class="card-title">${item.title}</h5>
    //       <p class="card-text">${item.description}</p>
    //       <a target="_blank" href="${item.url}" class="btn btn-primary">Go somewhere</a>
    //     </div>
    //   </div>`
    // }
    // News_cards_container.innerHTML=str;

// };
// fetchNews(query, page);


// /*----------------------------------------------
// ------------------------------------------------
// ---------------------btn setup------------------
// ------------------------------------------------
// ----------------------------------------------*/

// page==1?pre.href="#":pre.href=`?q=${query}&page=${page-1}`;
// page==totalpages?next.href="#":next.href=`?q=${query}&page=${page+1}`;

// f_btn.innerHTML=`${page+1}`;
// s_btn.innerHTML=`${page+2}`;
// t_btn.innerHTML=`${page+3}`;

// f_btn.href=`?q=${query}&page=${page+1}`
// s_btn.href=`?q=${query}&page=${page+1}`
// t_btn.href=`?q=${query}&page=${page+1}`
// 17216cd32df0441e81232b736ae0ac7b
///////////////////////////////////////////////





