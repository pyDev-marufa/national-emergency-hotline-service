<!-- Assignm Question Answers -->

<!-- QUESTION-1  -->
# What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ANSWER:
- getElementById is used to select a single element by ID where getElementsByClassName uses classnames to get one or more elements.
- And querySelector selects the first element that matches a CSS selector but querySelectorAll Selects all elements matching a CSS selector.



<!-- QUESTION-2 -->
# How do you create and insert a new element into the DOM?# getElementById i
 
ANSWER: first thing is I will create an element using createElement()
 then after adding contents like text or a paragraph I can use appendChild() to add with the parentelement inside the Dom.

example: 
const newParagraph = document.createElement('p');
newParagraph.textContent = "This is a new paragraph!";
document.body.appendChild(newParagraph);


<!-- QUESTION-3 -->
# What is Event Bubbling and how does it work?


ANSWER:Event Bubbling is the process where an event starts from the target element and then bubbles up to its parent elements all the way up to the document. 

Using event.stopPropagation() , event bubbling can be stopped.



<!-- QUESTION-4 -->
# What is Event Delegation in JavaScript? Why is it useful?

ANSWER: Event Delegation is a technique where you add a single event listener to a parent instead of adding one to each child element. It works because of event bubbling.

useful because;
-Improves performance 
-Works even when new child elements are added dynamically



<!-- QUESTION-5 -->
# What is the difference between preventDefault() and stopPropagation() methods?

ANSWER: preventDefault() prevents default browser behavior and the stopPropagation() method stops the event from bubbling up to parent elements.


