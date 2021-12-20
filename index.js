const companies = [
    {ComName: "Company One", category: "Finance", start: 1981, end: 2005},
    {ComName: "Company Two", category: "Retail", start: 1982, end: 2005},
    {ComName: "Company Three", category: "Auto", start: 1983, end: 2007},
    {ComName: "Company Four", category: "Retail", start: 1984, end: 2009},
    {ComName: "Company Five", category: "Tech", start: 1985, end: 2010},
    {ComName: "Company Six", category: "Finance", start: 1986, end: 2011},
    {ComName: "Company Seven", category: "Auto", start: 1991, end: 2013},
    {ComName: "Company Eight", category: "Tech", start: 1971, end: 2008},
    {ComName: "Company Nine", category: "Retail", start: 1961, end: 2015},
];

const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];
let sum = 0;


//Standard for Statement
for(let i = 0; i < ages.length; i++){    
    sum += ages[i];
}

console.log(sum);


//forEach
companies.forEach(function(company){
    console.log(company);
});


//filter
//Get all the ages from ages array which is 21 or older
const canDrink = ages.filter((age)=>age>=21);

console.log(canDrink);

//or we can do like this
const canDrink2 = ages.filter(function(age){
    if(age>=21){
        return true;
    }
});

console.log(canDrink2);

//From the companies object filter every companies with category retail
const retailCompany = companies.filter((comp)=>comp.category==="Retail");

console.log(retailCompany);

//From the companies object filter every companies starting within 80's
const startCompany = companies.filter((comp)=>comp.start>=1980 && comp.start < 1990);

console.log(startCompany);

//From the companies object filter every companies that lasted more than equal to 10 years
const durationCompany = companies.filter(function(comp){
    const duration = comp.end - comp.start;
    if(duration>=50){
        return true;
    }
});

console.log(durationCompany);

const durationCompany2 = companies.filter((comp)=>(comp.end-comp.start)>=50);

console.log(durationCompany2);

//Map Tutorial
//Create an array of Company Names
const testMap = companies.map((company)=>`${company.ComName} [${company.start} - ${company.end}]`);

console.log(testMap);

//Use map to find square and square root of array ages
const squareAge = ages.map((age)=> age * age);
const squareRootAge = ages.map((age)=> Math.sqrt(age));
console.log(`The square age is ${squareAge}`);
console.log(`The square Root age is ${squareRootAge}`);

//Use map to find square root of ages and multiply by 2
const agesTimesTwo = ages
                    .map((age)=>Math.sqrt(age))
                    .map((age)=>age*2);
console.log(agesTimesTwo);

//sort()
//Use the sort function to sort the companies on the basis of start date
const sortCompanies = companies.sort((a,b) => (a.start>b.start ? 1: -1));

console.log(sortCompanies);

const sortCompanies2 = companies.sort(function(a,b){
    if(a.start>b.start){
        return 1;
    }
    else{
        return -1;
    }
});

console.log(sortCompanies2);

//Use the sort() method to sort the ages array in ascending order
const sortedArray = ages.sort((a,b)=> a - b);

console.log(sortedArray);

//Use the sort() method to sort the ages array in descending order
const desSortedArray = ages.sort((a,b)=> b - a);

console.log(desSortedArray);

//Use the reduce() function to get the sum of array ages
const ageSum = ages.reduce((total, age)=>total+age,0);

console.log(ageSum);

//Use the reduce() function to get the sum of Years of Company
const totalYears = companies.reduce((total, company)=>total+(company.end - company.start),0);

console.log(totalYears);

//Combination of all methods to find total age
const combined = ages
                .map((age)=>age*2)
                .filter((age)=>age>=40)
                .sort((a,b)=>a-b)
                .reduce((total, age)=>total+age,0);

console.log(combined);

//Combination of all methods to find total years in companies object
const combined2 = companies
                .map((company)=>(company.end - company.start))
                .filter((company)=>company>=25)
                .sort((a,b)=>a-b)
                .reduce((total,company)=>total+company,0);

console.log('The years are '+combined2);

