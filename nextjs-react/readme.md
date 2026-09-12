#### What is NextJs?
NextJS is a React Framework, so it builds up on React.js

<!-- https://github.com/mschwarzmueller/nextjs-complete-guide-course-resources -->

<!-- https://github.com/academind/react-complete-guide-course-resources/tree/main/code/30%20React%20Summary -->

#### Why do we need it although ReactJs is already a library itself? Why do we need another framework that builds up on React.js? or Why do we need a React framework ?
A React framework for building fullstack React Apps. It vastly simplifies the process of building fullstack applications with React.

#### Why would you use it?
The React library itself added more and more features that make it a bit easier to run React on the server and render components on the server specifically. But using these features without a framework is tricky and typically not all you need. Instead. if you wanna build a complete, feature-rich full stack application, you also need help with,
- Route Setup and Handling
- Form submission
- Data Fetching
- Authentication and much more!

And that's exactly what NextJs gives you.

#### Why would you use the NextJs?
NextJS blends frontend and backend and build more complex apps all in the one project and one programming language (JavaScript). Building fullstack application with React which gives you.
- Handle route setup & config
- Handle requests and responses
- Handle data fetching and submission
And much more.

#### Key Feature and Benefits
- Fullstack Apps
- Fetching and rendering data can become easier and more efficient.
- Handling form submission can become easier and more secure.
- `File base routing system`, so no code-based configuration or extra packages for routing required.
- `Server-side rendering`, By default NextJs render all pages on the server. So the finished HTML content is sent to the client which is great for SEO.

#### Imperative Programming vs Declarative Programming
- `Imperative Programming:` A programming paradigm where you explicitly instruct the computer how to perform a task by providing a step-by-step sequence of commands that alter the program's state.
    - imperative programming is like giving a chef step-by-step instructions on how to make a pizza.

- ` Declarative Programming:` A programming paradigm where you describe what result or outcome you want, leaving the underlying control flow and implementation details to the language or system.
    - Declarative programming is like ordering a pizza without being concerned about the steps it takes to make the pizza.

#### RSC
After Server Components are rendered, a special data format called the React Server Component Payload (RSC) is sent to the client. The RSC payload contains:

- The rendered result of Server Components.
Placeholders (or holes) for where Client Components should be rendered and references to their JavaScript files.
- React uses this information to consolidate the Server and Client Components and update the DOM on the client.


#### What exactly is React.js?
Well, the official website tells us, React is a JavaScript library for building user interfaces.
`but what exactly does it mean?` Obviously it's a JavaScript library, so we will write JavaScript code. We use React in conjunction with our own JavaScript code, but it is a library that's there to help us build user interfaces. It's there to help us build highly interactive user interfaces.

#### What is the React.js component?
A React component is essentially a function that returns JSX (JavaScript XML) code. Here's a breakdown of its key characteristics:

- `Function-Based:` React components are JavaScript functions. They can be defined as either function declarations or arrow functions.

- `Returns JSX:` The primary purpose of a React component is to return JSX, which is a syntax extension that looks similar to HTML. This JSX describes what the UI should look like on the screen.

- `Reusable:` Components are reusable pieces of code. You can define a component once and use it throughout your application, which makes building UIs more efficient and manageable.

- `Custom Elements:` Though a React component may look like an HTML element, it is not recognized by the browser as such. Instead, React translates the component into actual HTML that the browser can understand when it renders the app.

- `Composition:` You can compose components together to create complex UIs from simple building blocks.

In summary, a React component is a core building block of React applications, allowing developers to create interactive user interfaces in a structured and reusable manner.

#### How React.js Work?
React works by using a component-based architecture that allows developers to create modular UI components.

- `Component-Based Architecture:` React enables developers to create reusable UI components that manage their own state. These components can be combined to build complex user interfaces.
- `Virtual DOM:` React uses a Virtual DOM to improve performance. When a change occurs in the state of a component, React updates the Virtual DOM first, calculates the changes that need to be made to the actual DOM, and then efficiently updates the real DOM. This minimizes expensive DOM manipulation operations.
- `Declarative Syntax:` React employs a declarative syntax, allowing developers to describe what the UI should look like at any given point in time. Instead of manually updating the UI.
- `Unidirectional Data Flow:` Data in React flows in one direction, from parent to child components.
- `Client-Side Rendering:` React is a client-side library.
- `Entry Point:` The application starts executing at the main entry file (main.jsx), where JSX code is used.
- `JSX:` This syntax extension allows HTML-like code to be written within JavaScript, making it easier to create elements.
- `Dependencies:` The project manages its dependencies using the package.json file, specifically React and React DOM libraries.
- `Rendering:` The createRoot method from React DOM targets an HTML element to render the React application.
- `Components:` The core building blocks of a React app are components, which are functions returning JSX. These can be composed and nested to create complex UIs.

#### What is React Compiler?
React Compiler (formerly code-named React Forget) is an build-time tool developed by the React team that automatically optimizes your code by applying memoization under the hood.
`Officially introduced with React 19 and integrated into Next.js 15.`

#### What the React Compiler does in a Next.js Project?
- `Automatic Memoization:` Eliminates the need to manually write `useMemo, useCallback, or React.memo` to optimize performance.
- `Prevents Unnecessary Re-renders:` It analyzes JavaScript/React code at build time and ensures components only re-render when their underlying state or props actually change.
- `Cleaner Codebase:` Keeps your component logic readable and uncluttered by removing boilerplate performance hooks.

#### What existed before the React Compiler?
There was no automatic compiler. Developers had to manually optimize performance using explicit memoization hooks:
- useMemo (to cache expensive values)
- useCallback (to cache function instances)
- React.memo (to skip unnecessary component re-renders)

#### What is State in React?
In React, state refers to an object that represents the parts of your application that can change. It allows components to maintain internal data that can be updated and rendered dynamically.  


