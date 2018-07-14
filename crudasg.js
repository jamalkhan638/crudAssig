var student =[];
function addRecord(name,id,adress,email,clas)
{
var data =[name,id,adress,email,clas];
student.push(data);
}

//remove record
function removeRecord(id)
{
    student.map(function(val)
    {
    if(val[1]===id)
    {
        student.splice(val,1);
        console.log("record removed successfully:  "+val);
    }
   
}
);
    
}

//update record
function updateRecord(id)
{
    student.map(function(val)
    {
        if(val[1]===id)
        {
        val[2]="abbottabad";
        console.log("record updates successfully:  " +val);
        }
        
    
        
    }
   
);
}

//display record
function displayRecord(id)
{
    student.map(function(val)
    {
        if(val[1]===id)
        {
        console.log("the display record is:  "+val);
    }
}
    

);
}


//display all record
function displayWholeRecord()
{
    console.log("the whole record is");
    student.map(function(val)
   
    {
        
        console.log(val);
    }
);
}

//if we add record
addRecord("jamal","123","atd","jamal@gmail.com","bsse");
addRecord("adeel","1234","isb","adeel@gmail.com","web");
addRecord("waqar","12345","rwp","waqar@gmail.com","sql");
addRecord("asad","123456","wah","asad@gmail.com","android");

removeRecord("1234");
updateRecord("12345");
displayRecord("1234");
displayWholeRecord();


