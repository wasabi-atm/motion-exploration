/**
 * Motion The Agency — Apple HIG Inspired Mobile Navigation Controller
 * Features:
 * - Mutually exclusive smooth accordion disclosures
 * - Synchronized Webflow state & body scroll freeze
 * - Native iOS-style tap responsiveness & auto-scroll into view
 */

(function () {
  'use strict';

  function initMobileNav() {
    const navbar = document.querySelector('.navbar.capsule');
    if (!navbar) return;

    const menuButton = navbar.querySelector('.menu-button');
    const navMenu = navbar.querySelector('.nav-menu.responsive');
    const dropdowns = navbar.querySelectorAll('.nav-drop.w-dropdown');

    if (!menuButton || !navMenu) return;

    function isMobile() {
      return window.innerWidth <= 991;
    }

    function toggleMenu(forceClose) {
      const isOpen = document.body.classList.contains('mobile-nav-open');
      const shouldClose = forceClose || isOpen;
      if (shouldClose) {
        document.body.classList.remove('mobile-nav-open');
        menuButton.classList.remove('w--open');
        navMenu.classList.remove('w--open');
      } else {
        document.body.classList.add('mobile-nav-open');
        menuButton.classList.add('w--open');
        navMenu.classList.add('w--open');
      }
    }

    // Synchronize with Webflow's class mutations
    const observer = new MutationObserver(function (mutations) {
      if (!isMobile()) return;
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === 'class') {
          const isOpen = menuButton.classList.contains('w--open');
          document.body.classList.toggle('mobile-nav-open', isOpen);
        }
      });
    });
    observer.observe(menuButton, { attributes: true });

    // Fallback menu toggle if Webflow does not handle it
    menuButton.addEventListener('click', function () {
      if (!isMobile()) return;
      setTimeout(function () {
        const isWebflowOpen = menuButton.classList.contains('w--open');
        const hasBodyClass = document.body.classList.contains('mobile-nav-open');
        if (isWebflowOpen !== hasBodyClass) {
          document.body.classList.toggle('mobile-nav-open', isWebflowOpen);
        }
      }, 60);
    });

    // Close when clicking outside navbar
    document.addEventListener('click', function (e) {
      if (!isMobile()) return;
      if (document.body.classList.contains('mobile-nav-open')) {
        if (!navbar.contains(e.target)) {
          toggleMenu(true);
        }
      }
    });

    // Accordion Dropdowns on Mobile
    dropdowns.forEach(function (dropdown) {
      const toggle = dropdown.querySelector('.dropdown-toggle');
      const list = dropdown.querySelector('.nav-drop-list');
      if (!toggle) return;

      toggle.addEventListener('click', function (e) {
        if (!isMobile()) return;

        // Prevent navigation from nested link tags inside header (e.g. Services / Pricing)
        e.preventDefault();
        e.stopPropagation();

        const wasExpanded = dropdown.classList.contains('mobile-expanded');

        // Close all other dropdowns for pure accordion behavior
        dropdowns.forEach(function (other) {
          if (other !== dropdown) {
            other.classList.remove('mobile-expanded');
            const otherList = other.querySelector('.nav-drop-list');
            if (otherList) otherList.classList.remove('w--open');
          }
        });

        if (wasExpanded) {
          dropdown.classList.remove('mobile-expanded');
          if (list) list.classList.remove('w--open');
        } else {
          dropdown.classList.add('mobile-expanded');
          if (list) list.classList.add('w--open');

          // Smoothly scroll the newly opened accordion into view if needed
          setTimeout(function () {
            const scrollContainer = navbar.querySelector('.nav-menu_list');
            if (scrollContainer) {
              const dropdownRect = dropdown.getBoundingClientRect();
              const containerRect = scrollContainer.getBoundingClientRect();
              if (dropdownRect.top < containerRect.top + 70) {
                dropdown.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }, 120);
        }
      });
    });

    // Close mobile menu when an internal destination link is tapped
    const internalLinks = navMenu.querySelectorAll('a:not(.dropdown-toggle):not(.link-block-5)');
    internalLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (isMobile()) {
          toggleMenu(true);
        }
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && document.body.classList.contains('mobile-nav-open')) {
        toggleMenu(true);
      }
    });

    // Reset on window resize to desktop
    window.addEventListener('resize', function () {
      if (!isMobile() && document.body.classList.contains('mobile-nav-open')) {
        toggleMenu(true);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }
})();
