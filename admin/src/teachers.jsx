import {
  List,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  Edit,
  EmailField,
  Create,
  SimpleForm,
  ReferenceInput,
  TextInput
} from 'react-admin';

export const TeacherList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" reference="teachers" />
      <TextField source="firstname" />
      <TextField source="lastname" />
      <TextField source="initials" />
      <TextField source="phone" />
      <EmailField source="email" />
      <TextField source="color" />
      <TextField source="hide" />
      <TextField source="password" />
      <TextField source="roles" />
      <EditButton />
    </Datagrid>
  </List>
)

// in src/posts.js
export const TeacherEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField source="id" reference="teachers" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="initials" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextInput source="color" />
      <TextInput source="hide" />
      <TextInput source="password" />
      <TextInput source="roles" />
    </SimpleForm>
  </Edit>
);



export const TeacherCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField source="id" reference="teachers" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="initials" />
      <TextInput source="phone" />
      <TextInput source="email" />
      <TextInput source="color" />
      <TextInput source="hide" />
      <TextInput source="password" />
      <TextInput source="roles" />
    </SimpleForm >
  </Create >
);

