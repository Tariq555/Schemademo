import React from "react";
import { List, Datagrid, TextField, DateField, EditButton, DeleteButton, NumberField, ReferenceField, BooleanField  } from 'react-admin'

const CoursesList = (props) => {
    return (
    
        <List {...props}>
    <Datagrid>
      <NumberField source="id" />
      <TextField source="name" />
      <TextField source="shortName" />
      <ReferenceField source="class" reference="classes">
        <TextField source="name" />
      </ReferenceField>
      <NumberField source="points" />
      <TextField source="startDate" />
      <TextField source="endDate" />
      <TextField source="plan" />
      <NumberField source="hoursPerDay" />
      <BooleanField source="hide" />
      <EditButton />
    </Datagrid>
  </List>
  )
}

export default CoursesList