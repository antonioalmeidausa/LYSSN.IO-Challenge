let usersArray = [{"fname":"esme", "lname":"sanchez", "id":1892038, "isTherapist":true},

{"fname":"rick", "lname":"jeps", "id":1894024, "isTherapist":false},

{"fname":"angie", "lname":"lange", "id":1982403, "isTherapist":false},

{"fname":"renat", "lname":"gros", "id":1894039, "isTherapist":true},

{"fname":"bettino", "lname":"yang", "id":3789204, "isTherapist":true}];


console.log(usersArray);

divContainer = document.querySelector("#container");

let usersHTML = ``;

usersArray.forEach(user => {
    const { fname, lname} = user;

    fnameCap = fname.charAt(0).toUpperCase() + fname.slice(1);
    lnameCap = lname.charAt(0).toUpperCase() + lname.slice(1);

    const userHTML = `<p class="pUser">
    ${lnameCap}, ${fnameCap}</p>`;

    usersHTML += userHTML;
});

divContainer.innerHTML = usersHTML;


console.log(container);