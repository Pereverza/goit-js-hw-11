import{a as l,S as m,i as n}from"./assets/vendor-DXaqCXe3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";const g=async o=>{const{data:r}=await l.get("",{params:{key:"49383072-7b2484b2a76b3ff56b3486fe5",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}});return r.hits},c=document.querySelector(".gallery"),u=document.querySelector(".loader");let y=new m(".gallery a",{captionsData:"alt",captionDelay:250});function h(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}function b(){c.innerHTML=""}function w(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:p,downloads:f})=>`
        <li class="gallery-item">
            <a href="${a}">
                <img src="${i}" alt="${e}" loading="lazy">
            </a>
             <ul class="info">
                <li class="description"><span>Likes</span> ${t}</li>
                <li class="description"><span>Views</span> ${s}</li>
                <li class="description"><span>Comments</span> ${p}</li>
                <li class="description"><span>Downloads</span> ${f}</li>
             </ul>
        </li>`).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}const d=document.querySelector(".form"),S=d.querySelector("input");d.addEventListener("submit",async o=>{o.preventDefault();const r=S.value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}await b(),h();try{const i=await g(r);if(i.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}await w(i)}catch(i){n.error({title:"Error",message:"Oops! Something went wrong. Please try again later.",position:"topRight"}),console.error("Error fetching images:",i)}finally{L()}});
//# sourceMappingURL=index.js.map
