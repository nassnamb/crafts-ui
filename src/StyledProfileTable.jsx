import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table } from 'reactstrap';

const StyledProfileTable = ({data, remove }) => {

    return (
        <Table className="mt-4">
            <thead>
                <tr>
                    <th width="50%">Profile</th>
                    <th width="50%">Description</th>
                </tr>
            </thead>
            <tbody>
                {data.map(elt => {
                    return <tr key={elt.profileId}>
                        <td style={{ whiteSpace: 'nowrap' }}><Link to={"/profiles/details"}>{elt.profileId}</Link></td>
                        <td>{elt.description}</td>
                        <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary" tag={Link} to={"/profiles/" + elt.profileId}>Edit</Button>
                                <Button size="sm" color="danger" onClick={() => remove(elt.profileId)}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}

export default StyledProfileTable;