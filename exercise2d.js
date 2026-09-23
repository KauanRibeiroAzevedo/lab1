ages = [3,451,341,4];

let myArray = ages.map(
    (age)=>{
        if(age < 70){
            return age*2;
        }else{
        return age;
        }
    }
)

console.log(myArray);