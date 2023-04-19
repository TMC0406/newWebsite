// const a  = [1,2,3,4];
// const b = [];
// let count = 0;
// let variable = a.includes(5)
// console.log(variable);
// // b.push(99, a[2]);
// // const c = a.unshift(88);
// // const d = a.splice(0,1)
// var myVar;
// function myFunction() {
//   myVar = setInterval(add, 1000);
// }
// function add() {
//     let d = new Date();
//     // $(".watch").text(d.getTime());
//     // console.log(d.getSeconds());
// // b.push(count++);
// //console.log("Hello!",count++);
// // console.log(b);
// }
// add()
// myFunction()

/*
hàm push
- hàm thêm 1 hay nhiều phần tử vào cuối mảng
- hàm có tham số truyền vào : danh sách các ptu , các phan tu cach nhau bang ","
ham nay co gia tri tra ve la: so phan tu mang sau khi them
- ham thay doi ham ban dau

1/. ham unshift
- hàm thêm 1 hay nhiều phần tử vào dau mảng
- hàm có tham số truyền vào : danh sách các ptu , các phan tu cach nhau bang ","
ham nay co gia tri tra ve la: so phan tu mang sau khi them
- ham thay doi ham ban dau
*/
/*
--ham pop
---de xoa phan tu o cuoi mang
---co khong tham so truyen vao
---ham nay co gia tri tra ve la: phan tu bi xoa
---ham thay doi ham ban dau

--ham shift
---de xoa phan tu o dau mang
---co khong tham so truyen vao
---ham nay co gia tri tra ve la: phan tu bi xoa
---ham thay doi ham ban dau


-- ham concat
--- de noi cac mang
---ham khong co tham so truyen vao
---ham co gia tri tra ve la:ham moi sau khi noi


-- ham reverse
--- de dao thu tu phan tu mang
---ham khong co tham so truyen vao
---ham co gia tri tra ve la: ham moi bi dao nguoc

--ham includes
---ham de kiem tra 1 phan tu trong mang co ton tai khong
---co tham so truyen vao la phan tu muon kiem tra
--- ham tra ve gia tri: true fale
---khong thay doi ham ban dau
cu phap : const variable = arr.includes(var)
*/
/*
foreach
find -- dùng để tìm kiếm phần tử đầu tiên thỏa mãn đk
fillter -- dùng để tìm kiếm tất cả phần tử tm
map
some
every
reduce
*/
const arr  = [1,2,3,4];
const b = [];
let count = 0;
/*
--map
---hàm dể duyệt mảng và biến đổi các phần tử trong mảng
---có giá trị truyền vào index ,item ,arr
---trả về một mảng mới

--find
--- dùng để tìm kiếm phần tử đầu tiên thỏa mãn đk
---ham co gia tri truyen vao la 1 callback funtion
----ham callback de kiem tra phan tu thoa man dk dau tien
----ham callback co tham so truyen vao laindex ,item ,arr
----ham callback tra ve kieu bolen true/false
      true: phan tu dau thoa man dk
      false: phan tu khong thoa
---nếu k có phần tử tm thì trả về undify
---hàm k làm thay đổi hàm ban đầu

--fillter
--- dùng để tìm kiếm tat ca phần tử  thỏa mãn đk
---nếu k có phần tử tm thì trả về undify
---hàm k làm thay đổi hàm ban đầu

*/
const newArr = arr.map(function(item,index,arr){
  if(index > 0){
   return  arr.push(item);
    // item === "ok"
  }
})
console.log(arr);

const newArr1 = arr.find(function(item,index,arr){
    return item > 2
})
console.log(newArr1);
const newArr2= arr.filter(function(item,index,arr){
  return item % 2 === 0
})
console.log(newArr2);