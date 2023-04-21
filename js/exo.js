console.log('test 1...2...1...2');

let hercule = {
    name: 'Hercule',
    job: 'Demi-dieu',
    age: 35,
    department: 75,
    arm: 60.5,
    inRelationship: true,
};

base.fillProfil(hercule);

let amisHercule = ['Jupiter', 'Junon', 'Alcmène', 'Déjanire'];

base.printFriends(amisHercule);

base.setBestFriend(amisHercule[0])

const title = document.createElement("h1")
const newContent = document.createTextNode('Vous consultez le profil de Hercule');
title.appendChild(newContent)