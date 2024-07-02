// const decreaseBtn=document.getElementById('decreaseBtn')
// const increaseBtn=document.getElementById('increaseBtn')
// const decreaseBtn=document.getElementById('resetBtn')
// const CounterLebel=document.getElementById('CounterLabel')
// const decreaseBtn=document.getElementById('decreaseBtn')
let count=0

document.getElementById('decreaseBtn').onclick = function(){
    count--;
    //count-=1
    document.getElementById('CounterLabel').textContent = count;
}


document.getElementById('increaseBtn').onclick=function(){
    count++;
    //count+=1
    document.getElementById('CounterLabel').textContent=count;

}

document.getElementById('resetBtn').onclick=function(){
    count=0
    document.getElementById('CounterLabel').textContent=count;
}