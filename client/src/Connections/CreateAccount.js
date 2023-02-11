const CreateAccount = async (account) => {
    const response = await fetch(
        "http://localhost:8000/createAccount",
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

export default CreateAccount;
