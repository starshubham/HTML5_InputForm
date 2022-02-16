const salary = document.querySelector('#salary');
const output = document.querySelector('.salary-output');
output.textContent = salary.value;
salary.addEventListener('input', function () 
{
   output.textContent = salary.value;
});

/* UC1:- As a User need to enter a valid First Name.
         - First name starts with Cap and has minimum 3 characters. 
*/
const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');
text.addEventListener('input', function () 
{
   let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
   if (nameRegex.test(text.value)) 
   {
      textError.textContent = "";
   }
   else 
   {
      textError.textContent = " Invalid Name";
   }
});

/* UC2:- As a User need to enter a valid email
         - E.g. abc.xyz@bl.co.in - Email has 3 mandatory parts (abc, bl & co) and 2 optional (xyz & in) 
         with precise @ and . positions. */

const emailInput = document.querySelector("#email");
const errorEmail = document.querySelector(".email-error");
emailInput.addEventListener('input', function () {
   let emailRegex = RegExp('^(abc).?[a-z]{3,}[@](bl).?(co).?[a-z]{2,}$');
   if (emailRegex.test(emailInput.value)) {
      errorEmail.textContent = "";
   }
   else {
      errorEmail.textContent = " Invalid Email"
   }
});