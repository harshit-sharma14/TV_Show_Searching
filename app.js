const explore=document.querySelector('#Explore');
explore.addEventListener('click',function(){
    search_r.scrollIntoView({behavior:"smooth"})
})
const comedyimages= async function(){
    let i=1;
    
    
    while(i<=10){
        let j=i-1;
        const res=await axios.get(`https://api.tvmaze.com/shows/${i}`);
        
        
        const conatinerofimg=document.querySelectorAll('.img1');
        const onecontainer=conatinerofimg[j];
        const picture=document.createElement('img');
        const overlay=document.querySelectorAll('.overlay_img');
        const one_overlay=overlay[j];
        const overflow_h1=document.querySelectorAll('.overflow_h1');
        const one_overflow_h1=overflow_h1[j];
         one_overflow_h1.innerText=res.data.name;
        picture.src=res.data.image.medium;
        console.log(picture.src);
        
        if(picture.src){
            one_overlay.append(one_overflow_h1);
            onecontainer.append(one_overlay);
            
        onecontainer.append(picture);
        
        i++;
    }
        else{
            console.log("Errorror");
            continue;
        }

     }
}

const forms=document.querySelector('#Hi');
const img_container=document.querySelector('.container');
const comedy=document.querySelector('.comedy');
forms.addEventListener('submit', async function(e){
    e.preventDefault();
    
     const search=await forms.elements.query.value;
    const res=await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
   
    // console.log(res.data);
    image(res.data);
    
 
    
    
   
})
const search_r=document.querySelector('.search_r');
const heading=document.querySelectorAll('#heading');

const main2=document.querySelector('.main2');

const image=(shows)=>{
    search_r.innerHTML="";
    
    for(let res of shows){
        // console.log(res.show.image.medium);
        create(res.show,0);
        
   
}

}



   
let c_genre=['.comedy'];
let names = ['Young Shedlon', 'the Office','Extraodinary','Mr. Bean','The Big Bang Theory'];
let action_movies=['Loki','Andor','The Flash','Secret invasion','Daredevil'];
let horror_shows=['Supernatural','The stand','Goosebumps','The Village','Under the Dome'];
async function  comedyHome(){
    for (let i = 0; i < names.length; i++) {
        const a = names[i];
        const res1=await axios.get(`https://api.tvmaze.com/search/shows?q=${a}`)
        let b=res1.data[0];
        create(b.show,1);
        // console.log(b.show);
        
        
        
        
    }
}
async function  actionHome(){
    for (let i = 0; i < action_movies.length; i++) {
        const a = action_movies[i];
        const res1=await axios.get(`https://api.tvmaze.com/search/shows?q=${a}`)
        let b=res1.data[0];
        create(b.show,2);
        // console.log(b);
        
        
        
        
    }
}
async function  horror_func(){
    for (let i = 0; i < horror_shows.length; i++) {
        const a = horror_shows[i];
        const res1=await axios.get(`https://api.tvmaze.com/search/shows?q=${a}`)
        let b=res1.data[0];
        create(b.show,3);
        // console.log(b.show);
        
        
        
        
    }
}
comedyHome();
actionHome();
horror_func();
async function cast_func(t) {
    const a = await axios.get(`https://api.tvmaze.com/shows/${t.id}/cast`);
    let c = a.data;
    let b = "";
    for (let i = 0; i < 10 && i < c.length; i++) {
        b = b + c[i].person.name + ", ";  // Add a space to separate names
    }
    
    return b;  // Optional: return the concatenated string if needed
}

