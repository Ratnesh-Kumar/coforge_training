
//var greaterThan10([1,2,3,11,12,13]);
var arr = [1,2,3,11,12,13]
const greaterThan10 = () =>{
    var selectedValue = []
    if(arr.length > 0){
        selectedValue = arr.filter((x) => x > 10)
    }
    console.log(selectedValue);
}

