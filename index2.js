$("#btn").on('click',function(){
    let a = Math.floor(Math.random() * 100);
    console.log(a);
})
$("#yes").on('click',function(){
    alert("Vậy chị khen em đẹp trai đi =)))");
})
// $("#no").on('click',function(){
//     alert("Không bấm đâu =)))");
// })
$('.box').mouseover(function(){
    let a = Math.floor(Math.random(100,135) * 135);
    $(".box").css("transform",`translate(${a}px,${a*2}px)`)
});