/*
********************************************************
* Individual Assignment (JS)				   		   *
* 			                                           *
* Name:  Md Abu Talha Ibna Riaz Hassan            	   *
* Matric Number:   A20EC3022                           *
* Section:     07                                      *
********************************************************
*/





/*Assessment item - Task 1*/
/*Based on your understanding, provide a detailed description of how function addNewSubject() works

First we access the object with id "table body" and assign it in a variable called "tbody". This is done by
using the getElementById() method. Then we create an element called "tr" and assign it to a variable called "newTr".

Then we make a for loop. The for loop is iterated 3 times.
When the for loop iterates, an element by the name of "id" is created and is assigned to variable "td".
This means that a new column is created for every itereation.

And also an element by the name of "input" is created and is assigned to a variable called "input".
This means that an input field is created for each iteration.

During the second and third iteration, the input type is set to "number" and the input size is set to "5".
This means that the second and third column will take only numerical inputs and the size of the input field is 5. 
This is because the "Credits" column and the "Marks" column only take numerical inputs.

It is also mentioned that if the iteration is not 1 or 2, the input type is set to "text" and the input size is set to "15" and
the max length of the input is set to 8.
This means that the first column will take text input and the max length of the text is 8. This is because the "Class" column contains text.


Then we append the input to the td variable, which creates a column of inputs. We use the appendChild method because we want to insert the input 
node inside the columns (which is the parent node). 

Then we append the td to newTr. This creates a row for our table containing the columns that were made. Here we are inserting the column nodes (td)
into to the newTr (which is the parent node).


After that we move out of the for loop and insert the newTr node into the tbody. Here tbody is the parent node and newTr is the child node
that is being appended to the parent node.




*/
function addNewSubject() {
    var tbody = document.getElementById("table_body");
    var newTr = document.createElement("tr");
    for (var i = 0; i < 3; ++i) {
        var td = document.createElement("td");
        var input = document.createElement("input");

        if (i == 2 || i == 1) {  
            input.type = "number";
            input.size = "5";
        }else{
            input.type = "text";
            input.size = "15";
            input.maxLength = "8";
        }

        td.appendChild(input);
        newTr.appendChild(td);
    }
    tbody.appendChild(newTr);
}


/*Assessment item - Task 2*/
/*Based on your understanding, provide a detailed description of how function deleteLastSubject() works

First we get the element "myTable" by using getElementById() method. "myTable" is the id for the table in the GPA calculator.

Then we use ".rows.length" to get the number of rows and assign it to a variable named x.

Then we get the table again using getElementById("myTable") and we use the deleteRow() method to delete a row of the table.
The argument inside the deleteRow() method is x-1. So we delete the last row of the table when this function is called.

As we delete the rows, the value of x decreases (because x is the number of rows). If the value of x is 1, we return false and this function 
does not execute anymore. We do this because we don't want to delete the first row of the table. This row contains "Class", "Credits" and "Marks".






*/
function deleteLastSubject() {
   
    var x = document.getElementById("myTable").rows.length;
    if (x == 1) {
        return false;
    }
    document.getElementById("myTable").deleteRow(x-1);
}




/*Assessment item - Task 3*/
/*Based on your understanding, provide a detailed description of how function sendElementToCalculate() works

First we get the element "table_body" by using getElementById() method and we assign it to a variable called "tbody".

Then we access the elements of tbody. We write tbody.getElementsByTagName("input"), this means that we get the elements, that are inside
tbody, by their Tag Name (which is input). And then we assign it to a variable called "elements".

We then use the variable "elements" as an argument in the function CalculateGPA(). 
The function CalculateGPA() is then executed.






*/
function sendElementToCalculate(){
    var tbody = document.getElementById("table_body");
    var elements = tbody.getElementsByTagName("input");
    CalculateGPA(elements);
}





