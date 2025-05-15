# HTTP Methods:

HTTP Methods or verbs defines a set of request methods that informs the server about the nature of the request. It is good practice to use proper HTTP methods while designing APIs.

- **GET**: Used for retrieving a resource. Should not contain body
- **HEAD**: Identical to GET but only asks for response headers, without body
- **POST**: Used to submit an entity to the specified resource, often causes side effects.
- **PUT**: Replaces current representation of target resource with request content.
- **DELETE**: Deletes the specified resource.
- **PATCH**: Applies partial modifications to a resource.

[More info](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Methods)

# HTTP Status Codes:

A HTTP Status code in the HTTP Response indicates wether the HTTP request has been successful or not. Responses are grouped in five classes:

1. Informational responses (100-199)
2. Successful responses (200-299)
3. Redirection messages (300-399)
4. Client error responses (400-499)
5. Server error responses (500-599)

## Common HTTP Status Codes

- **200 OK**: The request was successful.
- **400 Bad Request**: The server cannot or will not process the request due to client error.
- **401 Unauthorized**: The client is not authenticated.
- **403 Forbidden**: The client doesn't have access to the content. But the server has identified the client.
- **404 Not Found**: The requested resource was not found. Most common.
- **405 Method Not Allowed**: The request method is not supported by the resource.
- **429 Too Many Requests**: The client has sent too many requests.
- **500 Internal Server Error**: The server has encountered a situation it does not know how to handle.
- **502 Bad Gateway**: The server, while working as a gateway, got an invalid response

[More Info](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status)

# CSS Selectors:

CSS Selectors are the CSS syntax that selects the DOM node to which a style is to be applied.

- Basic Selectors
  - **Class Selector**: .className
  ```css
  .primary-btn {
    background-color: green;
    border-radius: 20%;
  }
  ```
  - **ID Selector**: #id
  ```css
  #special-link {
    color: red;
    text-decoration: none;
  }
  ```
  - **Type Selector**: elementName
  ```css
  p {
    font-size: 16px;
    line-height: 1.5;
  }
  ```
  - **Universal Selector**: *
  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  ```
- **Pseudo Class Selectors**:
  Selectors that target nodes with state, :visited, :hovered, :active, ...

- **Combinators**: Combines multiple CSS selectors
  - **Descendant Combinator**: (space) Targets all elements that are descendants of a specified element
  ```css
  div p {
    color: blue;
  }
  ```
  
  - **Child Combinator**: > Targets only direct children of a specified element
  ```css
  ul > li {
    list-style: square;
  }
  ```
  
  - **Adjacent Sibling Combinator**: + Targets an element that directly follows another specified element
  ```css
  h2 + p {
    font-weight: bold;
  }
  ```
  
  - **General Sibling Combinator**: ~ Targets all following siblings of a specified element within the same parent
  ```css
  h2 ~ p {
    margin-left: 20px;
  }
  ```
[More Info](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors)  

# Git:
Git is a version control system (VCS). It is a open source project developed by Linus Torvalds. Git is also distributed which allows for multiple developers to work on the same codebase.

- **init**: This command is used to create a git `repository`. It creates a hidden `.git` folder in the directory.
- **add**: This command is used to `stage` the `changes`.
- **commit**: This command is used to `commit` the `staged changes`. This is analogous to saving a file.
- **push**: This command is used to upload local `repository` content to a remote `repository`.
- **pull**: This command is used to fetch and download content from a remote `repository` and immediately update the local `repository` to match that content.
- **clone**: This command is used to create a copy of an existing Git `repository` from a remote source.
- **branch**: This command is used to create, list, rename, and delete branches within the `repository`.
- **checkout**: This command is used to switch between branches in a `repository`.

# Callback Functions:
The functions that are passed as arguments to other functions are callback functions.
# Higher order function:
The function which accepts other function as an argument is known as higher order function.

```javascript
// Higher order function
function mapper(arr,func){
  let ret = [];
  for (const a of arr){
    ret.push(func(a))
  }
  return ret;
}
// The inline function passed in the second argument is a callback function
function mapper([1,2,3,100,23,34],(el)=>el%2==0)
```

# Array methods:
Javascript provides various methods in the Array objects. They allow working with array in a declarative manner.

- **filter**: takes a function that returns a boolean as the argument, runs the function on every element of the array and returns a new array where only elements which return true when passed to the callback function are kept.

```javascript
console.log([1,2,3,4,5,6,7,8,9].filter((el)=>el>4))
//[5,6,7,8,9]
```
- **map**: applies a function on each element of an array and returns the new array.

```javascript
console.log([1,2,3].map((el)=>el*2))
//[2,4,6]
```

- **forEach**: executes a provided function once for each array element, but doesn't return anything.

```javascript
[1,2,3].forEach((el)=>console.log(el))
// 1
// 2
// 3
```

- **push**: adds one or more elements to the end of an array and returns the new length of the array.

```javascript
let arr = [1,2,3];
let newLength = arr.push(4,5);
console.log(arr); // [1,2,3,4,5]
console.log(newLength); // 5
```

- **pop**: removes the last element from an array and returns that element.

```javascript
let arr = [1,2,3,4,5];
let lastElement = arr.pop();
console.log(arr); // [1,2,3,4]
console.log(lastElement); // 5
```

[More Info](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays)
