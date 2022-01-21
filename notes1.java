function add()
{
    var list2=document.getElementById("list2");
    list2.style.display="inline-block";
    const x = prompt('Name','Note');
    if (x !=null)
    {
        document.getElementById("2").innerHTML = x;
    } 
}

function del()
{
    var list2=document.getElementById("list2");
    list2.style.display="none";
}
