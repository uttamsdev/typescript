//destructuring

const user4 = {
    id: 1,
    name: {
        firstName: 'Uttam',
        middleName: 'Kumar',
        lastName: 'Saha'
    },
    contact: '01400014414',
    address: 'Dhaka'
}

const {contact, name:{middleName}} = user4;

//Array destructuring
const myFriends = ['alex','joe', 'roslex']
const [a, b, c] = myFriends;
const [,, bestFriend] = myFriends; //a,b k skip korbe
