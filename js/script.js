function commonCall() {
    count();
    topFunction();
}

// **************************************************************************************************

function count() {
    $('.count').counterUp({
        delay: 10,
        time: 3000
    });
}
var myButton = document.getElementById('myBtn');

window.onscroll = () => {
    scrollFunction();
}

function scrollFunction(){
    
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = "block";
    }else{
        myButton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0; // safari browser;
    document.documentElement.scrollTop = 0; // chrome, Opera, Edge, FireFox 
}

