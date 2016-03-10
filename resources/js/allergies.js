var data = new Firebase('https://allergyhelper3.firebaseio.com/');
var name = $("#name").val('');
var cid  = $("#cid").val(''); 
var users = data.child("allergies");
var value="";
$("#submit").on('click',function(){
    name = $("#name").val();
    cid  = $("#cid").val(); 
    isNull = name == undefined || name == "" && cid == undefined || cid == ""
    if(isNull){
        return;
    }else{
        users.push().set({
            'cid10': cid,
            'name': name
        })
        $("#table tr td").remove();
        showItems();
    }            
})
function showItems(){
    var itens = new Firebase('https://allergyhelper3.firebaseio.com/allergies');
    itens.orderByChild('name').on('value', function (snapshot) {
        snapshot.forEach(function (item) {
            spanRemove = "<td>"+ "<a href='#'><i class='small material-icons'>delete</i></a>" +"</td>"
            spanItems = '<td>' + item.val().name + '</td>' + '<td>' + item.val().cid10 + '</td>'
            spanEdit =  "<td>"+ "<a href='#'><i class='small material-icons'>system_update_alt</i></a>" +"</td>"
            spanDone =  "<td>"+ "<a href='#'><i class='small material-icons'>done</i></a>" +"</td>"
            $('#table').append('<tr>' + spanItems +spanEdit+spanRemove+spanDone+ '<tr>')
        });
    });
}

$(function(){
    showItems();
})