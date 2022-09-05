import * as React from "react";
import { 
  Datagrid, 
  List, 
  TextField, 
  Edit, 
  EditButton, 
  SimpleForm, 
  Create, 
  TextInput,
} from 'react-admin';

export const SchoolList = props => (
  <List {...props}>
      <Datagrid>
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="shortName" />
          <EditButton />
      </Datagrid>
  </List>
);

export const SchoolEdit = props => (
  <Edit title="Edit schools" {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="shortName" />
      </SimpleForm>
  </Edit>

);

export const SchoolCreate = props => (
  <Create {...props}>
      <SimpleForm>
          <TextInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="shortName" />
      </SimpleForm>
  </Create>
);