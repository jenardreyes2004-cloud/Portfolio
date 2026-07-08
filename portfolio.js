// ═══════════════════════════════════════════════════════════
//  JENARD REYES — PORTFOLIO DATA
//  Edit the values below to update the site. No build step needed.
// ═══════════════════════════════════════════════════════════

const profile = {
  name: 'Jenard Reyes',
  email: 'jenardreyes2004@gmail.com',
  phone: '0981 109 1588',
  location: 'Quezon City, Manila, Philippines',
  school: 'Systems Plus Computer College',
  year: 'BSIT · Batch 2022',
  photo: 'images/jenard-photo.jpg',
  role: 'Networking · Cloud Engineer (soon) · Cybersecurity (side)',
  tagline: 'Networking today, Cloud Engineer tomorrow, and Cybersecurity on the horizon.',
  summary: 'Currently deepening my networking skills, with a clear path toward cloud engineering — and eventually cybersecurity as a parallel study.',
  intro: 'IT student at Systems Plus Computer College currently focused on networking and full-stack web development. Built CRUD web applications using PHP and SQL, deployed a web game over LAN using ESP32, and completed Cisco-certified courses in Networking Basics, Operating Systems Basics, and Computer Hardware Basics. Aiming to become a Cloud Engineer next, with plans to study Cybersecurity on the side.',
  socials: {
    github: 'https://github.com/jenardreyes2004-cloud',
    credly: 'https://www.credly.com/users/jenard-reyes'
  }
};

const experience = [
  { company: 'C1MP', position: 'Intern', duration: '2022 · 80 Hours', tasks: ['Ledger recording and management', 'Sorting and filing ledger letters', 'General office helper duties'] }
];

const education = [
  { year: '2022 – Present', title: 'Bachelor of Science in IT', org: 'Systems Plus Computer College', desc: 'Specializing in networking, cloud fundamentals, and web development.' },
  { year: 'Graduated with High Honor', title: 'Senior High School', org: 'ABM Strand', desc: 'Accountancy, Business & Management — graduated with High Honor.' }
];

// level still drives the bar width, but the % number is never shown on the page
const skills = [
  { title: 'Networking', level: 40, icon: null, details: ['IP addressing & subnetting', 'Device configuration (Cisco)', 'Network troubleshooting'] },
  { title: 'Computer Hardware Basics', level: 30, icon: null, details: ['PC assembly & component installation', 'Device hardware & preventive maintenance', 'Laptop & mobile device fundamentals'] },
  { title: 'Front-End Development', level: 45, icon: ['images/tech-html.png', 'images/tech-css.png', 'images/tech-js.png'], details: ['HTML & CSS responsive layout', 'Bootstrap components', 'JavaScript DOM basics'] },
  { title: 'PHP (Back-End)', level: 42, icon: null, details: ['Server-side scripting', 'CRUD operations', 'Form handling & routing'] },
  { title: 'SQL / MySQL', level: 40, icon: null, details: ['Database design & queries', 'CRUD with MySQL', 'Connecting DB to PHP'] },
  { title: 'C++ Programming', level: 35, icon: null, details: ['Variables, loops, functions', 'Basic OOP concepts', 'Console-based problem solving'] }
];

// Proof links point to Credly where available. For Computer Hardware Basics,
// the proof currently opens the certificate PDF included in /certs — replace
// the "proof" value below with your Credly badge link once it's issued.
const certificates = [
  { title: 'Networking Basics', issuer: 'Cisco Networking Academy', date: 'Mar 10, 2026', proof: 'https://www.credly.com/badges/0cd8a0f1-c965-4bb3-ab5c-509ec2895e08/public_url', image: 'images/cert-networking-basics.png' },
  { title: 'Operating Systems Basics', issuer: 'Cisco Networking Academy', date: 'Jan 22, 2026', proof: 'https://www.credly.com/badges/a62689c7-174a-476f-9e55-6a68d46ab763/public_url', image: 'images/cert-os-basics.png' },
  { title: 'Network Addressing and Basic Troubleshooting', issuer: 'Cisco Networking Academy', date: 'Apr 28, 2026', proof: '#', image: 'images/cert-jenard-network-addressing.jpg' },
  { title: 'Computer Hardware Basics', issuer: 'Cisco Networking Academy', date: 'Jun 18, 2026', proof: 'certs/computer-hardware-basics.pdf', image: 'images/cert-hardware-basics-full.png' }
];

