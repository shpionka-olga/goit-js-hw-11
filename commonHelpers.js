import{i as n,S as p}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const g="45187829-ea2cd24770d3667653c872a41",u=e=>{const t="https://pixabay.com/api/?"+new URLSearchParams({key:g,q:encodeURIComponent(e),image_type:"photo",orientation:"horizontal",safesearch:!0,lang:"en",per_page:18});return fetch(t).then(a=>{if(!a.ok)throw console.error("error fetchImages"),new Error(a.status);return a.json()})};let i={message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",iconUrl:"data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.81 0.219C6.95056 0.0787966 7.14097 4.21785e-05 7.3395 0L16.6605 0C16.859 4.21785e-05 17.0494 0.0787966 17.19 0.219L23.781 6.81C23.9212 6.95056 24 7.14097 24 7.3395V16.6605C24 16.859 23.9212 17.0494 23.781 17.19L17.19 23.781C17.0494 23.9212 16.859 24 16.6605 24H7.3395C7.14097 24 6.95056 23.9212 6.81 23.781L0.219 17.19C0.0787966 17.0494 4.21785e-05 16.859 0 16.6605L0 7.3395C4.21785e-05 7.14097 0.0787966 6.95056 0.219 6.81L6.81 0.219ZM7.65 1.5L1.5 7.65V16.35L7.65 22.5H16.35L22.5 16.35V7.65L16.35 1.5H7.65Z' fill='%23FAFAFB'/%3E%3Cpath d='M6.969 6.969C7.03867 6.89915 7.12143 6.84374 7.21255 6.80593C7.30366 6.76812 7.40135 6.74866 7.5 6.74866C7.59865 6.74866 7.69633 6.76812 7.78745 6.80593C7.87857 6.84374 7.96133 6.89915 8.031 6.969L12 10.9395L15.969 6.969C16.0387 6.89927 16.1215 6.84395 16.2126 6.80621C16.3037 6.76847 16.4014 6.74905 16.5 6.74905C16.5986 6.74905 16.6963 6.76847 16.7874 6.80621C16.8785 6.84395 16.9613 6.89927 17.031 6.969C17.1007 7.03873 17.156 7.12151 17.1938 7.21262C17.2315 7.30373 17.2509 7.40138 17.2509 7.5C17.2509 7.59861 17.2315 7.69626 17.1938 7.78737C17.156 7.87848 17.1007 7.96127 17.031 8.031L13.0605 12L17.031 15.969C17.1007 16.0387 17.156 16.1215 17.1938 16.2126C17.2315 16.3037 17.2509 16.4014 17.2509 16.5C17.2509 16.5986 17.2315 16.6963 17.1938 16.7874C17.156 16.8785 17.1007 16.9613 17.031 17.031C16.9613 17.1007 16.8785 17.156 16.7874 17.1938C16.6963 17.2315 16.5986 17.2509 16.5 17.2509C16.4014 17.2509 16.3037 17.2315 16.2126 17.1938C16.1215 17.156 16.0387 17.1007 15.969 17.031L12 13.0605L8.031 17.031C7.96127 17.1007 7.87848 17.156 7.78737 17.1938C7.69626 17.2315 7.59861 17.2509 7.5 17.2509C7.40138 17.2509 7.30373 17.2315 7.21262 17.1938C7.12151 17.156 7.03873 17.1007 6.969 17.031C6.89927 16.9613 6.84395 16.8785 6.80621 16.7874C6.76847 16.6963 6.74905 16.5986 6.74905 16.5C6.74905 16.4014 6.76847 16.3037 6.80621 16.2126C6.84395 16.1215 6.89927 16.0387 6.969 15.969L10.9395 12L6.969 8.031C6.89915 7.96133 6.84374 7.87857 6.80593 7.78745C6.76812 7.69633 6.74866 7.59865 6.74866 7.5C6.74866 7.40135 6.76812 7.30366 6.80593 7.21255C6.84374 7.12143 6.89915 7.03867 6.969 6.969Z' fill='%23FAFAFB'/%3E%3C/svg%3E",titleLineHeight:"1.5",titleSize:"16px",theme:"dark",messageLineHeight:"1.5",messageSize:"16px"};const d=()=>{new p(".gallery-link",{captions:1,captionSelector:"img",captionType:"attr",captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlay:1,overlayOpacity:.8}).refresh()},C=document.querySelector(".gallery"),f=e=>{if(!e)return e;const[o,...t]=e;return`${o.toUpperCase()}${t.join("")}`},c=()=>{document.querySelector(".loader").classList.toggle("is-visible")},y=e=>{const o={likes:e.likes,views:e.views,comments:e.comments,downloads:e.downloads};return Object.keys(o).map(t=>`<li class= "description-item">
        <h2 class = "property-title">${f(t)}</h2>
        <p class = "property-value"> ${o[t]}</p>
        </li>`).join("")},h=e=>{if(parseInt(e.totalHits)>0){const o=e.hits.map(t=>`<li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
            <img class="gallery-image"
                src="${t.webformatURL}"
                alt="${t.tags}"
                data-source="${t.largeImageURL}"
            />
            <ul class="description-list">
             ${y(t)}
             </ul> 
        </a>
    </li>`).join("");c(),C.innerHTML=o,d()}else c(),n.error(i)},m=document.querySelector(".search-form"),L=document.querySelector(".gallery");m.addEventListener("submit",e=>{e.preventDefault(),L.innerHTML="";const o=m.search.value.trim();o?(c(),u(o).then(t=>h(t)).catch(t=>{i.message=t,n.error(i)})):(i.message="Fill search field",n.error(i))});
//# sourceMappingURL=commonHelpers.js.map