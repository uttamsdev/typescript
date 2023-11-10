{

//spread operator
const bros : string[] = ['komol','omol']
const bros2 : string[] = ['tonmoy', 'nahid', 'rahat']

bros.push(...bros2) // bros2 er value gulo bros e add kore dicce ekta ekta vlaue niye

const mentors = {
    typescript: 'Mezba',
    redux: 'Mir',
    dbms: 'Mizan'
}

const mentors2 = {
    prisma: 'Firoz',
    next: 'Tonmoy',
    cloud: 'Nahid'
}
const mentorList = {
    ...mentors,
    ...mentors2
}

//rest operator 
const greetFriends = (...friends: string[]) => { //function call hole parameter theke value niye new array create korbe rest operator er maddome. rest operator nrew array make kore
    friends.forEach(friend => console.log(friend))
}
greetFriends("a","b","c")





}
