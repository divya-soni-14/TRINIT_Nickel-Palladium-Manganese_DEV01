const Login = async (account) => {
    const response = await fetch(
        "http://localhost:8000/login",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/JSON'
            },
            body: await JSON.stringify(account),
            mode: 'cors',
            // credentials: 'include',
        }
    );
    return await response.json();
};

export default Login;
