const IsSignedIn = async (token) => {
    const response = await fetch(
        "http://localhost:8000/isSignedIn",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: await JSON.stringify(token),
            mode: 'cors',
            // credentials: 'include',
        }
    );
    return await response.json();
};

export default IsSignedIn;
