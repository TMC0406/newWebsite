let sinhVien = [
    {

        lastName: "Ngô",

        firstName: "Lan",

        age: 24,

        city: "Nha Trang",

        grade: "7.6"

    },
    {

        lastName: "Bùi",
        
        firstName: "Thu",
        
        age: 24,
        
        city: "Hà Nội",
        
        grade: "5.6"
        
        },
    {

        lastName: "Chu",

        firstName: "Nhân",

        age: 19,

        city: "Đà Nẵng",

        grade: "8.1"

    }
]
const addFullName = sinhVien.map(function(item,index,arr){
     item.fullName =item.lastName +" " + item.firstName;
   return item ;
})
console.log(sinhVien);
const pont8 = sinhVien.filter(function(item,index,arr){
    let core = +item.grade;
    let svdat = core > 8;
    return svdat ;
})
console.log(pont8);
const checkAdress = sinhVien.filter(function(item,index,arr){
    return item.city === "Hà Nội" ;
})
console.log(checkAdress);
function compare(a,b){
    const A = a.firstName.toUpperCase();
    const B = b.firstName.toUpperCase();
    let comparison = 0;
    if(A > B){
        comparison = 1;
    }else if(A < B){
        comparison = -1;
    }
    return comparison;

}
  sinhVien.sort (compare) ;
console.log(sinhVien);