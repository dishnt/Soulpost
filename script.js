/**
 * SoulPost Interactive Logic
 * Handles: Service selection, Intent presets, Live Preview, and Order Processing
 */

// 1. Live Text Sync: Updates the paper canvas as the user types
const textarea = document.getElementById('letterContent');
const displayArea = document.getElementById('displayArea');

if (textarea && displayArea) {
    textarea.addEventListener('input', (e) => {
        displayArea.innerText = e.target.value || "Your words will appear here in elegant script...";
    });
}

// 2. Intent Presets: Sets the starting text based on emotional tone
function setIntent(intent) {
    const presets = {
        gratitude: "Dearest, I've been reflecting on our time together and simply wanted to say how much I appreciate...",
        apology: "I am writing this because I value our relationship more than my pride. Please accept this sincere...",
        closure: "It is time to turn this page. I wish you nothing but the best as we move forward...",
        celebration: "My heart is full as I think about this wonderful milestone. Cheers to you on this..."
    };

    if (textarea && presets[intent]) {
        textarea.value = presets[intent];
        // Trigger the input event manually to update the preview canvas
        textarea.dispatchEvent(new Event('input'));
        
        // Visual feedback for the editor
        const editorBox = document.querySelector('.editor-box');
        editorBox.style.borderColor = "#c5a059"; 
        setTimeout(() => editorBox.style.borderColor = "#ddd", 1000);
    }
}

// 3. Service Selection: Highlights the chosen medium
function selectService(serviceType) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0.5';
        card.classList.remove('active');
    });
    
    // Find the clicked card via the event
    const selectedCard = event.currentTarget;
    selectedCard.style.opacity = '1';
    selectedCard.classList.add('active');
    
    console.log(`Active Service: ${serviceType}`);
}

// 4. Order Processing & Seal Animation
function processOrder() {
    const btn = document.querySelector('.btn-send');
    const canvas = document.getElementById('canvas');
    
    if (!textarea.value.trim()) {
        alert("Please draft your message before sealing.");
        return;
    }

    // Phase 1: Processing
    btn.innerHTML = "Capturing Intention...";
    btn.disabled = true;

    // Phase 2: The "Physical Seal" Animation
    if (canvas) {
        canvas.style.transform = "scale(0.98) rotate(0deg)";
        canvas.style.boxShadow = "0 0 20px rgba(197, 160, 89, 0.4)";
    }

    setTimeout(() => {
        // Phase 3: Completion
        btn.innerHTML = "Sealed & Dispatched";
        btn.style.background = "#27ae60"; // Success Green
        
        if (canvas) {
            canvas.style.transform = "rotate(-1deg)";
            canvas.style.boxShadow = "15px 15px 40px rgba(0,0,0,0.05)";
        }

        alert("Your words have been captured. We are preparing the vellum and ink now.");
    }, 2000);
}

// 5. Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});



