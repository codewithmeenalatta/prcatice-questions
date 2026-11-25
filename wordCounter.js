// const fs = require("fs");
// const text = fs.readFileSync("test.txt" , "utf-8");
// const LowerText = text.toLowerCase();
// const words = LowerText.match(/\b[a-z0-9]+\b/g) || [];
// const wordCount = {};
// for(const word of words){
//     wordCount[word] = (wordCount[word] || 0) + 1
// }
// const sortedWords = Object.entries(wordCount)
// .sort((a,b) => b[1] -a[0]);
// const top10Words = sortedWords.slice(0, 10);
// console.log("top 10 most common words");
// top10Words.forEach(([word, count] , index) => {
//     console.log(`${index + 1} , ${word} : ${count}`)
// });



const fs = require("fs");
const data = fs.readFileSync("student.csv" , "utf-8");
const lines = data.trim().split(/\r?\n/);
const headers = lines[0].split(",").map((col) => col.trim().toLowerCase());
const salaryIndex = headers.indexOf("salary");
let total = 0;
let count = 0;
for(let i = 1; i < lines.length; i++){
    const values = lines[i].split(",");
    const salary = parseFloat(values[salaryIndex]?.trim());
    if(!isNaN(salary)){
        total += salary;
        count++;
    }
}

if(count > 0){
    const average = total / count;
    console.log("Avarage Salary" , average);
}else{
    console.log("No data found")
}