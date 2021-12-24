
const dec = document.querySelector('#dec');
const p_tag = document.querySelector('.count');
var val = parseInt($(".count")).attr();

console.log("attr " +val);
$("#inc").click(function (){


})

function increment(e){

    // console.log(val)
    if(val >= 10){
        document.querySelector('.count').style.color = 'red';
    }
    
    var result = ++val;
    console.log(result);
    p_tag.innerHTML = result;
    e.preventDefault();
}


function decrement(e){

    if(val == 0){
        alert('can\'t decrement value is Zero');
    }
    else{
        var result = --val;
        console.log(result);
         p_tag.innerHTML = result;
    }

    e.preventDefault();
}
