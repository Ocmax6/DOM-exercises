  
//   const Mountains = [ 
//         {name: "kilimanjaro", height: 5895, place: "Tanzania"}, 
//         {name: "evarest", height: 8848, place:"Nepal"}, 
//         {name:"mount Fuji", height: 3776, place: "Japan"}, 
//         {name:"Vaalserberg", height: 323, place: "Netherlands"}, 
//         {name:"Denali", height: 6168, place: "United States"}, 
//         {name:"Popocatepetl", height: 5465, place: "Mexico"}, 
//         {name:"Mont Blanc", height: 4808, place: "Italy/France"} 
//     ]; 
//         console.log(Mountains); 
//         let mountain = document.getElementById("mountain"); 
//         let table = document.createElement("table"); 
//         let tableHead = document.createElement("th"); 
//         let tableData = document.createElement("td"); 

//         let tableSum = ["Name", "Height", "Place"];
//         for (let n=0; n<3; n++) {
//             let data  = document.createElement('td');
//             data.innerHTML= tableSum[n];
//             tableHead.appendChild(data);
            
//         }

//         for (let i=0; i<3; i++){ 
//             tableData.innerHTML = tableData[i]; } 
//             table.appendChild(tableHead); 
//             document.body.appendChild(tableHead); 
//             let body = document.querySelector("body"); 
//             body.appendChild(table); 
//             for (let element of Mountains) { 
//                 let tableRow = document.createElement("tr") 
//                 tableRow.innerHTML = `
//                 <td> ${element.name} </td>    
//                 <td>${element.height} </td> 
//                 <td>  ${element.place} </td>` 

//                 table.appendChild(tableRow)} 





    const Mountains = [ 
        {name: "kilimanjaro", height: 5895, place: "Tanzania"}, 
        {name: "evarest", height: 8848, place:"Nepal"}, 
        {name:"mount Fuji", height: 3776, place: "Japan"}, 
        {name:"Vaalserberg", height: 323, place: "Netherlands"}, 
        {name:"Denali", height: 6168, place: "United States"}, 
        {name:"Popocatepetl", height: 5465, place: "Mexico"}, 
        {name:"Mont Blanc", height: 4808, place: "Italy/France"} 
    ];


    let table = document.createElement("table");
    let tableRow = document.createElement("tr");
    let = tableData = document.createElement("td");
    let tableHead = document.createElement("th");

    let datas = ["Names", "Height", "Place"];
    for(let i=0; i<3; i++) {
        let data = document.createElement("td");
        data.innerHTML = datas[i];
    }

    for(let mountain of Mountains) {
        
    }

   
    




// ************************* 2nd exercise ****************************
 
// function tagName(node, tag) {
//     node = node.nodeName.toLowerCase();
//     let output = document.querySelector(node).querySelectorAll(tag);
//    return output;
// }
// // tagName(document.body, "span");

// let para = document.querySelector('h1');
// console.log(tagName(para, 'span').length);





