// in src/App.js
import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import { SchoolList, SchoolEdit, SchoolCreate } from './schools';
import { TeacherList, TeacherCreate, TeacherEdit } from './teachers';
import { ClassesList, ClassesEdit, ClassesCreate } from './classes';
import TeacherIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import Dashboard from "./Dashboard";
import simpleRestProvider from 'ra-data-simple-rest';
import { getToggleButtonGroupUtilityClass } from "@mui/material";

//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

// <Resource name="users" list={ListGuesser} />

const dataProvider = simpleRestProvider('/data');

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider}>
    <Resource name="teachers" list={TeacherList} edit={TeacherEdit} create={TeacherCreate} icon={TeacherIcon} />
    <Resource name="schools" list={SchoolList} edit={SchoolEdit} create={SchoolCreate} icon={SchoolIcon} />
    <Resource name="classes" list={ClassesList} edit={ClassesEdit} create={ClassesCreate} icon={ClassIcon} />
  </Admin>
);

export default App;