// --- ملف script.js ---

// 1. Get required elements
const yesButton = document.getElementById('yes');
const noButton = document.getElementById('no');
const sElement = document.querySelector('.s'); 

// 2. Function to start movement (on Yes or No click)
function activateS() {
    // Add 'unlocked' class to move .s and remove blur
    sElement.classList.add('unlocked');
    
    // Disable buttons after the first action
    yesButton.disabled = true;
    noButton.disabled = true;
}

// 3. Function to reset movement (on .s click)
function resetS() {
    // Remove 'unlocked' class to return .s to its original position
    sElement.classList.remove('unlocked');
    
    // Re-enable buttons
    yesButton.disabled = false;
    noButton.disabled = false;
}

// 4. Attach Events
yesButton.addEventListener('click', activateS);
noButton.addEventListener('click', activateS);

// Attach the reset event to the .s element itself
sElement.addEventListener('click', resetS); 


