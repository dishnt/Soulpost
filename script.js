function selectService(service) {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0.5';
        card.classList.remove('active');
    });
    
    // Highlight the selected one
    event.currentTarget.style.opacity = '1';
    event.currentTarget.classList.add('active');
    
    console.log(`Phase active: ${service}`);
}

// Add a smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function processOrder() {
    const btn = document.querySelector('.btn-send');
    btn.innerHTML = "Processing your intention...";
    
    setTimeout(() => {
        btn.innerHTML = "Sealed & Dispatched";
        btn.style.background = "#27ae60";
        alert("Your words have been captured. We are preparing the vellum and ink now.");
    }, 2000);
}
// Feature: Voice Transcription Simulation
function startVoiceRecord() {
    const btn = document.getElementById('recordVoice');
    btn.innerText = "Listening...";
    btn.style.background = "#d35400";
    
    // Logic: In a real app, integrate the Web Speech API
    setTimeout(() => {
        document.getElementById('letterContent').value = "Dearest, I wanted to say that my life is richer because you are in it. Time may pass, but these words remain.";
        btn.innerText = "Transcript Ready";
    }, 3000);
}
function setIntent(intent) {
    const textarea = document.getElementById('letterContent');
    const presets = {
        gratitude: "Dear [Name], I've been reflecting on our time together and simply wanted to say...",
        apology: "Dear [Name], I am writing this because I value our relationship more than my pride...",
        closure: "Dear [Name], it is time to turn this page. I wish you nothing but the best...",
        celebration: "Dear [Name], my heart is full as I think about this wonderful milestone..."
    };

    textarea.value = presets[intent];
    
    // Aesthetic feedback
    document.querySelector('.editor-box').style.borderColor = "var(--gold)";
    console.log(`Setting emotional tone to: ${intent}`);
}
const textarea = document.getElementById('letterContent');
const previewText = document.getElementById('previewText');

textarea.addEventListener('input', (e) => {
    previewText.innerText = e.target.value || "Your message will appear here...";
});

// Animate the "Seal" process
function triggerSealAnimation() {
    const preview = document.getElementById('letterPreview');
    preview.style.transform = "rotate(2deg) scale(0.95)";
    setTimeout(() => {
        preview.style.transform = "rotate(0deg) scale(1)";
        alert("Physical Seal Applied: Your intent is now secured.");
    }, 500);
}
// Signature Processing
document.getElementById('sigUpload').addEventListener('change', function(e) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.style.maxWidth = '150px';
        const sigPreview = document.getElementById('sigOverlay');
        sigPreview.innerHTML = '';
        sigPreview.appendChild(img);
    }
    reader.readAsDataURL(e.target.files[0]);
});

// Real-time Text Sync
document.getElementById('letterContent').addEventListener('input', (e) => {
    document.getElementById('displayArea').innerText = e.target.value;
});

// State Machine for Order Lifecycle
const OrderState = {
    DRAFTING: 'Drafting',
    PRINTING: 'Printing',
    SEALING: 'Manual Wax Sealing',
    TRANSIT: 'In Courier Transit',
    DELIVERED: 'Delivered'
};

function trackOrder(orderId) {
    console.log(`Tracking ID: ${orderId}`);
    // This would fetch from your database
    return OrderState.SEALING;
}


