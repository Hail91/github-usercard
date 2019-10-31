

/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
  
    

      


      axios.get("https://api.github.com/users/Hail91")
      .then(res => {
        const myCard = gitInfo(res);
        const newCard = document.querySelector('.cards');
        newCard.appendChild(myCard);
      });

      




      //Functional component

    function gitInfo(createCard) {
      
      // Creating Elements

      const card = document.createElement('div');
      const cardData = document.createElement('div');
      const userImg = document.createElement('img');
      const userName = document.createElement('h3');
      const userID = document.createElement('p');
      const userLoc = document.createElement('p');
      const userProf = document.createElement('p');
      const userPage = document.createElement('a');
      const userFollowers = document.createElement('p');
      const userFollowing = document.createElement('p');
      const userBio = document.createElement('p');

      // Add Classes 

      card.classList.add('card');
      cardData.classList.add('card-info');
      userName.classList.add('name');
      userID.classList.add('username');

      // Append elements

      card.appendChild(userImg);
      card.appendChild(cardData);
      cardData.appendChild(userName);
      cardData.appendChild(userID);
      cardData.appendChild(userLoc);
      cardData.appendChild(userProf);
      cardData.appendChild(userPage);
      cardData.appendChild(userFollowers);
      cardData.appendChild(userFollowing);
      cardData.appendChild(userBio);

      // Adding Content 

      userImg.src = createCard.data.avatar_url;
      userName.textContent = createCard.data.name;
      userID.textContent = createCard.data.login;
      userLoc.textContent = createCard.data.location;
      userPage.textContent = createCard.data.html_url;
      userFollowers.textContent = `Followers: ${createCard.data.followers}`;
      userFollowing.textContent = `Following: ${createCard.data.following}`;
      userBio.textContent = createCard.data.bio;

      return card;
    }
         
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

  axios.get("https://api.github.com/users/Hail91")
  .then(res => {
      
  });

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
