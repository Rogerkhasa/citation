const message = [
    'Je suis amoureux de toi cherie.',
    'Seul l\'amour peut garder quelqu\'un vivant.',
    'S\'aimer soi-même, c\'est l\'assurance d\'une longue histoire d\'amour.',
    "L'homme veut être le premier amour de la femme, alors que la femme veut être la dernière.",
    "La raison parle, mais l'amour chante.",
    "L'homme a toujour besoin et d'amour .",
    "L'amour consiste à être bête ensemble."
];


const random1 = message[(Math.floor(Math.random() * (message.length)))];
//console.log(random1);


    const aff = `<div class="content"><p>${random1}</p></div>`;
    document.getElementById('app').innerHTML= aff;

    
