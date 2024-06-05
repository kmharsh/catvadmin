const API_URL = 'https://jsonplaceholder.typicode.com'; 

const loginWithMobileNumber = async (formData) => {
    try {
        const response = await fetch(`${API_URL}/posts`, { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('API error: ' + error.message);
    }
};

export { loginWithMobileNumber };
