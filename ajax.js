const endpoint = 'https://api.github.com/users/Tronaluz';

async function fetchUserData() {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Erro na resposta');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Erro ao carregar dados:', error);
    return null;
  }
}

async function updateProfileInfo(userData) {
  const profileName = document.getElementById('name');
  const profileUsername = document.getElementById('username');
  const repositories = document.getElementById('repositories');
  const followers = document.getElementById('followers');
  const following = document.getElementById('following');

  profileName.textContent = userData.name || '';
  profileUsername.textContent = userData.login || '';
  repositories.textContent = userData.public_repos || '';
  followers.textContent = userData.followers || '';
  following.textContent = userData.following || '';
}

document.addEventListener('DOMContentLoaded', async () => {
  const userData = await fetchUserData();
  if (userData) {
    updateProfileInfo(userData);
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const profileLink = document.querySelector('.profile-link');
    
    if (profileLink) {
      profileLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(profileLink.href, '_blank');
      });
    }
  });
  