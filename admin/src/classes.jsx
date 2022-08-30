import {Datagrid, EmailField, List, TextField, UrlField} from 'react-admin';

export const ClassesList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="shortName" />
      <TextField source="school" />
      <EmailField source="blog" />
      <TextField source="hide" />
      <TextField source="defaultStartTime" />
      <TextField source="defaultEndTime" />
      <TextField source="defaultInvoiceItem" />
      <TextField source="defaultHoursPerDay" />
      
    </Datagrid>
  </List>
);