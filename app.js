async function getUserData(username) {
  try {
    
    const response = await fetch(`https://api.github.com/users/${username}`);

    
    if (!response.ok) {
      throw new Error("User not found");
    }

    
    const data = await response.json();

    
    document.getElementById("result").innerHTML = `
      <h3>${data.name || "No name provided"}</h3>
      <p><strong>Followers:</strong> ${data.followers}</p>
      <p><strong>Following:</strong> ${data.following}</p>
      <p><strong>Public Repos:</strong> ${data.public_repos}</p>
      <img src="${data.avatar_url}" width="120" height="120" />
    `;
  } catch (error) {
    document.getElementById("result").innerHTML = `
      <p style="color:red;">❌ ${error.message}</p>
    `;
  }
}

document.getElementById("search").addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  if (username) {
    getUserData(username);
  } else {
    document.getElementById("result").innerHTML = `
      <p style="color:orange;">⚠️ Please enter a username</p>
    `;
  }
});
