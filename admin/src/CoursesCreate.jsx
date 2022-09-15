import React from "react";
import { Create, SimpleForm, TextInput, DateInput, NumberInput, BooleanInput  } from 'react-admin'

const CoursesCreate = (props) => {
    return (
    
        <Create title='Create a course' {...props}>
    <SimpleForm>
    <NumberInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="shortName" />
          <NumberInput source="points" />
          <DateInput source="startDate" />
          <DateInput source="endDate" />
          <NumberInput source="hoursPerDay" />
          
      
    </SimpleForm>
  </Create>
  )
}

export default CoursesCreate