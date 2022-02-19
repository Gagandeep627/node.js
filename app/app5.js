// importing modules-->


const name = "hello world";

function average(arr){
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return sum/arr.length;
}
// for exporting function-->
// now function is exported so it will now show in
// will export only functions of some kind only:


// module.exports = name;


// exporting in the formate of objects-->

// module.exports = {

//     avg : average,
//     nme : name,
// }


// xporting in the formate of singley func, var, attributes

module.exports.name = name;







