# Loop Notes #

Diferent types of operators.

<ul>
 <li>Assignment operators</li>
 <li>Comparison operators</li>
 <li>Arithmetic operators</li>
 <li>Bitwise operators</li>
 <li>Logical operators</li>
 <li>String operators</li>
 <li>>Conditional (ternary) operator</li>
 <li>Comma operator</li>
 <li>Unary operators</li>
 <li>Relational operators</li>
</ul>

Expressions have both binary and unary operators.

## Loops ##

Loops offer a quick and easy way to do something repeatedly. 

You can think of a loop as a computerized version of the game where you tell someone to take X steps in one direction, then Y steps in another. For example, the idea "Go five steps to the east" could be expressed this way as a loop:

```for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log('Walking east one step');
}```

There are many different kinds of loops, but they all essentially do the same thing: they repeat an action some number of times. (Note that it's possible that number could be zero!)

The various loop mechanisms offer different ways to determine the start and end points of the loop. There are various situations that are more easily served by one type of loop over the others.