function create(t,genre_no){
    // console.log(t);
    let imgurl=false;
    if(t.image){
        imgurl=t.image.medium;
    }
    
    
    if(imgurl){// img.src=imgurl;
        const screen_content=document.querySelector('.screen_content');
        const screen=document.querySelector('.screen');
        const nav=document.querySelector('.nav');
        const one=document.querySelector('.one');
        const two=document.querySelector('.two');
        const three=document.querySelector('.three');
        const img=document.createElement('IMG');
        img.src=imgurl;
        const body=document.querySelector('body');
        const summary_heading=document.createElement('h1');
        const overlay_div=document.createElement('div');
        const div=document.createElement('div');
        const search_r=document.querySelector('.search_r');
        const action=document.querySelector('.action');
        const horror=document.querySelector('.horror');
        const text_overlay=document.createElement('div');
        const overlay_h1=document.createElement('h4');
        const pop=document.createElement('div');
        const h1div=document.createElement('div');
        const span=document.createElement('span');
        const rating=document.createElement('span');
        const pic=document.createElement('div');
        const content=document.createElement('div');
        const content_h1=document.createElement('h1');
        const intro=document.createElement('div');
        const content_h3=document.createElement('div');
        const content_h32=document.createElement('div');
        const cast=document.createElement('div');
        const cast_info=document.createElement('p');
        const p=document.createElement('div');
        const pic_img=document.createElement('img');
        const like=document.createElement('div');
        summary_heading.innerHTML='Summary';
        rating.innerText=`Rating ${t.rating.average}`;
        overlay_h1.innerText=t.name;
        text_overlay.append(overlay_h1);
        text_overlay.append(rating);
        div.append(img);
        div.append(overlay_div);
        overlay_div.append(text_overlay);
        overlay_div.classList.add("overlay");
        span.innerHTML='<i class="ri-close-line"></i>';
        div.classList.add("container");
        pop.classList.add('pop');
        pic.classList.add('pic');
        content.classList.add('content');
        intro.classList.add('intro');
        content_h3.classList.add('content_h3');
        h1div.classList.add('h1div')
        content_h32.classList.add('content_h32');
        p.classList.add('para');
        pic_img.src=imgurl;
        pic.append(pic_img);
        content_h1.innerText=t.name;
        content_h32.innerText=`Rating ${t.rating.average}`;
        cast.append(cast_info);
        cast_info.innerHTML='<b>CAST</b>';
        
        async function getCastArray(t) {
            let cast_arr = await cast_func(t);
            // cast.innerHTML=`<p>${cast_arr}</p>`;
            cast.innerHTML=`<span>CAST</span> <p>${cast_arr}</p>`
        }
        getCastArray(t);
        cast.classList.toggle('cast')
        let genre=t.genres;
        let genres_content="";
        for(let i of genre){
            genres_content=genres_content+i+" ";
        }
        content_h3.innerText=genres_content;
        
        p.innerHTML=` <h1>Summary</h1> ${t.summary}`;
        
        pop.append(pic);
        h1div.append(content_h1);
        h1div.append(span);
        content.append(h1div);
        pop.append(content);

        intro.append(content_h3);
        intro.append(content_h32);
        intro.append(cast);
        content.append(intro);
        content.append(p);
        // comedy.append(div);
        if(genre_no==0){
            screen.style.display='auto';
            screen_content.style.display='none';
            search_r.style.height='auto';
            comedy.style.height='0%';
            comedy.style.display='none';
            action.style.display='none';
            horror.style.display='none';
            one.style.display='none';
            two.style.display='none';
            three.style.display='none';
            nav.style.background='linear-gradient(to right, #0505de, #676666)';
            nav.style.borderBottom='2px solid white';
            

            for(let i=0;i<heading.length;i++){
                heading[i].style.display='none';
            }
            search_r.append(div);
        }
        else if(genre_no===1){
            comedy.append(div);
        }
        else if(genre_no===2){
            action.append(div);
        }
        else if(genre_no==3){
            horror.append(div);
        }

    overlay_div.addEventListener('click',function(){
        const existingpop=document.querySelector('.pop');
   
        if(existingpop){
            existingpop.remove();
        }
    
        document.body.append(pop);
    span.addEventListener('click',function(){
        const existingpop=document.querySelector('.pop');
        existingpop.remove();
    })
    
    
})


}
}