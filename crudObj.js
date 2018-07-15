var student = [];

//add record
function addRecord(sid,sname,sadress,semail,sclass)
{
  student.push( 
      {
      name: sname,
      id: sid,
      adress: sadress,
      email: semail,
      clas: sclass
      });
}
//delete record
function remRecord(sid){
    for (var value in student) {
        if (student[value].id === sid) {
            student.splice(value, 1); 
            console.log(value);
        }
        }
    }


function updRecord(sname){
    student.map(function(value) {
        if(value.name===sname)
        {
    value.clas = "database";
        }
 
   });
   console.log("Data updated successfully");
  
}


function displayRecord(sid){

  student.map(function(value) {
    if(value.id ===sid){
      console.log(value);
    }
});
}
 
function disAllRecord(){
  console.log(student);
}

// add record
addRecord(001,"jamal","atd","jamal@gmail.com","bsse");
addRecord(002,"fazeel","rwp","fazeel@gmail.com","web");
addRecord(003,"waqar","wah","waqar@gmail.com","android");



//update record
updRecord("jamal");
//delete record
remRecord(003)
//display record
displayRecord(003);
disAllRecord();


