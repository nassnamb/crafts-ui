import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const StyledSelect = ({label, name, value, onChange, options}) => {

    return (
      
        <FormGroup>
            <Label for="name">{label}</Label>
            <Input id="styledSelect" name={name} type="select" value={value}  onChange={onChange}>
                {options.map(option => <option>{option}</option>)}
            
                {/* <option>Active</option> <option>Inactive</option> */}
                </Input>
            {/* <Select defaultValue="Active" onChange={onChange} options={options} disabled={disabled} /> */}
        </FormGroup>
    )
}

export default StyledSelect