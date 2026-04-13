/* =============================================
   OPEN WEBUI WIKI — MAIN JS
   Rabelus Lab Visual System
============================================= */

document.addEventListener('DOMContentLoaded', () => {

  // =============================================
  // PARTICLES
  // =============================================
  const particlesContainer = document.getElementById('particles');
  if (particlesContainer) {
    for (let i = 0; i < 40; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 3 + 1;
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 15 + 10}s;
        animation-delay: ${Math.random() * 10}s;
        --drift: ${(Math.random() - 0.5) * 200}px;
        opacity: ${Math.random() * 0.6 + 0.1};
      `;
      particlesContainer.appendChild(p);
    }
  }

  // =============================================
  // NAVBAR SCROLL
  // =============================================
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.background = 'rgba(8, 12, 5, 0.98)';
      navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.5)';
    } else {
      navbar.style.background = 'rgba(8, 12, 5, 0.92)';
      navbar.style.boxShadow = 'none';
    }
  });

  // =============================================
  // HAMBURGER MENU
  // =============================================
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => navLinks.classList.remove('open'));
    });
  }

  // =============================================
  // ACTIVE NAV LINK ON SCROLL
  // =============================================
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.navbar-links a');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navItems.forEach(item => {
          item.classList.remove('active-nav');
          if (item.getAttribute('href') === '#' + entry.target.id) {
            item.classList.add('active-nav');
          }
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-64px 0px 0px 0px' });
  sections.forEach(s => observer.observe(s));

  // =============================================
  // INSTALL TABS
  // =============================================
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      btn.classList.add('active');
      const targetContent = document.getElementById('tab-' + target);
      if (targetContent) targetContent.classList.add('active');
    });
  });

  // =============================================
  // COPY BUTTONS
  // =============================================
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const codeId = btn.dataset.code;
      const codeEl = document.getElementById(codeId);
      if (codeEl) {
        const text = codeEl.innerText || codeEl.textContent;
        navigator.clipboard.writeText(text).then(() => {
          btn.textContent = '✓ Copiado!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copiar';
            btn.classList.remove('copied');
          }, 2000);
        }).catch(() => {
          // Fallback
          const ta = document.createElement('textarea');
          ta.value = text;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand('copy');
          document.body.removeChild(ta);
          btn.textContent = '✓ Copiado!';
          btn.classList.add('copied');
          setTimeout(() => {
            btn.textContent = 'Copiar';
            btn.classList.remove('copied');
          }, 2000);
        });
      }
    });
  });

  // =============================================
  // FAQ ACCORDION
  // =============================================
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      // Open clicked if was closed
      if (!isOpen) item.classList.add('open');
    });
  });

  // =============================================
  // FAQ SEARCH
  // =============================================
  const faqSearch = document.getElementById('faqSearch');
  if (faqSearch) {
    faqSearch.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question span:first-child').textContent.toLowerCase();
        const answer = item.querySelector('.faq-answer').textContent.toLowerCase();
        const tags = item.dataset.tags || '';
        if (!query || question.includes(query) || answer.includes(query) || tags.includes(query)) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  }

  // =============================================
  // BACK TO TOP
  // =============================================
  const backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // =============================================
  // SCROLL REVEAL ANIMATION
  // =============================================
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  const revealElements = document.querySelectorAll(
    '.toc-card, .info-card, .feature-card, .enterprise-card, .roadmap-card, .timeline-item, .step-item, .faq-item, .provider-spoke, .tech-category, .license-card'
  );
  revealElements.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${(i % 8) * 0.05}s, transform 0.5s ease ${(i % 8) * 0.05}s`;
    revealObserver.observe(el);
  });

  // =============================================
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // =============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  // =============================================
  // ACTIVE NAV LINK STYLE
  // =============================================
  const style = document.createElement('style');
  style.textContent = `.active-nav { color: var(--olive-300) !important; }
  .active-nav::after { transform: scaleX(1) !important; }`;
  document.head.appendChild(style);

  console.log('%cOpen WebUI Wiki — Rabelus Lab', 'color: #8fb054; font-size: 16px; font-weight: bold;');
  console.log('%cBuilt with ❤️ for the AI community', 'color: #afcb7d;');
});
