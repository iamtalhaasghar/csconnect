// Smooth scroll to sections
document.addEventListener('DOMContentLoaded', () => {
    const joinButton = document.querySelector('a[href="#participate"]');
    if (joinButton) {
        joinButton.addEventListener('click', (e) => {
            e.preventDefault();
            const participateSection = document.getElementById('participate');
            if (participateSection) {
                participateSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
});

// Add hover effects for step cards
const stepCards = document.querySelectorAll('.step-card');
stepCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.boxShadow = '0 10px 20px rgba(0, 245, 255, 0.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
    });
});

// Add hover effects for rule cards
const ruleCards = document.querySelectorAll('.rule-card');
ruleCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px)';
        card.style.borderColor = 'var(--accent)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.borderColor = 'rgba(110, 68, 255, 0.1)';
    });
}); 