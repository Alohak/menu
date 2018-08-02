window.onload = function(){
    var aA = document.getElementsByTagName('a');
    for(var i = 0;i < aA.length; i++){
        aA[i].onmouseover = function(){
            clearInterval(this.time);
            var This = this;
            This.time = setInterval(function(){
                This.style.width = This.offsetWidth + 8 + "px";
                if(This.offsetWidth >=150){
                    clearInterval(This.time);
                }
            },30)
        }

        aA[i].onmouseout = function(){
            clearInterval(this.time);
            var This = this;
            This.time = setInterval(function(){
                This.style.width = This.offsetWidth - 8 + "px";
                if(This.offsetWidth <=120){
                    This.style.width = "120px";
                    clearInterval(This.time);
                }
            },30)
        }
    }
}