import React, { useState } from 'react';
import StyledSelect from './utils/StyledSelect';



const UserCriteria = () => {

    const emptyItem = { login: '', lastName: '', firstName: '', status: 'Active' };
    const [item, setItem] = useState(emptyItem);



    const handleChange = (event) => {
        const { value, name } = event.target;
        setItem({ ...item, [name]: value });
    }

    return(
        <div >
            <StyledSelect label="login" name="login"  onChange={handleChange} value={item.login} />
            <StyledSelect label="lastName" name="lastName"  onChange={handleChange} value={item.lastName} />
            <StyledSelect label="firstName" name="firstName"  onChange={handleChange} value={item.firstName} />
            <StyledSelect label="status" name="status"  onChange={handleChange} value={item.status} />


        </div>
    )

}

export default UserCriteria;