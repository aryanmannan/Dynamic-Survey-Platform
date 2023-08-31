import React from 'react'
import Checkbox from './elements/Checkbox';
import Input from './elements/Input';
import Select from './elements/Select';
const Element = ({ field: { field_type, field_id, field_label, field_placeholder, field_value, field_options } }) => {  //passing the following data to elements (all this data is available in formElement.json)

    switch (field_type) { //switch conditiom based on field type
        case 'text':
            return (<Input     //return input component
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}

            />)
        case 'select':  
            return (<Select
                field_id={field_id}
                field_label={field_label}
                field_placeholder={field_placeholder}
                field_value={field_value}
                field_options={field_options}
            />)
        case 'checkbox':
            return (<Checkbox
                field_id={field_id}
                field_label={field_label}
                field_value={field_value}
            />)

        default:
            return null;
    }


}

export default Element