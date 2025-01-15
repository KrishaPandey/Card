const cards = document.querySelectorAll('.glass-card');

function handleScroll() {
  let closestCard = null;
  let closestDistance = Infinity;

  // Loop through all cards to find the one closest to the center
  cards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const cardMiddle = rect.top + rect.height / 2;
    const viewportMiddle = window.innerHeight / 2;

    // Calculate the distance between the card's middle and the viewport's middle
    const distance = Math.abs(cardMiddle - viewportMiddle);
    if (distance < closestDistance) {
      closestDistance = distance;
      closestCard = card;
    }

    // Reset all cards to their default state
    card.classList.remove('active');
  });

  // Apply the 'active' class to the card closest to the viewport's center
  if (closestCard) {
    closestCard.classList.add('active');
  }
}

// Infinite scroll cloning
function createInfiniteScroll() {
  const cardWrapper = document.querySelector('.card-wrapper');

  // Clone the cards 3 times to create an infinite scroll effect
  for (let i = 0; i < 3; i++) {
    const clones = Array.from(cards).map((card) => card.cloneNode(true));
    clones.forEach((clone) => cardWrapper.appendChild(clone));
  }
}

// Initialize
createInfiniteScroll();
handleScroll(); // Run once initially
window.addEventListener('scroll', handleScroll);
