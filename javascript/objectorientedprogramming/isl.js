isl=[
    {team:"atk",played:17,won:11,draw:3,los:3,pts:36},
    {team:"mumbai",played:17,won:10,draw:4,los:3,pts:34},
    {team:"hyderabad",played:18,won:6,draw:9,los:3,pts:27},
    {team:"goa",played:18,won:6,draw:9,los:3,pts:27},
    {team:"northeast",played:18,won:6,draw:9,los:3,pts:27},
    {team:"benguluru",played:18,won:5,draw:7,los:6,pts:22},
    {team:"jamshed",played:18,won:5,draw:6,los:7,pts:21},
]

isl.map(tm=>tm.team.toUpperCase()).forEach(o=>console.log(o));

//sort with key "played"
//isl.sort((tm1,tm2)=>tm1.played>tm2.played?-1:1).forEach(tm=>console.log(tm));
isl.sort((tm1,tm2)=>tm1.played>tm2.played?-1:1).forEach(tm=>console.log(tm.team+" "+tm.played));

//find the highpoint team
var highpts=isl.reduce((tm1,tm2)=>tm1.pts>tm2.pts?tm1:tm2);
console.log(highpts);

///isl.reduce((tm1,tm2)=>tm1.pts>tm2.pts?tm1:tm2).forEach(tm=>console.log(tm));

//find highlos team//tytu
var highlos=isl.reduce((tm1,tm2)=>tm1.los>tm2.los?tm1:tm2);
console.log(highlos);

//insert new key status with value "qualified" if the team has pts>32 else "not qualified"
isl.filter(tm=>tm.pts>32?tm["status"]="qualified":tm["status"]="not qualified");
console.log(isl);