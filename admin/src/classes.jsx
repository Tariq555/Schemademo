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

export const ClassesList = () => (
  <List>
    <Datagrid>
      <TextField source="id" reference="classes" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <EmailField source="blog" />
      <BooleanField source="hide" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultInvoiceItem" />
      <TextField source="defaultHoursPerDay" />
      <EditButton />
      
    </Datagrid>
  </List>
);

export const ClassesEdit = props => (
  <Edit {...props}>
    <SimpleForm>
      <TextField disabled source="id"/>
      <TextInput source="name" />
      <TextInput source="shortName" />
      <TextInput source="school" />
      <TextInput source="blog" />
      <BooleanInput label="hide" source="hide" defaultValue={0} />
      <TextInput source="defaultStartTime" />
      <TextInput source="defaultEndTime" />
      <TextInput source="defaultInvoiceItem" />
      <TextInput source="defaultHoursPerDay" />
      
    </SimpleForm>
  </Edit>
);

export const ClassesCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextField disabled source="id" reference="classes" />
      <TextInput source="name" />
      <TextInput source="shortName" />
      <TextInput source="school" />
      <TextInput source="blog" />
      <BooleanInput label="hide" source="hide" defaultValue={0} />
      <TextInput source="defaultStartTime" />
      <TextInput source="defaultEndTime" />
      <TextInput source="defaultInvoiceItem" />
      <TextInput source="defaultHoursPerDay" />
      
    </SimpleForm>
  </Create>
);