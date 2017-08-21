// Reward after 30 days using for loops
var reward = 0;
var daily = 0.01;
for (var i = 1; i<=30; i++){
    reward += daily;
    daily *= 2;
}
console.log(reward);
// Bonus:
function daysNeeded(reward){
    sum = 0;
    var daily = 0.01;
    for (var i = 0; sum <= reward; i++){
        sum += daily;
        daily *= 2;
    }
    console.log(i);
}
// making $10000
daysNeeded(10000);
// making 1 billion
daysNeeded(1000000000);
// having Infinity
sum = 0;
var daily = 0.01;
for (var i = 0; sum != Infinity; i++){
    sum += daily;
    daily *= 2;
}
console.log(i);