#Technology Choices and Rationale

HTML: For structuring the card elements and layout.
CSS: For styling the card wrapper and individual cards, including the "glass" effect.
JavaScript: Used for adding the scroll effect, dynamic card cloning, and determining the closest card to the viewport center.

#Known Limitations

Performance: Cloning cards multiple times can lead to performance issues if there are too many cards or complex styles. Consider optimizing the DOM if performance becomes a concern.
Responsiveness: The layout and scroll effects may need further adjustments for smaller screens. Additional media queries might be required for a fully responsive design.

#Future Improvements

Lazy Loading: Implement lazy loading for cards to improve performance on large datasets by only loading cards that are visible on screen.
