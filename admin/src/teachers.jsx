import { Datagrid, EmailField, List, TextField, UrlField } from 'react-admin';

export const TeacherList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="initials" />
      <TextField source="phone" />
      <EmailField source="email" />
      <TextField source="color" />
      <TextField source="hide" />
      <TextField source="password" />
      <TextField source="roles" />
      
    </Datagrid>
  </List>
);