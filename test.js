import index from './index.js'

// credential test array
const credentials = [
    ["Alex","Aranes","alexAranes@gmail.com",18],
    ["","De Jesus", "asdf@asdf.com.ph", 23],
    ["Steve", "Minecraft", "", 19],
    ["Hello","World","randomahh", 20],
    ["Gabriel", "Alunan", "gabAlu99@up.edu.ph", 21],
    ["NoLast", "", "noLast47@noLast.uk", 35],
    [""],
    ["bata", "pasaway", "bataPasaway@kid.com", 16],
    ["Ender", "Man", "chorusLover15@shulker.end", 31]
];

// iterate through the list of tests
credentials.forEach(element => {
    console.log(index.addAccount(element)?
        "valid":"invalid");
});