window.onload=function(){
    var aLi=document.getElementsByTagName('li');
    for(var i=0; i<aLi.length; i++){
        aLi[i].onmouseover=function(){
            //鼠标经过一级菜单，二级菜单动画下拉显示出来
            var subNav=this.getElementsByTagName("ul")[0];
            subNav.className='';
            //alert(subNav.innerHTML);
        }
        //鼠标离开菜单，二级菜单动画收缩起来。
        aLi[i].onmouseout=function(){
            var subNav=this.getElementsByTagName("ul")[0];
            subNav.className="subNav";
        }
    }
}