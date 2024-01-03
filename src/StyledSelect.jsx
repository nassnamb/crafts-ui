import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const StyledSelect = ({label, name, value, onChange, options}) => {

    return (
      
        <FormGroup>
            <Label for="name">{label}</Label>
            <Input id="styledSelect" name={name} type="select" value={value}  onChange={onChange}>
                {options.map(option => <option key={option}>{option}</option>)}
                </Input>
        </FormGroup>
    )
}

export default StyledSelect