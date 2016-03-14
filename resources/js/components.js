var data = new Firebase('https://allergyhelper3.firebaseio.com');
var name = $("#name").val('');
var component  = $("#component").val(''); 
var users = data.child("allergies");

var allergies = data.child('allergies');
var substancies = data.child('substancies');

var value="";
$("#submit").on('click',function(){
    name = $("#name").val();
    component  = $("#component").val(); 
    isNull = name === undefined || name === "" && component === undefined || component === "";
    if(isNull){
    	return;
    }else{
    	users.push().set({
            'component': component,
            'name': name
        });
        $("#table tr td").remove();
        showItems();
    }
});

// $("#testBtn").on('click',function(){
//     name = "Água";
//     description  = "Objeto teste, água;"; 
//     isSimilar  = true; 
//     isNull = name === undefined || name === "" && component === undefined || component === "";
//     if(isNull){
//         return;
//     }else{
//         users.push().set({
//             'name': name,
//             'desc': description,
//             'isSimilar': isSimilar
//         });
//     }
// });


//$jB('<script src="https://cdn.firebase.com/js/client/2.4.1/firebase.js"/>').appendTo('head')
var data = new Firebase('https://allergyhelper3.firebaseio.com/');
var allergies = data.child('allergies');
var substancies = data.child('substancies');

allergies.push().set({
  name: 'Oxido metil',
  desc: 'nda nda nda'
});
var obj;
substancies.on('child_added',function(snapshot){
  var key = snapshot.key();
  obj = (obj={}, obj[key]=true, obj);
  console.log(obj);
});
allergies.once('child_added', function (snapshot) {
  var key = snapshot.key();
  
  var substance = allergies.child(key + '/substancies');
  substance.push(obj);
 
});


$("#testBtn").on('click',function(){
    var errorFunction = function (errorObject) {
        console.log("The read failed: " + errorObject.code);
    };
    substancies.on("child_added",  function(childSnapshot, prevChildKey){
        var obj = childSnapshot;
        console.log("The read was name: " + obj.key());
        console.log("The read was name: " + obj.name());
        console.log("is similar?: " + obj.isSimilar);
        console.log("description: " + obj.desc);
        console.log("prevChildKey: " + prevChildKey);
        console.log("key: " + obj);
    }, errorFunction);

    // name = "Água";
    // description  = "Objeto teste, água;"; 
    // isSimilar  = true; 
    // isNull = name === undefined || name === "" && component === undefined || component === "";
    // if(isNull){
    //     return;
    // }else{
    //     allergies.push().set({
    //         'name': name,
    //         'desc': description,
    //         'isSimilar': isSimilar
    //     });
    // }
});


$(function(){
    showItems();
});

function showItems(){
    var itens = new Firebase('https://allergyhelper3.firebaseio.com/components');
    itens.orderByChild('name').on('value', function (snapshot) {
      snapshot.forEach(function (item) {
            spanRemove = "<td>"+ "<a href='#'><i class='small material-icons'>delete</i></a>" +"</td>";
            spanItems = '<td>' + item.val().name + '</td>' + '<td>' + item.val().component + '</td>';
            spanEdit =  "<td>"+ "<a href='#'><i class='small material-icons'>system_update_alt</i></a>" +"</td>";
            spanDone =  "<td>"+ "<a href='#'><i class='small material-icons'>done</i></a>" +"</td>";
            $('#table').append('<tr>' + spanItems +spanEdit+spanRemove+spanDone+ '<tr>');
      });
});
}
    