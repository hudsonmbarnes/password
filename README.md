# Random Password generator

## Website Description

This Website allows the user to create a random password with the characters you would like to include.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Github and Gitlab accounts
GitBash or Terminal
```

### Installing

A step by step series of examples that tell you how to get a development env running

```
Clone the code to your terminal
Pull from the repository
View on Visual Studio Code
```

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [JavaScript](https://www.javascript.com/)

## Deployed Link

* [See Live Site](https://hudsonmbarnes.github.io/password/)

## What I did

I created and declared all of the variables. I think prompted the user to imput the amount of characters they would like. The user can then choose if they would like lowercase, uppercase, numbers, or special characters in their random password. The function will check for the users imput and randomize using math.random.

## Code Snippet

This part of the code is where the user would confirm its characters and if the user chose cancel for all the alerts, it will say "you must choose at least one option" and reset the alerts.

```
// Determine characters
  var confirmLower = confirm("Would you like to use lowercase letters");
  var confirmUpper = confirm("Would you like to use uppercase letters");
  var confirmNumeric = confirm("Would you like to use numbers?");
  var confirmSpecial = confirm("Would you like to use special characters?");
    while(confirmLower === false && confirmUpper === false && confirmNumeric === false && confirmSpecial ===false) {
      alert("You must choose at least one option!");
        var confirmLower = confirm("Would you like to use lowercase letters");
        var confirmUpper = confirm("Would you like to use uppercase letters");
        var confirmNumeric = confirm("Would you like to use numbers?");
        var confirmSpecial = confirm("Would you like to use special characters?"); 
    }

```

## Editors

* **Hudson Barnes**
- [Link to Github](https://github.com/hudsonmbarnes)
- [Link to LinkedIn](https://www.linkedin.com/in/hudson-barnes-398483151/) 


## Authors

* **Hudson Barnes** 


## Acknowledgments

* W3schools.com
* stackoverflow.com
* google.com