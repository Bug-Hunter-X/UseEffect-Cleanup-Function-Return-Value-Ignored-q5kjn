# React useEffect Cleanup Function Return Value Ignored

This repository demonstrates a common but easily overlooked error in React's `useEffect` hook: ignoring the return value of the cleanup function.  This can lead to memory leaks or unexpected behavior when a component unmounts.

## The Bug

The `bug.js` file contains a component that uses `useEffect` to log a message when the component unmounts. However, the return value of the cleanup function (the function returned by `useEffect`) is not used, resulting in the cleanup logic not always executing.

## The Solution

The `bugSolution.js` file demonstrates the correct way to handle the cleanup function. The return value of `useEffect` is used to ensure the cleanup logic is always executed when the component unmounts. This is crucial for preventing resource leaks and ensuring consistent component behavior.

## How to Reproduce

1. Clone this repository.
2. Navigate to the `bug` directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the console output as you mount and unmount the component.