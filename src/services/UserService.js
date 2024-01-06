
export async function fetchUsers() {
    const response = await fetch('/api/v1/users/');
    return await response.json();
}

export async function getUser(userId) {
    const response = await fetch(`/api/v1/users/byId/${userId}`);
    return await response.json();
}

export async function getUserByLogin(login) {
    const response = await fetch(`/api/v1/users/byLogin/${login}`);
    return await response.json();
}

export async function createUser(data) {
    const response = await fetch(`/api/v1/users/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function updateUser(userId, data) {
    const response = await fetch(`/api/v1/users/update/${userId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function deleteUserById(userId) {
    const response = await fetch(`/api/v1/users/delete/byId/${userId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        let errorMessage = 'Failed to delete user';

        try {
            const errorData = await response.json();
            if (errorData && errorData.message) {
              errorMessage = errorData.message;
            }
          } catch (jsonError) {
            console.error('Error parsing JSON error response:', jsonError);
          }
      
          throw new Error(errorMessage);
    }
}

export async function deleteUserByLogin(login) {
    const response = await fetch(`/api/v1/users/delete/byLogin/${login}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        let errorMessage = 'Echec de suppression d\'un utilisateur';

        try {
            const errorData = await response.json();
            if (errorData && errorData.message) {
              errorMessage = errorData.message;
            }
          } catch (jsonError) {
            console.error('Error parsing JSON error response:', jsonError);
          }
      
          throw new Error(errorMessage);
    }
}