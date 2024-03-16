

export async function fetchAppInfo() {
    const response = await fetch(`/api/v1/home/appInfo`);
    return await response.json();
}
