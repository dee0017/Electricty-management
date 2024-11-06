// Toggle between view and edit mode
const editProfileBtn = document.getElementById('editProfileBtn');
const saveProfileBtn = document.getElementById('saveProfileBtn');
const profileForm = document.getElementById('profileForm');
const inputs = profileForm.querySelectorAll('input');

editProfileBtn.addEventListener('click', () => {
    inputs.forEach(input => input.removeAttribute('readonly')); // Make fields editable
    editProfileBtn.style.display = 'none'; // Hide Edit button
    saveProfileBtn.style.display = 'block'; // Show Save button
});

profileForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Here you would send the updated data to your server or save it in Firebase
    alert("Profile saved successfully!");

    // Reset to view mode
    inputs.forEach(input => input.setAttribute('readonly', true)); // Make fields read-only again
    editProfileBtn.style.display = 'block'; // Show Edit button
    saveProfileBtn.style.display = 'none'; // Hide Save button
});
