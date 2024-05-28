//Chamada a API
async function getUnits() {
    const settings = {
        url: "https://test-frontend-developer.s3.amazonaws.com/data/locations.json",
        method: "GET",
        timeout: 0,
    };

    try {
        const response = await fetch(settings.url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

export default getUnits;