/*Assessment item - Task 4*/
/*Based on your understanding, provide a detailed description of how function CalculateGPA() works.

This function was called by another function called "sendElementToCalculate()" from task 3.

First we create 4 variables and initialise them by assigning some values to them.

Variable "totalCredits" is given a value of 0.
Variable "totalPoints" is given a value of 0.
Variable "allOK" is given a value of 0.
And variable "length" takes the length of the "elements" (the "elements" comes from the parameter).

"elements" is basically the inputs that are entered by the user in the form. So when we do "elements.length" we are just
accessing the number of rows that the user has filled in. 

Then we enter a for loop. The for loop starts at iteration 0, since i = 0.
The for loop runs as long as the iteration number is less than the length variable.
In every iteration, the variable i is incremented by 3. Because we want to check all the 3 columnns for all rows.

In the for loop, we first check if the elements[i] which is the input for column "Class" is empty or not.
If the elements[i] is empty, we use an alert box to display "Please Enter The Name of The Subject!" to the user.
Then we make the border of that input box red and finally we return false, which stops the function from executing and the system stops
untill the user enters a Class name.

If the user enters a value for elements[i], the border color is changed to green.


Next, we check if elements[i+1] is empty or not. elements[i+1] is basically the input for column "Credits".
If the elements[i+1] is empty,  we use an alert box to display "Please Insert Value of The Credit" to the user.
Then we make the border of that input box red and finally we return false, which stops the function from executing and the system stops
untill the user enters a value for credit.

If the user enters a value and that value is not an integer, we use an alert box to display "The Value of Credit Must Be In Whole Number!" to the user.
Then we make the border of that input box red. We check if the value is an integer by dividing the value with 1 and checking if the remainder is 0 or not.

If the user enters a valid integer value at elements[i+1], then we make the border of that input box green.
Then that value is converted to a float datatype and assigned to a variable called "credit". We then add the "credit" variable with "totalCredits". 


Next, we assign the value at elements[i+2] to a variable named "grade". 
if the "grade" variable is empty we use an alert box to display "Please fill in the point" to the user.
Then we make the border of that input box red and finally we return false, which stops the function from executing and the system stops
untill the user enters a value for marks.

If the user enters a value at marks column, then we make the border of that input box green. After that we calculate the "totalPoints".
We call another function called getPoint() which takes the argument "grade".

This function returns a point based on the marks (marks are stored in the grade variable).

So if grade greater than or equal to 80, the function return 4.00.
If the grade is greater than or equal to 75, the function returns 3.67.
If the grade is greater than or equal to 70, the function returns 3.33.
If the grade is greater than or equal to 65, the function returns 3.00.
If the grade is greater than or equal to 60, the function returns 2.67.
If the grade is greater than or equal to 55, the function returns 2.33.
If the grade is greater than or equal to 50, the function returns 2.00.
If the grade is greater than or equal to 45, the function returns 1.67.
If the grade is greater than or equal to 40, the function returns 1.33.
If the grade is greater than or equal to 35, the function returns 1.00.
If the grade is greater than or equal to 30, the function returns 0.67.
If the grade is greater than or equal to 0, the function returns 0.00.


The returned value is then multiplied with "credit" variable and that is added to the "totalPoints" variable.
So basically  totalPoints = totalPoints + (credit * getPoint(grade) )


We then move out of the for loop and calculate the GPA. We get the GPA if we dividie totalPoints by totalCredits.

Then assign the value of "totalCredits" to the input named "total_credits". Which writes the value of "totalCredits" in that input field
and we also assign the value of "GPA" to the input named "gpa". Which writes the value of "GPA" in that input field. We also make sure that the
GPA is shown upto 2 decimal places, so we use argument "3" inside the method toPrecision().



*/
function CalculateGPA(elements) {

    var totalCredits = 0;
    var totalPoints = 0;
    var allOK = 0;
    var length = elements.length;
    
    

    for (var i = 0; i < length; i += 3) {
        
        if (elements[i].value == "") {
            alert("Please Enter The Name of The Subject!");
            elements[i].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i].style.borderColor = 'green';
            
        }  
        
        if (elements[i+1].value == ""){
            alert("Please Insert Value of The Credit");
            elements[i+1].style.borderColor = 'red';
            return false;
        }else if (elements[i+1].value%1 != 0) {
            alert("The Value of Credit Must Be In Whole Number!");
            elements[i+1].style.borderColor = 'red';
             
        }
        else{
            elements[i+1].style.borderColor = 'green';
            var credit = parseFloat(elements[i+1].value); 
            totalCredits += credit;
        }  

        
        
        var grade = elements[i+2].value;
        if (grade == "") {
            alert("Please fill in the point");
            elements[i+2].style.borderColor = 'red';
            return false;
        }
        else{
            elements[i+2].style.borderColor = 'green';
        }
        totalPoints += credit*getPoint(grade);
        
       
    }
    var GPA = totalPoints/totalCredits;
      
    document.results.total_credits.value = totalCredits;
    document.results.gpa.value = GPA.toPrecision(3);
     
    
   
}


function getPoint(grade) {
    
    if (grade >= 80) {
        return 4.00;
    }
    else if (grade >= 75){
        return 3.67;
    }
    else if (grade >= 70){
        return 3.33;
    }
    else if (grade >= 65){
        return 3.00;
    }
    else if (grade >= 60){
        return 2.67;
    }
    else if (grade >= 55){
        return 2.33;
    }
    else if (grade >= 50){
        return 2.00;
    }
    else if (grade >= 45){
        return 1.67;
    }
    else if (grade >= 40){
        return 1.33;
    }
    else if (grade >= 35){
        return 1.00;
    }
    else if (grade >= 30){
        return 0.67;
    }
    else if (grade >= 0){
        return 0.00;
    }
}