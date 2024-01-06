
export async function fetchProfiles() {
    const response = await fetch('/api/v1/profiles/');
    return await response.json();
}

export async function getProfile(profileId) {
    const response = await fetch(`/api/v1/profiles/${profileId}`);
    return await response.json();
}

export async function createProfile(data) {
    const response = await fetch(`/api/v1/profiles/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function updateProfile(profileId, data) {
    const response = await fetch(`/api/v1/profiles/update/${profileId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function deleteProfile(profileId) {
    const response = await fetch(`/api/v1/profiles/delete/${profileId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
    if (!response.ok) {
        let errorMessage = 'Echec de suppression d\'un profil';

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