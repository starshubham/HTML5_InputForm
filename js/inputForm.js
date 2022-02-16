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

/* UC3:- As a User need to follow pre-defined Mobile Format.
         - E.g. 91 9919819801 - Country code follow by space and 10 digit number.
*/

const mobileInput = document.querySelector("#tel");
const errorMobile = document.querySelector(".tel-error");
mobileInput.addEventListener('input', function () {
   let mobileRegex = RegExp("^[0-9]{2}\\s[0-9]{10}$"); //Pattern
   if (mobileRegex.test(mobileInput.value)) {
      errorMobile.textContent = "";
   }
   else {
      errorMobile.textContent = " Invalid Mobile Number"
   }
});

/* UC4:- As a User need to follow pre-defined Password rules. 
         Rule1 – minimum 8 Characters - NOTE – All rules must be passed.           
*/

const password = document.querySelector("#pwd");
const errorPwd = document.querySelector(".pwd-error");
password.addEventListener('input', function () {
   let pwdRegex = RegExp("^.{8,}$");
   if (pwdRegex.test(password.value)) {
      errorPwd.textContent = "";
   }
   else {
      errorPwd.textContent = "Invalid Password";
   }
});