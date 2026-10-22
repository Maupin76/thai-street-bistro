import { menuItems } from "./menuItems.js";

// Function to render menu items into a specific container
function renderMenuItems(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Filter by category AND check if item is available (defaults to true if omitted)
  const filteredItems = menuItems.filter(
    (item) => item.category === category && item.isAvailable !== false,
  );

  container.innerHTML = filteredItems
    .map(
      (item) => `
    <div class="menu__item">
      <img 
        src="${item.image}" 
        alt="${item.alt}" 
        class="menu__image" 
        width="300" 
        height="300" 
        loading="lazy" 
      />
      <h4 class="menu__item-title">${item.title}</h4>
      <p class="menu__price">${item.price}</p>
      <p class="menu__description">${item.description}</p>
    </div>
  `,
    )
    .join("");
}

// Populate the menu sections
renderMenuItems("main", "main-dishes");
renderMenuItems("soups", "soups");
renderMenuItems("sides", "sides");
renderMenuItems("drinks", "drinks");
