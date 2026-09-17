
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll('.video-wrapper').forEach(wrapper => {
    const thumbnail = wrapper.querySelector('.video-thumbnail');
    const modal = wrapper.querySelector('.video-modal');
    const iframe = wrapper.querySelector('iframe');
    const closeBtn = wrapper.querySelector('.close-btn');
    if (!thumbnail || !modal) return;
    thumbnail.addEventListener('click', function() {
      modal.style.display = 'flex';
      if (iframe && iframe.getAttribute('data-src')) {
        iframe.src = iframe.getAttribute('data-src');
      }
    });
    if (closeBtn) {
      closeBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        modal.style.display = 'none';
        if (iframe) iframe.src = '';
      });
    }
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.style.display = 'none';
        if (iframe) iframe.src = '';
      }
    });
  });
});


window.addEventListener('load', function() {
    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
      const thumbnail = wrapper.querySelector('.video-thumbnail');
      const modal = wrapper.querySelector('.video-modal');
      const iframe = wrapper.querySelector('iframe');
      const closeBtn = wrapper.querySelector('.close-btn');
      thumbnail.addEventListener('click', function() {
        modal.style.display = 'flex';
        iframe.src = iframe.getAttribute('data-src'); 
      });
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        iframe.src = '';
      });
      window.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.style.display = 'none';
          iframe.src = '';
        }
      });
    });
  });

window.addEventListener('load', function() {
    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
      const thumbnail = wrapper.querySelector('.video-thumbnail');
      const modal = wrapper.querySelector('.video-modal');
      const iframe = wrapper.querySelector('iframe');
      const closeBtn = wrapper.querySelector('.close-btn');
      thumbnail.addEventListener('click', function() {
        modal.style.display = 'flex';
        iframe.src = iframe.getAttribute('data-src'); 
      });
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        iframe.src = '';
      });
      window.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.style.display = 'none';
          iframe.src = '';
        }
      });
    });
  });

window.addEventListener('load', function() {
    document.querySelectorAll('.video-wrapper').forEach(wrapper => {
      const thumbnail = wrapper.querySelector('.video-thumbnail');
      const modal = wrapper.querySelector('.video-modal');
      const iframe = wrapper.querySelector('iframe');
      const closeBtn = wrapper.querySelector('.close-btn');
      thumbnail.addEventListener('click', function() {
        modal.style.display = 'flex';
        iframe.src = iframe.getAttribute('data-src'); 
      });
      closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
        iframe.src = '';
      });
      window.addEventListener('click', function(e) {
        if (e.target === modal) {
          modal.style.display = 'none';
          iframe.src = '';
        }
      });
    });
  });

(function () {
  function initBreadcrumb() {
    var container = document.getElementById('js-breadcrumb');
    if (!container) return;
    var list = container.querySelector('.dynamic-breadcrumb__items');
    if (!list) return;
    if (list.dataset.breadcrumbReady === 'true') return;
    list.dataset.breadcrumbReady = 'true';
    var pathname = window.location.pathname;
    if (pathname.length > 1 && pathname.endsWith('/')) {
      pathname = pathname.slice(0, -1);
    }
    var segments = pathname.split('/').filter(Boolean);
    var items = [];
    var accPath = '';
    items.push({
      name: 'Home',
      href: '/'
    });
    segments.forEach(function (seg) {
      accPath += '/' + seg;
      items.push({
        name: slugToTitle(seg),
        href: accPath
      });
    });
    list.innerHTML = items.map(function (item, index) {
      var isLast = index === items.length - 1;
      var isHomeOnly = pathname === '/' && index === 0;
      if (isLast || isHomeOnly) {
        return (
          '<li class="dynamic-breadcrumb__item dynamic-breadcrumb__item--current">' +
            '<span class="dynamic-breadcrumb__text" aria-current="page">' +
              escapeHtml(item.name) +
            '</span>' +
          '</li>'
        );
      }
      return (
        '<li class="dynamic-breadcrumb__item">' +
          '<a class="dynamic-breadcrumb__link" href="' + item.href + '">' +
            escapeHtml(item.name) +
          '</a>' +
        '</li>'
      );
    }).join('');
    // Hanya generate schema untuk page selain home/root
    if (pathname !== '/') {
      injectBreadcrumbSchema(items);
    } else {
      removeBreadcrumbSchema();
    }
  }
  function injectBreadcrumbSchema(items) {
    removeBreadcrumbSchema();
    var schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map(function (item, index) {
        return {
          "@type": "ListItem",
          "position": index + 1,
          "name": item.name,
          "item": window.location.origin + item.href
        };
      })
    };
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'js-breadcrumb-schema';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
  function removeBreadcrumbSchema() {
    var existing = document.getElementById('js-breadcrumb-schema');
    if (existing) existing.remove();
  }
  function slugToTitle(str) {
    return decodeURIComponent(str)
      .split('-')
      .filter(Boolean)
      .map(function (word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(' ');
  }
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBreadcrumb);
  } else {
    initBreadcrumb();
  }
})();

(function(a,b,c,d){window.fetch("https://www.g2.com/products/motion-the-agency/rating_schema.json").then(e=>e.json()).then(f=>{c=a.createElement(b);c.type="application/ld+json";c.text=JSON.stringify(f);d=a.getElementsByTagName(b)[0];d.parentNode.insertBefore(c,d);});})(document,"script");

document.getElementById("cards").onmousemove = (e) => {
  for (const card of document.getElementsByClassName("card")) {
    const rect = card.getBoundingClientRect(),
      x = e.clientX - rect.left,
      y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  }
};