const projects = [
  {
    title: 'Group Portfolio Website', category: 'web',
    description: 'A shared portfolio site for our 4-member IT group, showcasing each member\'s specialization — networking, web dev, IoT, and documentation — with switchable member profiles, a certificate gallery, and CV export built in.',
    tags: ['Bootstrap 5', 'JavaScript', 'Team Project', 'CV Export'],
    image: 'images/project-group-portfolio.jpg', liveUrl: 'https://group-3-portfolio-sam.vercel.app/',
    note: 'Built together with Group 3: Marc Aldrin Molina, Michaela E. Zapanta, Danna Samman Bandola.'
  },
  {
    title: 'Ask You Out — Interactive Website', category: 'web',
    description: 'A playful single-page site that walks through an animated ask-out sequence with emoji reactions, sound effects, confetti, and an EmailJS-powered notification the moment someone says yes.',
    tags: ['JavaScript', 'Interactive UI', 'EmailJS', 'Animation'],
    image: 'images/project-ask-you-out.jpg', liveUrl: 'https://ask-out-azure.vercel.app/'
  },
  {
    title: 'Smart Oven Toaster (IoT)', category: 'iot',
    description: 'An IoT-powered smart oven toaster controllable manually or via smartphone. Switch between top, bottom, or both heaters. Built with improved safety: temperature fuse and ceramic fuse for electrical and heat protection.',
    tags: ['ESP32', 'IoT', 'Smart Home', 'Relay Control', 'Safety Systems'],
    image: 'images/project-smart-oven.jpg', image2: 'images/project-smart-oven-2.jpg',
    note: 'Built together with Danna Samman Bandola.'
  },
  {
    title: 'FreeCAD Pendant Design', category: 'design',
    description: 'A 3D-modeled pendant designed in FreeCAD featuring a dog engraving, circular cutouts, and a hanging hole — built with pads, pockets, and fillets for a clean, print-ready result.',
    tags: ['FreeCAD', '3D Modeling', 'CAD Design', 'Part Design'],
    image: 'images/project-freecad-pendant.jpg'
  }
];

// ═══════════════════════════════════════════════════════════
//  RENDER HELPERS
// ═══════════════════════════════════════════════════════════

function escAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function skillHtml(skill) {
  const iconsHtml = skill.icon
    ? `<div class="d-flex gap-2 mb-2">${skill.icon.map(src => `<img src="${src}" class="tech-icon-badge" alt="tech icon">`).join('')}</div>`
    : '';
  return `
    <div class="skill-box p-4 mb-3">
      <div class="mb-2">
        <h4 class="h6 fw-bold mb-1" style="font-family:'DM Sans',sans-serif;">${skill.title}</h4>
        <div class="section-muted" style="font-size:.82rem;">${skill.details.join(' · ')}</div>
      </div>
      ${iconsHtml}
      <div class="skill-meter"><span data-width="${skill.level}"></span></div>
    </div>
  `;
}

function certCardHtml(cert, index) {
  const thumbHtml = `<img src="${cert.image}" alt="${cert.title}" style="width:100%;border-radius:10px;aspect-ratio:16/9;object-fit:cover;margin-bottom:1rem;display:block;background:#fff;">`;
  return `
    <div class="col-md-6 col-xl-4">
      <button class="w-100 text-start p-0 border-0 bg-transparent cert-open" data-index="${index}">
        <div class="feature-card p-3 h-100 cert-thumb">
          ${thumbHtml}
          <h4 style="font-family:'DM Sans',sans-serif;font-size:.92rem;font-weight:700;margin-bottom:.25rem;">${cert.title}</h4>
          <div class="section-muted" style="font-size:.82rem;">${cert.issuer} · ${cert.date}</div>
          <div class="mt-2 d-flex justify-content-between align-items-center">
            <span class="tag mb-0" style="font-size:.78rem;">View certificate</span>
            <i class="bi bi-zoom-in section-muted" style="font-size:.85rem;"></i>
          </div>
        </div>
      </button>
    </div>
  `;
}

