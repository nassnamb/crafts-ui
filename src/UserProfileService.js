
export async function fetchUser() {
    const response = await fetch('/api/v1/userProfile/');
    return await response.json();
}

export async function getUserWithProfiles() {
    const response = await fetch(`/api/v1/userProfile/usersWithProfiles`);
    return await response.json();
}
export async function getUserProfile(login) {
    const response = await fetch(`/api/v1/userProfile/${login}`);
    return await response.json();
}
export async function createUserProfile(data) {
    const response = await fetch(`/api/v1/userProfile/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function updateUserProfile(login, data) {
    const response = await fetch(`/api/v1/userProfile/update/${login}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function deleteUserProfile(login) {
    await fetch(`/api/v1/userProfile/delete/${login}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}