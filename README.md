In this project I'll create a simple calculator including addition, subtraction, multiplication, and division operators.

What I Learned:
-Effectively using booleans to store data of how users interact with UI
-Understanding the order of if else statements is crucial to make sure programs will run without errors
-toString(), parseInt(), and parseFloat() are very useful for manipulating numbers within html.
-When parsing arguments between strings and floats, converting a float into a string will remove trailing zeros.
-Regular expressions can potentially used in programs like this to check character combinations in strings. For this project I decided to use booleans instead of regular expressions for the program to recall when decimals are created.
-User input is stored in a string and only changed to number format for operations. Since javascript cannot multiply, divide, or subtract strings, it will produce a number if prompted to do such operations on two strings of strictly numbers. Therefore in this program I only needed to use the parseFloat() method in the addition function to ensure the program adds the two numbers rather than concatenating them in string form.
