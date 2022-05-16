function getAdmins(map) {
    let admins = [];

    for ( [key, value] of map )  {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;

}

const users = new Map();
users.set('Nicolas', 'Admin');
users.set('Mara', 'Admin');
users.set('Nilton', 'Admin');
users.set('Carol', 'User');

console.log(getAdmins(users));

