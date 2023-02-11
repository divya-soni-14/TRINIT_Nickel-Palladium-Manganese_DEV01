const GetAllProjects = async () => {
  const response = await fetch("http://localhost:8000/getAllProjects", {
    method: "GET",
    headers: {
      "Content-Type": "application/JSON",
    },
    mode: "cors",
    // credentials: 'include',
  });
  return await response.json();
};

export default GetAllProjects;
