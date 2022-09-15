// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';

import CoursesList from './CoursesList'
import CoursesCreate from './CoursesCreate'
import CoursesEdit from './CoursesEdit'

import Dashboard from "./Dashboard";
import simpleRestProvider from 'ra-data-simple-rest';
import { getToggleButtonGroupUtilityClass } from "@mui/material";

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// <Resource name="users" list={ListGuesser} />

const dataProvider = simpleRestProvider('/data');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="courses" list={CoursesList} create={CoursesCreate} edit={CoursesEdit} />

  </Admin>
);

export default App;