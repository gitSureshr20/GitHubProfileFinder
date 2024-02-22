
const profileName = document.querySelector(".profile-name");
const searchBtn = document.querySelector(".search-btn");
const gitHubProfileDetails = document.querySelector(".GitHub-Profile-Details");
const BASE_URL = "https://api.github.com/users/";
const loading = document.querySelector(".loading-text");

function showLoader(){
    loading.classList.add("show");
    gitHubProfileDetails.classList.add("hide")
}
function removeLoader(){
    loading.classList.remove("show")
    gitHubProfileDetails.classList.remove("hide")
}


    
async function getGitHubProfileDetails(){
   
    showLoader();
    if(profileName.value!==""){
        const response = await fetch(`${BASE_URL}${profileName.value}`)
        const result = await response.json();
      
        if(result){
            removeLoader();
            showGitHubDetails(result)
        }
    }
    else{
        loading.textContent="Please Enter Profile Name";
    }
 
    profileName.value="";
}


function showGitHubDetails(getDetails){
    const { login, avatar_url, public_repos, followers, following ,name} =
    getDetails;
    gitHubProfileDetails.innerHTML=`
  
    <p class="name">Name : ${name}</p>
    <p class="Gitname">Github Name : ${login}</p>
    <img src=${avatar_url} alt=${login} class="gitPic">
    <div class="gitDetails">
    <p class="repo">Repos : ${public_repos}</p>
    <p class="followers">Followers : ${followers}</p>
    <p class="following">Following : ${following}</p>
    </div>
    `
}
searchBtn.addEventListener("click",getGitHubProfileDetails)