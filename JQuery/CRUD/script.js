$(document).ready(function() {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/posts",
        //force to handle it as text
        dataType: "text",
        success: function(dt) {
    
            //data downloaded so we call parseJSON function 
            //and pass downloaded data
            
            // var placeholder = $.parseJSON(data);
            
            localStorage.setItem('data',dt);
            
            //now json variable contain data in json format
            //let's display a few items
        //     for (var i=0;i<json.length;++i)
        //     {
        //         $('#results').append('<div class="name">'+json[i].name+'</>');
        //     }
        }
    });
$("#formId").validate({
    rules: {
        name:{
            required: true,
            minlength:5
        },
        email: {
            required:true,
            email:true
        },
        contact: {
            required:true,
            minlength:10,
        }
    }
});
$("#edit").click(function(){
    if($('#formId').valid()){
    edit();
}
});
// window.load(createTable());
// Delete the row from the table and update the table contents
$(".delete").click(function(){
    // debugger;   
    // delData();
    // debugger;
    let clickNode = $(this).parent().parent();
   var ind=clickNode[0].childNodes[0].innerHTML;
//    coins
    console.log(ind);
    for(let i=0; i<myArr.length; i++)
    {
        if(ind==myArr[i].id)
        {
            myArr.splice(i,1);
        }
    }
    table.innerHTML = "";

   
    localStorage.setItem('data', JSON.stringify(myArr));
    createTable();
    // console.log( ind);
    // $(this).parent().parent().hide();
    // alert("Delete");
});
$("#addData").click(function(){
    if($("#formId").valid()){

        addData();
    }
});
$("#update").click(function(){
    if($('#formId').valid()){
    update();
    }
});
// $('#myTable').DataTable();

function addData(){
    let userId =document.getElementById("userId").value;
    let id =document.getElementById("id").value;
    let title =document.getElementById("title").value;
    let body =document.getElementById("body").value;
    let user ={"userId":userId,"id":id,"title":title,"body":body}
    myArr.push(user);
    // myArr.Arrpush(stringify(user));
    // let add=JSON.parse(localStorage.getItem('data'));
    myArr.push(user);
    // let stringifyuser = JSON.stringify(add);
  table.innerHTML="";
// localStorage.setItem('data',stringifyuser);
localStorage.setItem('data', JSON.stringify(myArr));
    createTable();

    // let row = document.createElement("tr");
    // for(let i = 0; i < 5;i++)
    // {
    //     const  col=document.createElement("td");
    //     const text=document.createTextNode(arr[i]); 
    //         col.appendChild(text);
    //     if(i==4){
    //         const deletBtn = document.createElement("button");
    //         deletBtn.innerHTML = "Delete";
    //         deletBtn.setAttribute('class', 'delete');
    //         col.appendChild(deletBtn);
    //         const updateBtn = document.createElement("button");
    //         updateBtn.innerHTML = "Update";
    //         updateBtn.setAttribute("id", "update");
    //         col.appendChild(updateBtn);
    //     }
    //     row.appendChild(col);
    // }
    // table.appendChild(row);
}


});
var myArr = JSON.parse(localStorage.getItem('data'));
var table=document.createElement("table");
table.setAttribute('id', 'myTable');
// Create table contents
function createTable(){
var myArr = JSON.parse(localStorage.getItem('data'));
const r= myArr.length;
const key=Object.keys(myArr[0]);
const c=key.length;
{
// const table=document.createElement("table");
    table.style="border-collapse: collapse;border:2px solid black;";
for(let i=0;i<=r;i++)
{
  const  row=document.createElement("tr");
    for(let j=0;j<=c;j++)
        {
            if(i==0){
                const  col=document.createElement("th");
                col.style="border:1px solid black";
                if(j!=c){
                    const text=document.createTextNode(key[j]); 
                    col.appendChild(text);   
                }
                else {
                    const text=document.createTextNode("Operations");  
                    col.appendChild(text);  
                }              
                row.appendChild(col);
            }
            else {
                const  col=document.createElement("td");
                col.style="border:1px solid black";
                if(j!=c){
                const value = Object.values(myArr[i-1])
                const text=document.createTextNode(value[j]);
                col.appendChild(text);
                }
            else {
                const deletBtn = document.createElement("button");
                deletBtn.innerHTML = "Delete";
                deletBtn.setAttribute('onclick', 'delData(this)');
                col.appendChild(deletBtn);
                const updateBtn = document.createElement("button");
                updateBtn.innerHTML = "Edit";
                updateBtn.setAttribute("id", "update");
                updateBtn.setAttribute("onclick", "update(this)");
                col.appendChild(updateBtn);
            }   
            row.appendChild(col);
            }  
        }
        table.appendChild(row);
    }
const elem= document.getElementById("data");
elem.appendChild(table);

}
// localStorage.clear();
// localStorage.setItem(JSON.stringify(myArr));
}
// Add Function for adding data to the table 



// Delete a row from the table
function delData(e){
    // debugger;
    var ask = confirm("Are you sure you want to delete");
    if(ask==true)
    {
    let clickNode = e.parentElement.parentElement;
      var ind=clickNode.firstChild.innerHTML;
    // let dat=e.id;
    // console.log(ind);
        for(let i=0; i<myArr.length; i++)
        {
            if(ind==myArr[i].id)
            {
                myArr.splice(i,1);
            }
        }
        table.innerHTML = "";
        localStorage.setItem('data', JSON.stringify(myArr));
        createTable();
    }
    }
 function update(e)
 {
    let clickNode = e.parentElement.parentElement;
    var ind=clickNode.firstChild.innerHTML;
    // let modal=document.getElementById(exampleModal);
    // debugger;
    console.log(clickNode);
    $('#exampleModal').modal('show');
  
   document.getElementById('id').value=clickNode.childNodes[0].innerHTML
//    console.log();
   document.getElementById('name').value=clickNode.childNodes[1].innerHTML;
  document.getElementById('email').value=clickNode.childNodes[2].innerHTML;
   document.getElementById('contact').value=clickNode.childNodes[3].innerHTML; 
   console.log(document.getElementById('contact').value);
//    var modal=[modalid,modalname, modalemail, modalcontact];
    // console.log(ind);
    // let call = clickNode.childNodes[1].innerHTML;
    // console.log( modalname.value);
    // console.log(clickNode.childNodes[1].innerHTML);
  // let dat=e.id;
//   console.log(ind);
}
 function edit(){
    debugger;
    let index = $("#update").parent().parent().children();
    var myArr = JSON.parse(localStorage.getItem('data'));
// let colLen= Object.values(myArr[1]).length;
      for(let i=0; i<myArr.length; i++)
      {
          if(index==myArr[i].id)
          {
            // debugger;
            //  clickNode.childNodes[0].innerHTML = document.getElementById('id').value;
            //  clickNode.childNodes[1].innerHTML = document.getElementById('name').value;
            //  clickNode.childNodes[3].innerHTML = document.getElementById('email').value;
            //  clickNode.childNodes[4].innerHTML = document.getElementById('contact').value;
             console.log(clickNode.childNodes[0].innerHTML);

            //  clickNode.childNodes[1].innerHTML=modalname.value;
            //  console.log(myArr[i][1]=modalname.value);
          }      
      }   
      table.innerHTML = "";
      localStorage.setItem('data', JSON.stringify(myArr));
      createTable();
 }
createTable();


// let click = document.getElementById('del');
// click.addEventListener('click',delData);