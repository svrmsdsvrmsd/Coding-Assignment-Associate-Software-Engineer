
function submitForm() {
  // Fetch input values
  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const dob = document.getElementById('dob').value;
  const country = document.getElementById('country').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const profession = document.getElementById('profession').value;
  const mobileNumber = document.getElementById('mobileNumber').value;

  // Validate input values (add more validations as needed)

  // Display popup with submission details
  const popupContent = `
    <strong>Full Name:</strong> ${fullName}<br>
    <strong>Email:</strong> ${email}<br>
    <strong>Date of Birth:</strong> ${dob}<br>
    <strong>Country:</strong> ${country}<br>
    <strong>Gender:</strong> ${gender ? gender.value : 'Not specified'}<br>
    <strong>Profession:</strong> ${profession}<br>
    <strong>Mobile Number:</strong> ${mobileNumber}
  `;
  document.getElementById('popupContent').innerHTML = popupContent;
  document.getElementById('popup').style.display = 'block';

  // Reset form
  resetForm();
}

function resetForm() {
  document.getElementById('surveyForm').reset();
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

