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
  TextInput,
  BooleanField,
  BooleanInput,
  PasswordInput,
  required
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
      <BooleanField source="hide" />
      <TextField source="password" />
      <TextField source="roles" />
      <EditButton />
    </Datagrid>
  </List>
);



// in src/posts.js
export const TeacherEdit = () => (
  <Edit>
    <SimpleForm>
      <TextField disabled source="id" reference="teachers" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="initials" />
      <TextInput source="phone" />
      <TextInput label="Email Address" source="email" type="email" />
      <TextInput source="color" />
      <BooleanInput label="hide" source="hide" defaultValue={0} />
      
    </SimpleForm>
  </Edit>
);



export const TeacherCreate = props => (
  <Create {...props} >
    <SimpleForm>
      <TextField disabled source="id" reference="teachers" />
      <TextInput source="firstname" />
      <TextInput source="lastname" />
      <TextInput source="initials" />
      <TextInput source="phone" />
      <TextInput label="Email Address" source="email" type="email" />
      <TextInput source="color" />
      <BooleanInput label="hide" source="hide" defaultValue={0} />
      <PasswordInput source="password" />
      <TextInput source="roles" />
    </SimpleForm >
  </Create >
);

