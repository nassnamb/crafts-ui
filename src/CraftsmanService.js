
export async function fetchCraftsman() {
    const response = await fetch('/api/v1/craftsmen/');
    return await response.json();
}

export async function getCraftsman(craftsmanId) {
    const response = await fetch(`/api/v1/craftsmen/${craftsmanId}`);
    return await response.json();
}

export async function createCraftsman(data) {
    const response = await fetch(`/api/v1/craftsmen/create`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function updateCraftman(craftsmanId, data) {
    const response = await fetch(`/api/v1/craftsmen/update/${craftsmanId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    return await response.json();
}

export async function deleteCraftsman(craftsmanId) {
    await fetch(`/api/v1/craftsmen/delete/${craftsmanId}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
}