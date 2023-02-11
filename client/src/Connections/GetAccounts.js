const GetAccounts = async (account) => {
    const response = await fetch(
        "http://localhost:8000/getAccounts",
        {
            headers:{
                'Access-Control-Allow-Origin': '*',
            }
        }
    );
    return await response.json();
};

export default GetAccounts;
