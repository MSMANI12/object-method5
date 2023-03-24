const employ=[
{ name:"Dravid carlson",age:30},
{ name:"john Cena",age:34},
{ name:"Mike Sheridan",age:25},
{ name:"john Carte",age:50},
];
 let result=employ.filter(function(val){
    return val.age>=33;
 });
 console.log(result);