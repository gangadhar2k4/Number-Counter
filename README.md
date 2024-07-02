# Number-Counter
For beginners it will be the best practice

Basically, it is for beginners who are learning Web Devlopment.

HTML Explanation: 
This HTML code is our layout of counter program. By using HTML tags creating neccessary buttons or text boxes etc.

1. Simplly create a HTML document with any name including dot extension like (name-of-file.html).
2. Then create three buttons which are help to increase or decrease our counter value.
3. Link our JavaScript file to our HTML file using tag (<script></script>).

JavaScript Explanation:

This JavaScript code is for the counter program HTML file I previously helped with. It gets references to the buttons and label using document.getElementById and assigns event listeners to the buttons. Here's a breakdown:

1. let count = 0; - Initializes a variable count to 0.
2. document.getElementById('decreaseBtn').onclick = function(){...} - Assigns an event listener to the decrease button. When clicked, it:
    - Decrements the count variable by 1 (count--).
    - Updates the text content of the CounterLabel element with the new count.
3. document.getElementById('increaseBtn').onclick = function(){...} - Assigns an event listener to the increase button. When clicked, it:
    - Increments the count variable by 1 (count++).
    - Updates the text content of the CounterLabel element with the new count.
4. document.getElementById('resetBtn').onclick = function(){...} - Assigns an event listener to the reset button. When clicked, it:
    - Resets the count variable to 0.
    - Updates the text content of the CounterLabel element with the new count (0).

This code uses the onclick property to assign event listeners to the buttons. When a button is clicked, the corresponding event listener function is executed, updating the count variable and the label text.

Note that this code uses the textContent property to update the label text, which is a more modern and efficient way to update text content compared to using innerHTML.
