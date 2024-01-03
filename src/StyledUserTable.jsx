import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Table } from 'reactstrap';

const StyledUserTable = ({data, remove }) => {

    return (
        <Table className="mt-4">
            <thead>
                <tr>
                    <th width="25%">Identifiant</th>
                    <th width="15%">Nom</th>
                    <th width="15%">Prénom</th>
                    <th width="15%">Statut</th>
                    <th width="30%">Date de création</th>
                </tr>
            </thead>
            <tbody>
                {data.map(elt => {
                    return <tr key={elt.userId}>
                        <td style={{ whiteSpace: 'nowrap' }}><Link to={"/users/details"}>{elt.login}</Link></td>
                        <td>{elt.lastName}</td>
                        <td>{elt.firstName}</td>
                        <td>{elt.status}</td>
                        <td>{elt.creationDate}</td>
                        <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary" tag={Link} to={"/users/" + elt.userId}>Edit</Button>
                                <Button size="sm" color="danger" onClick={() => remove(elt.userId)}>Delete</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
    )
}

export default StyledUserTable;