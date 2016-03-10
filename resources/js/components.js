var data = new Firebase('https://allergyhelper3.firebaseio.com');
var name = $("#name").val('');
var component  = $("#component").val(''); 
var users = data.child("components");
var value="";
$("#submit").on('click',function(){
    name = $("#name").val();
    component  = $("#component").val(); 
    isNull = name == undefined || name == "" && component == undefined || component == ""
    if(isNull){
    	return;
    }else{
    	users.push().set({
            'component': component,
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
    var itens = new Firebase('https://allergyhelper3.firebaseio.com/components');
    itens.orderByChild('name').on('value', function (snapshot) {
      snapshot.forEach(function (item) {
            spanRemove = "<td>"+ "<a href='#'><i class='small material-icons'>delete</i></a>" +"</td>"
            spanItems = '<td>' + item.val().name + '</td>' + '<td>' + item.val().component + '</td>'
            spanEdit =  "<td>"+ "<a href='#'><i class='small material-icons'>system_update_alt</i></a>" +"</td>"
            spanDone =  "<td>"+ "<a href='#'><i class='small material-icons'>done</i></a>" +"</td>"
            $('#table').append('<tr>' + spanItems +spanEdit+spanRemove+spanDone+ '<tr>')
      });
});
}
    