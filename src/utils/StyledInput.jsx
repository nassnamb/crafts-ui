import React from "react"
import { FormGroup, Input, Label } from "reactstrap"

const StyledInput = ({type, label, name, onChange, value, disabled}) => {

    return (
        <FormGroup>
            <Label for="name">{label}</Label>
            <Input type={type || "text"} name={name} id={name} value={value || ''}
                onChange={onChange} autoComplete={name} disabled={disabled} />
        </FormGroup>
    )
}

export default StyledInput