const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeMobileMenu = document.getElementById('close-mobile-menu');
const overlay = document.querySelector('.overlay');
mobileMenuToggle?.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  overlay.classList.add('open');
  document.body.classList.add('no-scroll');
  setTimeout(() => mobileMenu.classList.add('show'), 10);
});
function closeMenu() {
  mobileMenu.classList.remove('show');
  overlay.classList.remove('open');
  document.body.classList.remove('no-scroll');
  setTimeout(() => mobileMenu.classList.add('hidden'), 300);
}
closeMobileMenu?.addEventListener('click', closeMenu);
overlay?.addEventListener('click', closeMenu);
document.querySelectorAll('.mobile-dropdown-toggle').forEach(toggle => {
  toggle.addEventListener('click', function () {
    const dropdown = this.nextElementSibling;
    const icon = this.querySelector('.fa-chevron-down');
    dropdown.classList.toggle('show');
    icon.classList.toggle('rotate-180');
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) { // Tailwind 'lg' breakpoint
    closeMenu();
  }
});

// Dropdown toggle
const dropdowns = ['coursesDropdown'];
function toggleDropdown(menuId, buttonElement) {
  const menu = document.getElementById(menuId);
  const icon = buttonElement.querySelector('i.fas.fa-chevron-down');
  // Close other open dropdowns
  document.querySelectorAll('.dropdown-menu').forEach(el => {
    if (el.id !== menuId) el.classList.add('hidden');
  });
  document.querySelectorAll('button i.fas.fa-chevron-down').forEach(el => {
    if (el !== icon) el.classList.remove('rotate-180');
  });
  // Toggle this dropdown
  menu.classList.toggle('hidden');
  if (icon) icon.classList.toggle('rotate-180');
}
// Close when clicking outside
document.addEventListener('click', function (event) {
  const dropdowns = ['coursesDropdown'];
  dropdowns.forEach(dropdownId => {
    const dropdown = document.getElementById(dropdownId);
    const menu = document.getElementById(dropdownId.replace('Dropdown', 'Menu'));
    const icon = dropdown.querySelector('i.fas.fa-chevron-down');
    if (dropdown && menu && !dropdown.contains(event.target)) {
      menu.classList.add('hidden');
      if (icon) icon.classList.remove('rotate-180');
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  // Only run if body has class "index"
  if (!body.classList.contains('index')) return;

  const header = document.getElementById('mainHeader');
  if (!header) return;

  // Apply default header classes
  header.classList.add(
    'fixed',
    'top-0',
    'left-0',
    'w-full',
    'z-50',
    'transition-all',
    'duration-300',
    'bg-transparent',
    'text-white',
  );
  header.classList.remove(
    'sticky',
    'bg-white',
    'text-gray-900',
    'shadow-md',

  );


  // Set default logo or create it
  let logo = header.querySelector('.logo-img');
  if (!logo) {
    logo = document.createElement('img');
    logo.className = 'logo-img';
    logo.alt = 'logo';
    header.prepend(logo);
  }
  logo.src = 'assets/images/logo-transparent.png';

  // Change all nav <a> tags to black
  const navLinks = header.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.classList.remove('text-black', 'text-gray-500');
    link.classList.add('text-white');
  });
});


function handleHeaderScroll() {
  const header = document.getElementById('mainHeader');

  // Only run if header exists and is inside a .index parent
  if (!header || !header.closest('.index')) return;

  const logo = header.querySelector('.logo-img'); // Use single logo image
  const isScrolled = window.scrollY > 70;

  // Header background and text
  header.classList.toggle('bg-white', isScrolled);
  header.classList.toggle('text-gray-900', isScrolled);
  header.classList.toggle('text-white', !isScrolled);
  header.classList.toggle('shadow-md', isScrolled);

  // Change logo path when scrolled
  if (logo) {
    logo.src = isScrolled
      ? 'assets/images/logo.png' // dark version or solid header
      : 'assets/images/logo-transparent.png'; // transparent version
  }

  // Nav links (optional)
  document.querySelectorAll('nav.hidden a').forEach(link => {
    link.classList.toggle('text-white', !isScrolled);
    link.classList.toggle('text-gray-900', isScrolled);
  });

  // Header icons
  header.querySelectorAll('i.fas').forEach(icon => {
    icon.classList.toggle('text-gray-800', isScrolled);
    icon.classList.toggle('text-white', !isScrolled);
  });
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  handleHeaderScroll(); // Initial check
  window.addEventListener('scroll', handleHeaderScroll);
});


// Only run this when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  handleHeaderScroll(); // Initial state check
  window.addEventListener('scroll', handleHeaderScroll);
});

