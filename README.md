# IT313 Components and JSX

## Laboratory 4

This project demonstrates React Native components and JSX.

## Problem

The application displays a list of IT313 students.

Each student is displayed using a reusable StudentCard component.

The card displays:

- Student name
- Course
- Units
- Full Load label when applicable

## Components

### StudentRoster

StudentRoster is the parent component.

It contains the students array and uses the map() function
to render a StudentCard for every student.

It also displays the total number of students.

### StudentCard

StudentCard is the reusable child component.

It receives these props:

- name
- course
- units
- isFullLoad

It uses conditional rendering to display the
Full Load label.

## React Concepts

This project demonstrates:

- Functional Components
- Props
- Props Destructuring
- JSX Expressions
- Conditional Rendering
- map()
- key prop

## How to Run

Install dependencies:

npm install

Start the Expo project:

npx expo start