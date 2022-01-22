.function Add()
{
     var list2 = document.getElementById("list2");
     list2.style.display="inline-block";
     var x = prompt('Name','Note');
     if (x !=null)
     {
         document.getElementById("2").innerHTML = x;
     } 
}
.function Delete()
{
    var list2=document.getElementById("list2");
    list2.style.display="none";
}
