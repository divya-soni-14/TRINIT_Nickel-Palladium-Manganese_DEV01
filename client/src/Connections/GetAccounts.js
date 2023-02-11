const GetAccounts = async (account) => {
  const response = await fetch("http://localhost:8000/getAccounts", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
  let res = await response.json();
  console.log(res);
  return res;
};

export default GetAccounts;
