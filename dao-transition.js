/* Dao page transition. One physical gesture: a charcoal sheet rises over the page you leave (which settles back into black), the next page's name resolves letter by letter on the still sheet, everything swaps behind it, the name unwinds, the sheet drops and the new page grows back into place. */
(function () {
  if (window.DaoTransition) return;
  var KEY = 'dao-transition';
  var PAGES = { 'home': ['Home', '01'], 'story': ['Story', '02'], 'evening': ['Evening', '03'], 'reserve': ['Reserve', '04'] };
  var slug = function (href) { var p = String(href || '').split('?')[0].split('#')[0]; var m = p.match(/([^\/]+)\.dc\.html$/i); if (m) return m[1].toLowerCase(); if (p === '/' || /\/index\.html$/.test(p)) return 'home'; var n = p.match(/^\/(story|evening|reserve)(\.html)?\/?$/i); return n ? n[1].toLowerCase() : null; };
  var here = slug(location.pathname) || 'home';
  try { history.scrollRestoration = 'manual'; } catch (e) {}

  var panel = null, nameEl = null, numEl = null;
  function build(name, num, covering) {
    panel = document.createElement('div');
    panel.setAttribute('data-pt-panel', '');
    panel.className = 'dao-paper'; panel.setAttribute('data-theme', 'dark');
    panel.style.cssText = 'position:fixed;inset:0;z-index:200;background:#15130F;color:#EDE8DC;display:flex;align-items:center;justify-content:center;overflow:hidden;pointer-events:none;' + (covering ? '' : 'visibility:hidden');
    var wrap = document.createElement('div');
    wrap.setAttribute('data-pt-wrap', '');
    wrap.style.cssText = 'position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;gap:20px;text-align:center';
    nameEl = document.createElement('p');
    nameEl.setAttribute('data-pt-name', '');
    nameEl.style.cssText = 'margin:0;font:300 clamp(48px,7vw,112px)/1 var(--font-display, Georgia, serif);letter-spacing:-.03em;color:#EDE8DC;white-space:nowrap;display:flex';
    Array.prototype.forEach.call(name, function (ch) { var s = document.createElement('span'); s.setAttribute('data-pt-c', ''); s.textContent = ch; s.style.cssText = 'display:inline-block;opacity:' + (covering ? 1 : 0) + ';' + (covering ? '' : 'transform:translateY(14px);filter:blur(8px)'); nameEl.appendChild(s); });
    numEl = document.createElement('p');
    numEl.setAttribute('data-pt-num', '');
    numEl.textContent = num;
    numEl.style.cssText = 'margin:0;font:400 12px/1 var(--font-body, Inter, sans-serif);color:rgba(237,232,220,.55);font-variant-numeric:tabular-nums;' + (covering ? '' : 'opacity:0;transform:translateY(10px);filter:blur(6px)');
    wrap.appendChild(nameEl); wrap.appendChild(numEl); panel.appendChild(wrap);
    (document.body || document.documentElement).appendChild(panel);
    return panel;
  }

  // arriving: the sheet is already there before the page paints
  var arriving = null;
  try { var raw = sessionStorage.getItem(KEY); if (raw) { arriving = JSON.parse(raw); sessionStorage.removeItem(KEY); if (Date.now() - arriving.t > 15000) arriving = null; } } catch (e) { arriving = null; }
  if (arriving) {
    document.documentElement.style.background = '#15130F';
    var mount = function () { if (!document.body) return requestAnimationFrame(mount); build(arriving.name, arriving.num, true); window.__daoCoveredAt = performance.now(); window.scrollTo(0, 0); };
    mount();
  }

  function pageEl() { return document.querySelector('[data-page]') || document.querySelector('x-dc') || document.body; }
  function originFor(el) { var r = el.getBoundingClientRect(); return '50% ' + (-r.top + window.innerHeight / 2) + 'px'; }

  function leave(href, comp) {
    var gsap = window.gsap; if (!gsap) { location.href = href; return; }
    var to = slug(href), meta = PAGES[to] || [to, ''];
    try { sessionStorage.setItem(KEY, JSON.stringify({ name: meta[0], num: meta[1], t: Date.now() })); } catch (e) {}
    if (comp && comp._lenis) comp._lenis.stop(); else document.body.style.overflow = 'hidden';
    if (panel) panel.remove();
    build(meta[0], meta[1], false);
    gsap.set(panel, { yPercent: 102, visibility: 'visible' });
    var page = pageEl(), SHEET = 'expo.inOut', E = 'expo.out';
    document.body.style.backgroundColor = '#000'; document.documentElement.style.background = '#000';
    gsap.set(page, { transformOrigin: originFor(page) });
    var letters = nameEl.children, numH = numEl.getBoundingClientRect().height + 20;
    gsap.set(nameEl, { y: numH / 2 });
    var tl = gsap.timeline();
    tl.to(page, { scale: 0.94, y: 16, duration: 1, ease: SHEET }, 0);
    tl.to(panel, { yPercent: 0, duration: 1, ease: SHEET }, 0);
    var LETTERS_AT = 0.7, LETTER_STAGGER = 0.028, LETTER_DUR = 2.2;
    tl.to(letters, { opacity: 1, y: 0, filter: 'blur(0px)', duration: LETTER_DUR, ease: E, stagger: LETTER_STAGGER }, LETTERS_AT);
    var numAt = LETTERS_AT + letters.length * LETTER_STAGGER + 0.9, PUSH = 1.2;
    tl.to(numEl, { opacity: 1, y: 0, filter: 'blur(0px)', duration: PUSH, ease: E }, numAt);
    tl.to(nameEl, { y: 0, duration: PUSH, ease: E }, numAt);
    var COVER_MIN = 3.0, coveredAt = 1.0, go = Math.max(numAt + 0.7, coveredAt + COVER_MIN - 0.3);
    tl.add(function () { try { sessionStorage.setItem(KEY, JSON.stringify({ name: meta[0], num: meta[1], t: Date.now() })); } catch (e) {} location.href = href; }, go);
  }

  // returns the delay (seconds) before the page's own entrance should start
  function arrive(comp) {
    var gsap = window.gsap; if (!gsap || !panel) return 0;
    var page = pageEl(), SHEET = 'expo.inOut', E = 'expo.out';
    gsap.set(panel, { yPercent: 0 });
    document.body.style.backgroundColor = '#000';
    gsap.set(page, { transformOrigin: originFor(page), scale: 0.94, y: 16 });
    var letters = Array.prototype.slice.call(nameEl.children);
    var since = window.__daoCoveredAt ? (performance.now() - window.__daoCoveredAt) / 1000 : 0;
    var HOLD = Math.max(0.25, 0.3 - since), UNWIND_STAGGER = 0.018, UNWIND_DUR = 0.75, OUT = 1.75, DROP_AFTER = -0.12;
    var tl = gsap.timeline();
    // number and letters leave together, the first beat on a still sheet; then the sheet moves and carries the rest of the fade with it
    tl.to(numEl, { opacity: 0, y: 10, filter: 'blur(6px)', duration: UNWIND_DUR, ease: E }, HOLD);
    tl.to(letters, { opacity: 0, y: 10, filter: 'blur(6px)', duration: UNWIND_DUR, ease: E, stagger: { each: UNWIND_STAGGER, from: 'end' } }, HOLD);
    var drop = Math.max(0, HOLD + DROP_AFTER), out = OUT;
    tl.to(panel, { yPercent: 102, duration: out, ease: SHEET }, drop);
    tl.to(page, { scale: 1, y: 0, duration: out, ease: SHEET, onComplete: function () { gsap.set(page, { clearProps: 'transform' }); document.body.style.backgroundColor = ''; document.documentElement.style.background = ''; } }, drop);
    tl.add(function () { if (panel) { panel.remove(); panel = null; } if (comp && comp._lenis) comp._lenis.start(); }, drop + out + 0.05);
    return drop + 0.35;
  }

  function install(comp) {
    window.addEventListener('click', function (e) {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      var a = e.target.closest && e.target.closest('a[href]'); if (!a) return;
      var href = a.getAttribute('href'), to = slug(href); if (!to) return;
      e.preventDefault(); e.stopImmediatePropagation();
      if (to === here) {
        if (comp && comp.state && comp.state.menuOpen && comp.closeMenu) comp.closeMenu();
        if (comp && comp._lenis) comp._lenis.scrollTo(0, { duration: 1.6 }); else window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      if (window.__daoLeaving) return; window.__daoLeaving = true;
      leave(href, comp);
    }, true);
    return arriving ? arrive(comp) : 0;
  }

  window.DaoTransition = { install: install, arriving: !!arriving, here: here };
})();
