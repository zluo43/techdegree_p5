const random_api='https://randomuser.me/api/?results=12';
const gallery_div=document.getElementById('gallery');
const search_container=document.getElementsByClassName("search-container");
const modal_div=document.getElementsByClassName('modal-container');


//fetch request
async function fetchData(url) {
    try {
      const response = await fetch(url);
      return await response.json()
    } catch (error) {
      throw error;
    }
  };


 
//helper function

//get profile

async function getPeopleProfile(url) {
    const data = await fetchData(url);
    const profiles = data.results.map( async (person) => person);
    //console.log(profiles);

    console.log(Promise.all(profiles));
    return Promise.all(profiles)

    };
//create HTML trial 
let counter=0;
async function generateHTML(data){
    const data1 =data.map(item=> {
        const html=`<div class="card number${counter}">
        <div class="card-img-container">
            <img class="card-img" src=${item.picture.medium} alt="profile picture">
        </div>
        <div class="card-info-container">
           <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
           <p class="card-text">${item.email}</p>
           <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
        </div>
    </div>`
        counter=counter+1;
        return html}
    
    )


   gallery_div.insertAdjacentHTML("beforeend",data1);
   //console.log(data1);
   return data


};



    //create HTML
// async function generateHTML(data){
//     const profile_html =data.map(item=> 
//     `<div class="card">
//          <div class="card-img-container">
//              <img class="card-img" src=${item.picture.medium} alt="profile picture">
//          </div>
//          <div class="card-info-container">
//             <h3 id="name" class="card-name cap">${item.name.first} ${item.name.last}</h3>
//             <p class="card-text">${item.email}</p>
//             <p class="card-text cap">${item.location.city}, ${item.location.state}</p>
//          </div>
//      </div>`)


//     gallery_div.insertAdjacentHTML("beforeend",profile_html);
//     console.log(profile_html);
//     return data

// };


//create modal function 
// function create_modal(data){

//     const html_markup=

//         `<div class="modal-container">
//     <div class="modal">
//         <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
//         <div class="modal-info-container">
//             <img class="modal-img" src=${item.picture.large} alt="profile picture">
//             <h3 id="name" class="modal-name cap">${item.name.first} ${item.name.last}</h3>
//             <p class="modal-text">${item.email}</p>
//             <p class="modal-text cap">${item.location.city}</p>
//             <hr>
//             <p class="modal-text">${item.cell}</p>
//             <p class="modal-text">${item.location.street.name}</p>
//             <p class="modal-text">Birthday: ${item.dob.date}</p>
//         </div>
//     </div>`);
//     gallery_div.insertAdjacentHTML('afterend',html_markup);
    

// };
















//Eventlistener 

getPeopleProfile('https://randomuser.me/api/?results=12')
     .then(data=>generateHTML(data))
     .then((data)=>{
        gallery_div.addEventListener('click',(event)=>{
            const html=data.map(item=>{
                //console.log(item.name.first+' '+item.name.last);
                // console.log(event.target.textContent);
            if (event.target.tagName==='H3'){
                if (item.name.first+' '+item.name.last===event.target.textContent){
                    const html_markup=`<div class="modal-container">
    <div class="modal">
        <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
        <div class="modal-info-container">
            <img class="modal-img" src=${item.picture.large} alt="profile picture">
            <h3 id="name" class="modal-name cap">${item.name.first} ${item.name.last}</h3>
            <p class="modal-text">${item.email}</p>
            <p class="modal-text cap">${item.location.city}</p>
            <hr>
            <p class="modal-text">${item.cell}</p>
            <p class="modal-text">${item.location.street.name}</p>
            <p class="modal-text">Birthday: ${item.dob.date}</p>
        </div>
    </div>`;
    gallery_div.insertAdjacentHTML('afterend',html_markup)};
   
}}
);  const close_bttn=document.getElementById('modal-close-btn');
    close_bttn.addEventListener('click',()=>{
        gallery_div.nextElementSibling.remove();

    })


})});
 
     


//extra credit 



    


    


 




