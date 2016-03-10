var data = new Firebase('https://allergyhelper3.firebaseio.com/');
var name = $("#name").val('');
var cid  = $("#product").val(''); 
var users = data.child("products");
var value="";
$("#submit").on('click',function(){
    name = $("#name").val();
    product  = $("#product").val(); 
    isNull = name == undefined || name == "" && product == undefined || product == ""
    if(isNull){
    	return;
    }else{
    	users.push().set({
            'product': product,
            'name': name
        })
      $("#table tr td").remove();
            showItems();
    }          
});
$(function(){
    showItems();
})

function showItems(){
    var itens = new Firebase('https://allergyhelper3.firebaseio.com/products');
    itens.orderByChild('name').on('value', function (snapshot) {
        snapshot.forEach(function (item) {
            spanRemove = "<td>"+ "<a href='#'><i class='small material-icons'>delete</i></a>" +"</td>"
            spanItems = '<td>' + item.val().name + '</td>' + '<td>' + item.val().product + '</td>'
            spanEdit =  "<td>"+ "<a href='#'><i class='small material-icons'>system_update_alt</i></a>" +"</td>"
            spanDone =  "<td>"+ "<a href='#'><i class='small material-icons'>done</i></a>" +"</td>"
            $('#table').append('<tr>' + spanItems +spanEdit+spanRemove+spanDone+ '<tr>')
        });
    });
}