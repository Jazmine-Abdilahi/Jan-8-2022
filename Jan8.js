// Sat Jan 8 started 11:04 - 1:04
// video 40 -  41

const friends = ['Jazmine', 'Luna', 'Suwaydah'];


const newLength = friend.push('cats');
console.log(friends);
console.log(newLength);

friends.unshift('Lala');
console.log(friends);

//Removing elements
friend.pop(); // Last
const popped = friend.pop();
console.log(popped);
console.log(friends);

friends.shift();
console.log(friends);

console.log(friends.indexOf('Luna'));
console.log(friends.indexOf('Suwaydah'));

friends.push(23);
console.log(friends.includes('Luna'));
console.log(friends.includes('Suwaydah'));
console.log(friends.includes(23));

if (friends.includes('Luna')) {
    console.log('You have a friend named Luna')
}


/////////////////////////////////////////////////////////////

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 :
        bill * 0.2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals)






