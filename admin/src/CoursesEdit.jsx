import React from "react";
import { Edit, SimpleForm, SelectInput, DateInput, TextInput, NumberInput, BooleanInput, ReferenceInput    } from 'react-admin'

const CoursesEdit = (props) => {
    return (
    
        <Edit title='Edit Course' {...props} >
        <SimpleForm>
          <NumberInput disabled source="id" />
          <TextInput source="name" />
          <TextInput source="shortName" />
          <ReferenceInput source="class" reference="classes">
            <SelectInput optionText="name" />
          </ReferenceInput>
          <NumberInput source="points" />
          <DateInput source="startDate" />
          <DateInput source="endDate" />
          <TextInput source="plan" />
          <NumberInput source="hoursPerDay" />
          <BooleanInput source="hide" />
        </SimpleForm>
      </Edit>
  )
}

export default CoursesEdit