function renderSkills() {
  document.getElementById('skillList').innerHTML = skills.map(skillHtml).join('');
  document.querySelectorAll('.skill-meter > span').forEach(bar => {
    requestAnimationFrame(() => { bar.style.width = bar.dataset.width + '%'; });
  });
}

function renderCertificates() {
  document.getElementById('certGrid').innerHTML = certificates.map(certCardHtml).join('');
  const certModal = new bootstrap.Modal(document.getElementById('certModal'));
  document.querySelectorAll('.cert-open').forEach(btn => {
    btn.addEventListener('click', () => {
      const cert = certificates[Number(btn.dataset.index)];
      document.getElementById('certModalTitle').textContent = cert.title;
      document.getElementById('certModalMeta').textContent = `${cert.issuer} · ${cert.date}`;
      document.getElementById('certModalProof').href = cert.proof;
      document.getElementById('certModalDownload').href = cert.image;
      const thumb = document.getElementById('certModalThumb');
      thumb.innerHTML = `<img src="${cert.image}" alt="${cert.title}" style="width:100%;max-height:420px;object-fit:contain;display:block;">`;
      certModal.show();
    });
  });
}

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  const categoryColors = { networking: '#1a3a5c', iot: '#5a2d4a', design: '#7a5c2d', web: '#1c6e4a' };
  const categoryIcons  = { networking: 'diagram-2', iot: 'cpu', design: 'pentagon', web: 'globe2' };
  const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));

  projects
    .filter(p => filter === 'all' || p.category === filter)
    .forEach(project => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-xl-4 reveal visible';
      const thumbHtml = project.image
        ? `<img src="${project.image}" alt="${project.title}" style="width:100%;aspect-ratio:16/10;object-fit:cover;border-radius:10px;margin-bottom:1rem;display:block;">`
        : `<div style="background:#f0f0ee;border-radius:10px;aspect-ratio:16/10;display:flex;align-items:center;justify-content:center;margin-bottom:1rem;"><i class="bi bi-${categoryIcons[project.category]||'folder'}" style="font-size:2.2rem;color:#bbb;"></i></div>`;

      col.innerHTML = `
        <div class="feature-card p-3 h-100" style="display:flex;flex-direction:column;">
          ${thumbHtml}
          <div style="margin-bottom:.5rem;">
            <span style="font-size:.72rem;font-weight:700;color:${categoryColors[project.category]||'#555'};background:${categoryColors[project.category]||'#555'}18;padding:.18rem .5rem;border-radius:999px;text-transform:uppercase;letter-spacing:.08em;">${project.category}</span>
          </div>
          <h3 style="font-family:'DM Serif Display',serif;font-size:1.05rem;margin-bottom:.35rem;">${project.title}</h3>
          <p class="section-muted" style="font-size:.86rem;margin-bottom:.75rem;flex:1;">${project.description}</p>
          ${project.note ? `<div style="font-size:.78rem;color:var(--muted);margin-bottom:.75rem;"><i class="bi bi-people me-1"></i>${project.note}</div>` : ''}
          <div class="d-flex gap-2 flex-wrap">
            <button class="btn btn-sm btn-outline-dark project-open"
              data-title="${escAttr(project.title)}" data-description="${escAttr(project.description)}"
              data-tags='${JSON.stringify(project.tags)}' data-image="${project.image||''}" data-image2="${project.image2||''}" data-liveurl="${project.liveUrl||''}">View details</button>
            ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" rel="noopener" class="btn btn-sm btn-dark"><i class="bi bi-box-arrow-up-right me-1"></i>Visit Live Site</a>` : ''}
          </div>
        </div>
      `;
      grid.appendChild(col);
    });

  grid.querySelectorAll('.project-open').forEach(btn => {
    btn.addEventListener('click', () => {
      document.getElementById('modalTitle').textContent = btn.dataset.title;
      document.getElementById('modalDescription').textContent = btn.dataset.description;
      const tags = JSON.parse(btn.dataset.tags);
      document.getElementById('modalTags').innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
      const modalThumb = document.getElementById('modalThumb');
      modalThumb.innerHTML = '';
      if (btn.dataset.image) {
        modalThumb.innerHTML += `<img src="${btn.dataset.image}" alt="${btn.dataset.title}" style="width:100%;border-radius:10px;object-fit:cover;max-height:340px;display:block;">`;
        if (btn.dataset.image2) {
          modalThumb.innerHTML += `<img src="${btn.dataset.image2}" alt="${btn.dataset.title} 2" style="width:100%;border-radius:10px;object-fit:cover;max-height:340px;display:block;margin-top:.75rem;">`;
        }
      }
      const modalLive = document.getElementById('modalLiveLink');
      if (btn.dataset.liveurl) {
        modalLive.href = btn.dataset.liveurl;
        modalLive.style.display = 'inline-flex';
      } else {
        modalLive.style.display = 'none';
      }
      projectModal.show();
    });
  });
}

// ═══════════════════════════════════════════════════════════
//  CV EXPORT (percentages are left out of the printed CV too)
// ═══════════════════════════════════════════════════════════
function exportCv() {
  const printArea = document.getElementById('printArea');

  const expHtml = experience.map(e => `
    <div style="margin-bottom:12px;">
      <div style="display:flex;justify-content:space-between;align-items:baseline;">
        <div><span style="font-weight:700;font-size:13px;">${e.position}</span><span style="color:#555;font-size:13px;"> · ${e.company}</span></div>
        <span style="font-size:11px;color:#888;">${e.duration}</span>
      </div>
      <ul style="margin:4px 0 0 0;padding-left:16px;">${e.tasks.map(t => `<li style="font-size:12px;color:#555;margin-bottom:2px;">${t}</li>`).join('')}</ul>
    </div>
  `).join('');

  const skillRows = skills.map(s => `
    <div style="margin-bottom:8px;">
      <div style="margin-bottom:3px;"><span style="font-size:12px;font-weight:600;">${s.title}</span></div>
      <div style="height:6px;background:#eee;border-radius:999px;overflow:hidden;">
        <div style="height:100%;width:${s.level}%;background:linear-gradient(90deg,#1a3a5c,#2d6ba0);border-radius:999px;"></div>
      </div>
      <div style="font-size:10px;color:#888;margin-top:2px;">${s.details.join(' · ')}</div>
    </div>
  `).join('');

  const certRows = certificates.map(c => `
    <div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;">
      <div style="width:8px;height:8px;border-radius:50%;background:#1a3a5c;flex-shrink:0;"></div>
      <div><span style="font-size:12px;font-weight:600;">${c.title}</span><span style="font-size:11px;color:#888;"> — ${c.issuer} · ${c.date}</span></div>
    </div>
  `).join('');

  const projRows = projects.map(p => `
    <div style="margin-bottom:8px;">
      <span style="font-size:12px;font-weight:700;">${p.title}</span>
      <div style="font-size:11px;color:#555;margin:1px 0;">${p.description}</div>
      <div style="font-size:10px;color:#888;">${p.tags.join(' · ')}${p.liveUrl ? ` · <a href="${p.liveUrl}" style="color:#1a3a5c;">${p.liveUrl.replace('https://','')}</a>` : ''}</div>
    </div>
  `).join('');

  printArea.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;padding-bottom:16px;border-bottom:3px solid #1a3a5c;margin-bottom:20px;gap:16px;">
      <div style="display:flex;align-items:center;gap:16px;">
        <img src="${profile.photo}" alt="${profile.name}" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:3px solid #dde4ee;flex-shrink:0;" onerror="this.style.display='none'">
        <div>
          <h1 style="margin:0 0 4px;font-size:26px;letter-spacing:-0.5px;color:#0d1f33;">${profile.name}</h1>
          <p style="margin:0 0 5px;font-size:13px;color:#1a3a5c;font-weight:600;">${profile.role}</p>
          <p style="margin:0;font-size:11px;color:#555;font-style:italic;max-width:360px;">${profile.tagline}</p>
        </div>
      </div>
      <div style="text-align:right;font-size:12px;color:#555;line-height:1.9;flex-shrink:0;">
        <div>📧 ${profile.email}</div>
        <div>📱 ${profile.phone}</div>
        <div>📍 ${profile.location}</div>
        <div>💻 <a href="${profile.socials.github}" style="color:#1a3a5c;">${profile.socials.github.replace('https://', '')}</a></div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
      <div>
        <div style="margin-bottom:18px;">
          <h2 style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#1a3a5c;border-bottom:1px solid #dde4ee;padding-bottom:4px;margin:0 0 8px;">Career Objective</h2>
          <p style="font-size:12px;color:#444;line-height:1.65;margin:0;">${profile.summary} Starting with networking fundamentals, progressing toward cloud engineering, and studying cybersecurity on the side.</p>
        </div>

        ${expHtml ? `<div style="margin-bottom:18px;"><h2 style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#1a3a5c;border-bottom:1px solid #dde4ee;padding-bottom:4px;margin:0 0 8px;">Work Experience / OJT</h2>${expHtml}</div>` : ''}

        <div style="margin-bottom:18px;">
          <h2 style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#1a3a5c;border-bottom:1px solid #dde4ee;padding-bottom:4px;margin:0 0 8px;">Education</h2>
          ${education.map(ed => `
            <div style="margin-bottom:10px;">
              <div style="display:flex;justify-content:space-between;">
                <span style="font-weight:700;font-size:13px;">${ed.title}</span>
                <span style="font-size:11px;color:#888;">${ed.year}</span>
              </div>
              <div style="font-size:12px;color:#555;">${ed.org}</div>
              <div style="font-size:11px;color:#888;">${ed.desc}</div>
            </div>
          `).join('')}
        </div>

        <div style="margin-bottom:18px;">
          <h2 style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#1a3a5c;border-bottom:1px solid #dde4ee;padding-bottom:4px;margin:0 0 8px;">Certifications</h2>
          ${certRows}
        </div>
      </div>

      <div>
        <div style="margin-bottom:18px;">
          <h2 style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#1a3a5c;border-bottom:1px solid #dde4ee;padding-bottom:4px;margin:0 0 10px;">Technical Skills</h2>
          ${skillRows}
        </div>

        <div style="margin-bottom:18px;">
          <h2 style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#1a3a5c;border-bottom:1px solid #dde4ee;padding-bottom:4px;margin:0 0 8px;">Projects</h2>
          ${projRows}
        </div>

        <div>
          <h2 style="font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#1a3a5c;border-bottom:1px solid #dde4ee;padding-bottom:4px;margin:0 0 8px;">Career Roadmap</h2>
          <div style="display:flex;flex-direction:column;gap:8px;">
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:10px;height:10px;border-radius:50%;background:#1a3a5c;flex-shrink:0;"></div>
              <span style="font-size:12px;"><strong>Current:</strong> Networking</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:10px;height:10px;border-radius:50%;background:#2d6ba0;flex-shrink:0;"></div>
              <span style="font-size:12px;"><strong>Next:</strong> Cloud Engineering</span>
            </div>
            <div style="display:flex;align-items:center;gap:8px;">
              <div style="width:10px;height:10px;border-radius:50%;background:#5b8fc9;flex-shrink:0;"></div>
              <span style="font-size:12px;"><strong>Side path:</strong> Cybersecurity — parallel self-study</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style="margin-top:24px;padding-top:12px;border-top:1px solid #dde4ee;display:flex;justify-content:space-between;align-items:center;">
      <span style="font-size:10px;color:#aaa;">Systems Plus Computer College · BSIT Batch 2022</span>
      <span style="font-size:10px;color:#aaa;">Generated from Jenard Reyes' Portfolio</span>
    </div>
  `;

  printArea.style.display = 'block';
  window.print();
  setTimeout(() => { printArea.style.display = 'none'; }, 1500);
}

// ═══════════════════════════════════════════════════════════
//  EVENT LISTENERS + INIT
// ═══════════════════════════════════════════════════════════
document.getElementById('exportCvBtnHero').addEventListener('click', exportCv);
document.getElementById('exportCvBtnBottom').addEventListener('click', exportCv);

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.target.querySelector('[type=submit]');
  btn.textContent = '✓ Message sent!';
  btn.disabled = true;
  setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false; e.target.reset(); }, 3000);
});

const sections = [...document.querySelectorAll('section[id]')];
const navLinks  = [...document.querySelectorAll('.nav-link[href^="#"]')];
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 130) current = s.id; });
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + current));
});

const revealEls = document.querySelectorAll('.reveal');
const observer  = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
revealEls.forEach(el => observer.observe(el));

document.getElementById('year').textContent = new Date().getFullYear();
renderSkills();
renderCertificates();
renderProjects();
