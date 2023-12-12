$(function(){
    var youjinslider=0;
    setInterval(function(){
        if(youjinslider<2){
            youjinslider++;
        }else{
            youjinslider=0;
        }
        $(".slide").eq(youjinslider).siblings().fadeOut();
        $(".slide").eq(youjinslider).fadeIn();
    },3000);
})