// Tab Navigation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Add 'active' to the clicked one
    button.classList.add('active');

    // Hide all tab contents
    tabContents.forEach(content => content.classList.add('hidden'));

    // Show the corresponding tab content
    const tabId = button.getAttribute('data-tab');
    const activeTabContent = document.getElementById(tabId);
    if (activeTabContent) {
      activeTabContent.classList.remove('hidden');
    }
  });
});




// slider js
const coursesSwiper = new Swiper(".product-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});

// Initialize Swiper for Blog Posts
const blogSwiper = new Swiper('.blog-swiper', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
  effect: 'slide',
  speed: 600,
});


// Initialize Swiper for Testimonials
const testimonialsSwiper = new Swiper('.testimonials-swiper', {
  slidesPerView: 1,
  spaceBetween: 25,
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {

    640: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
  effect: 'slide',
  speed: 800,
});

// team Swiper
if (document.querySelector('.team-swiper')) {
  const teamSwiper = new Swiper('.team-swiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 500,
    navigation: {
      nextEl: '.swiper-button-next.team-arrow',
      prevEl: '.swiper-button-prev.team-arrow',
    },
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    }
  });
}

// list and grid view
const gridViewBtn = document.getElementById('grid-view-btn');
const listViewBtn = document.getElementById('list-view-btn');
const productsContainer = document.getElementById('products-container');
if (gridViewBtn && listViewBtn && productsContainer) {
  gridViewBtn.addEventListener('click', () => {
    productsContainer.classList.remove('list-view');
    productsContainer.classList.add('grid-view');
    productsContainer.classList.remove('space-y-5', 'xl:space-y-6');
    productsContainer.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'xl:grid-cols-3', 'gap-4', 'md:gap-6');
    gridViewBtn.classList.add('active');
    listViewBtn.classList.remove('active');
  });
  listViewBtn.addEventListener('click', () => {
    productsContainer.classList.remove('grid-view');
    productsContainer.classList.add('list-view');
    productsContainer.classList.remove('grid', 'grid-cols-1', 'sm:grid-cols-2', 'xl:grid-cols-3', 'gap-4', 'md:gap-6');
    productsContainer.classList.add('space-y-5', 'xl:space-y-6');
    listViewBtn.classList.add('active');
    gridViewBtn.classList.remove('active');
  });
}
// Mobile Filter
const filterBtn = document.getElementById('filter-icon');
const filterPanel = document.getElementById('mobile-filter');
const filterOverlay = document.querySelector('.overlay');
const filterClose = document.getElementById('filter-close');
function openFilter() {
  if (filterPanel && filterOverlay) {
    filterPanel.classList.remove('-translate-x-full');
    filterOverlay.classList.add('open');
    document.body.classList.add('no-scroll');
  }
}
function closeFilter() {
  if (filterPanel && filterOverlay) {
    filterPanel.classList.add('-translate-x-full');
    filterOverlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }
}
// Attach event listeners
if (filterBtn) {
  filterBtn.addEventListener('click', openFilter);
}
if (filterClose) {
  filterClose.addEventListener('click', closeFilter);
}
if (filterOverlay) {
  filterOverlay.addEventListener('click', closeFilter);
}
// Close filter on window resize if screen becomes large
function handleResize() {
  if (window.innerWidth >= 1024) {
    closeFilter();
  }
}
function openSearchPopup() {
  const popup = document.getElementById('searchPopup');
  popup.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeSearchPopup() {
  const popup = document.getElementById('searchPopup');
  popup.classList.remove('active');
  document.body.style.overflow = 'auto';
}
