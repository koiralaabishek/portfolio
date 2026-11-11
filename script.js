/**
 * Abishek Koirala - Systems & Desktop Portfolio
 * Interactive Scripts & Linux Terminal Simulator
 */

document.addEventListener('DOMContentLoaded', () => {
  // --------------------------------------------------------------------------
  // 1. Theme Toggle (Dark / Light) with LocalStorage
  // --------------------------------------------------------------------------
  const themeToggle = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const targetTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', targetTheme);
      localStorage.setItem('theme', targetTheme);
    });
  }

  // --------------------------------------------------------------------------
  // 2. Mobile Menu Navigation
  // --------------------------------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking link
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // --------------------------------------------------------------------------
  // 3. Interactive Linux Terminal Emulator
  // --------------------------------------------------------------------------
  const terminalForm = document.getElementById('terminalForm');
  const terminalInput = document.getElementById('terminalInput');
  const terminalOutput = document.getElementById('terminalOutput');
  const quickCmdButtons = document.querySelectorAll('.quick-cmd');

  const history = [];
  let historyIndex = -1;

  // Command handlers
  const commands = {
    help: () => `
<span class="text-green">Available Commands:</span>
  <span class="term-highlight">nextgen status</span>     - Check NextGen AI POS & ERP SaaS cluster telemetry
  <span class="term-highlight">lxrun list</span>         - List installed Linux subsystems (LxSub)
  <span class="term-highlight">lxrun run &lt;distro&gt;</span>  - Launch isolated Linux namespace environment
  <span class="term-highlight">dbstack status</span>     - Check MariaDB & PostgreSQL service status
  <span class="term-highlight">glide --version</span>    - Show Glide Files version & feature flags
  <span class="term-highlight">projects</span>           - List all primary open-source projects
  <span class="term-highlight">skills</span>             - Inspect technical skills & systems toolkit
  <span class="term-highlight">about</span>              - Read brief developer bio
  <span class="term-highlight">contact</span>            - Show email & GitHub links
  <span class="term-highlight">neofetch</span>           - Display systems info & ASCII logo
  <span class="term-highlight">clear</span>              - Clear the terminal console
`,

    'nextgen status': () => `
<span class="text-cyan">NextGen AI POS & ERP — Cloud SaaS Telemetry</span>
========================================================================
[LAYER]              [TECHNOLOGY]         [STATUS]     [DETAILS]
Core REST API        Django 6.1.3 + DRF   <span class="text-green">● ACTIVE</span>     14 Domain Apps (Port 8000)
AI Intelligence      FastAPI + Uvicorn    <span class="text-green">● READY</span>      Holt-Winters Forecasting (Port 8001)
Primary Database     PostgreSQL 16        <span class="text-green">● HEALTHY</span>    Row-locking transactions (Port 5432)
Task Broker          Redis 7 + Celery     <span class="text-green">● IDLE</span>       Queue depth: 0 | Auto-reconciliation
Offline POS PWA      React 19 + Dexie.js  <span class="text-green">● SYNCED</span>     IndexedDB local cache & ESC/POS
Nepal Fiscal Engine  IRD Gapless Seq      <span class="text-green">● COMPLIANT</span>  Annex 5/7 Books & 13% VAT Ledger
========================================================================
Default Tenant: <span class="text-green">Namaste Supermarket Pvt. Ltd.</span> (PAN: 601234567)
Repo: <a href="https://github.com/koiralaabishek/NextGen-AI-POS-ERP" target="_blank" class="text-cyan">github.com/koiralaabishek/NextGen-AI-POS-ERP</a>
`,

    'pos status': () => `
<span class="text-cyan">NextGen AI POS & ERP — Cloud SaaS Telemetry</span>
========================================================================
[LAYER]              [TECHNOLOGY]         [STATUS]     [DETAILS]
Core REST API        Django 6.1.3 + DRF   <span class="text-green">● ACTIVE</span>     14 Domain Apps (Port 8000)
AI Intelligence      FastAPI + Uvicorn    <span class="text-green">● READY</span>      Holt-Winters Forecasting (Port 8001)
Primary Database     PostgreSQL 16        <span class="text-green">● HEALTHY</span>    Row-locking transactions (Port 5432)
Task Broker          Redis 7 + Celery     <span class="text-green">● IDLE</span>       Queue depth: 0 | Auto-reconciliation
Offline POS PWA      React 19 + Dexie.js  <span class="text-green">● SYNCED</span>     IndexedDB local cache & ESC/POS
Nepal Fiscal Engine  IRD Gapless Seq      <span class="text-green">● COMPLIANT</span>  Annex 5/7 Books & 13% VAT Ledger
========================================================================
Default Tenant: <span class="text-green">Namaste Supermarket Pvt. Ltd.</span> (PAN: 601234567)
Repo: <a href="https://github.com/koiralaabishek/NextGen-AI-POS-ERP" target="_blank" class="text-cyan">github.com/koiralaabishek/NextGen-AI-POS-ERP</a>
`,

    'lxrun list': () => `
<span class="text-cyan">LxSub Subsystem Manager v1.0.0 (Linux Subsystem for Linux)</span>
========================================================================
NAME             STATUS       VERSION        STORAGE      ISOLATION
<span class="text-green">* Ubuntu-24.04</span>   Running      24.04-LTS      OverlayFS    Namespaces/Cgroups
  Arch-Linux     Stopped      Rolling        OverlayFS    Namespaces/Cgroups
  Kali-Linux     Stopped      2024.3         OverlayFS    Namespaces/Cgroups
  Alpine-Edge    Running      3.20           OverlayFS    Namespaces/Cgroups
  Fedora-41      Available    Workstation    Catalog      Uninstalled
========================================================================
Default Distro: <span class="text-green">Ubuntu-24.04</span>. Run '<span class="term-highlight">lxrun run &lt;name&gt;</span>' to enter.
`,

    'dbstack status': () => `
<span class="text-cyan">DBStack Control Panel Daemon Status</span>
============================================================
[SERVICE]        [PORT]   [PID]     [STATUS]     [UPTIME]
MariaDB          3306     14209     <span class="text-green">● RUNNING</span>    4h 22m (systemd)
PostgreSQL       5432     15881     <span class="text-green">● RUNNING</span>    4h 21m (systemd)
============================================================
All database sockets active. Root privilege broker: pkexec (Ready).
`,

    'glide --version': () => `
<span class="text-cyan">Glide Files v2.3.0 (Linux Native Release)</span>
- Engine: Flutter Desktop & Dart Asynchronous Pipeline
- UI Layer: Cupertino macOS-style Layout & GTK3 Native Backend
- Transfer: GlideDrop P2P Engine + QR WebDrop Gateway (Active on 0.0.0.0:8080)
- Buffer: 20MB RandomAccessFile Chunked Stream Pipeline
- Archive: 50+ Compression Formats (libarchive / zstd / 7z)
- Watcher: inotify Linux Directory Stream (Real-Time Auto-Sync)
`,

    projects: () => `
<span class="text-green">Featured Engineering Projects:</span>
1. <a href="#nextgen-pos" class="text-cyan font-bold">NextGen AI POS &amp; ERP</a> - Multi-tenant cloud SaaS with AI forecasting &amp; Nepal IRD VAT (Django 6 / React 19).
2. <a href="#glide-files" class="text-cyan font-bold">Glide Files</a> - macOS Finder elegance for modern Linux desktops (Flutter/GTK).
3. <a href="#dbstack" class="text-cyan font-bold">DBStack Control Panel</a> - GTK3 MariaDB &amp; PostgreSQL manager for Linux (Python/GTK).
4. <a href="#lxsub" class="text-cyan font-bold">LxSub (WSL for Linux)</a> - Isolated subsystem using C++20, namespaces &amp; OverlayFS.
5. <a href="https://github.com/koiralaabishek/Aura-Music-Player-for-linux" target="_blank" class="text-cyan">Aura Music Player</a> - Modern UI Linux audio player.
6. <a href="https://github.com/koiralaabishek/whatsapp-linux-unofficial" target="_blank" class="text-cyan">WhatsApp Linux</a> - Native Linux desktop client.
`,

    skills: () => `
<span class="text-green">Technical Stack:</span>
- <span class="text-cyan">Systems:</span> C++20, Linux Namespaces, Cgroups v2, OverlayFS, Systemd, D-Bus, Polkit, POSIX
- <span class="text-cyan">Desktop:</span> Flutter Desktop, Dart, GTK 3, PyGObject, Debian (.deb), Flatpak
- <span class="text-cyan">Cloud &amp; SaaS:</span> Python (Django 6 + DRF), FastAPI, React 19, TypeScript, PostgreSQL, Redis, Celery, Dexie.js
- <span class="text-cyan">Tooling:</span> Git, GitHub Actions, Docker, CMake, Ninja, GDB, Valgrind, Bash
`,

    about: () => `
<span class="text-green">Abishek Koirala</span>
Systems, Desktop &amp; Cloud Software Engineer based in Nepal.
Creator of NextGen AI POS &amp; ERP, Glide Files, DBStack, and LxSub (Linux Subsystem for Linux).
Driven by Unix design philosophies, low-overhead containerization, and modern UI elegance.
GitHub: https://github.com/koiralaabishek
Email:  koirala.abishek@hotmail.com
`,

    contact: () => `
<span class="text-green">Contact Coordinates:</span>
- Email:  <a href="mailto:koirala.abishek@hotmail.com" class="text-cyan">koirala.abishek@hotmail.com</a>
- GitHub: <a href="https://github.com/koiralaabishek" target="_blank" class="text-cyan">github.com/koiralaabishek</a>
- Region: Kathmandu, Nepal (UTC+5:45)
`,

    neofetch: () => `
<span class="text-cyan">         _nnnn_         </span>  <span class="text-green">abishek@linux-workstation</span>
<span class="text-cyan">        dGGGGMMb        </span>  -------------------------
<span class="text-cyan">       @p~qp~~qMb       </span>  <span class="text-yellow">OS:</span> Linux x86_64
<span class="text-cyan">       M|@||@) M|       </span>  <span class="text-yellow">Host:</span> Workstation Subsystem Engine
<span class="text-cyan">       @,----.JM|       </span>  <span class="text-yellow">Kernel:</span> 6.8.0-generic
<span class="text-cyan">      (</span><span class="text-yellow">_</span><span class="text-cyan">/    \\</span><span class="text-yellow">_</span><span class="text-cyan">)         </span>  <span class="text-yellow">Uptime:</span> 12 days, 4 hours
<span class="text-cyan">       |       |        </span>  <span class="text-yellow">Packages:</span> Glide-Files, DBStack, LxSub
<span class="text-cyan">       |       |        </span>  <span class="text-yellow">Shell:</span> /bin/bash (Interactive Portfolio)
<span class="text-cyan">    ___|_      |___     </span>  <span class="text-yellow">Languages:</span> C++20, Dart, Python, PHP
<span class="text-cyan">   (_____)____(_____)   </span>  <span class="text-yellow">Status:</span> Open for Software Engineering Roles
`,

    uname: () => `Linux abishek-portfolio 6.8.0-generic #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`,
    'uname -a': () => `Linux abishek-portfolio 6.8.0-generic #1 SMP PREEMPT_DYNAMIC x86_64 GNU/Linux`,
    sudo: () => `<span class="text-red">abishek is not in the sudoers file. This incident will be reported to Santa Claus.</span>`
  };

  function executeCommand(rawCmd) {
    const cmd = rawCmd.trim();
    if (!cmd) return;

    // Add to history
    history.push(cmd);
    historyIndex = history.length;

    // Handle 'clear'
    if (cmd.toLowerCase() === 'clear') {
      terminalOutput.innerHTML = '';
      return;
    }

    // Create entry container
    const entry = document.createElement('div');
    entry.className = 'term-entry';

    const cmdLine = document.createElement('div');
    cmdLine.className = 'term-entry-cmd';
    cmdLine.innerHTML = `<span class="term-prompt">guest@portfolio:~$</span> <span>${escapeHTML(cmd)}</span>`;

    const resultLine = document.createElement('div');
    resultLine.className = 'term-entry-result';

    const lowerCmd = cmd.toLowerCase();

    // Check specific commands or arguments
    if (commands[lowerCmd]) {
      resultLine.innerHTML = typeof commands[lowerCmd] === 'function' ? commands[lowerCmd]() : commands[lowerCmd];
    } else if (lowerCmd.startsWith('lxrun run')) {
      const parts = cmd.split(' ');
      const distro = parts[2] || 'Ubuntu-24.04';
      resultLine.innerHTML = `
<span class="text-cyan">Spawning container sandbox for ${escapeHTML(distro)}...</span>
[+] Mounting OverlayFS (lower: /var/lib/lxsub/layers/${escapeHTML(distro.toLowerCase())}, upper: /var/lib/lxsub/diffs/default)
[+] Initializing cgroups v2 resource controller (memory.max=4G, cpu.weight=100)
[+] Unsharing namespaces: CLONE_NEWPID | CLONE_NEWNS | CLONE_NEWUTS | CLONE_NEWIPC | CLONE_NEWNET
<span class="text-green">Connected to guest shell:</span>
root@${escapeHTML(distro.toLowerCase())}-subsystem:~# echo "Welcome to isolated Linux subsystem."
Welcome to isolated Linux subsystem.
`;
    } else {
      resultLine.innerHTML = `<span class="text-red">bash: ${escapeHTML(cmd)}: command not found</span>. Type <span class="term-highlight">help</span> to view available commands.`;
    }

    entry.appendChild(cmdLine);
    entry.appendChild(resultLine);
    terminalOutput.appendChild(entry);

    // Auto-scroll to bottom
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
  }

  function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
      tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
    );
  }

  if (terminalForm && terminalInput) {
    terminalForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const val = terminalInput.value;
      terminalInput.value = '';
      executeCommand(val);
    });

    // Handle history up/down arrows
    terminalInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (historyIndex > 0) {
          historyIndex--;
          terminalInput.value = history[historyIndex];
        }
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex < history.length - 1) {
          historyIndex++;
          terminalInput.value = history[historyIndex];
        } else {
          historyIndex = history.length;
          terminalInput.value = '';
        }
      }
    });
  }

  // Quick command buttons
  quickCmdButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cmd = btn.getAttribute('data-cmd');
      if (cmd) {
        executeCommand(cmd);
      }
    });
  });

  // --------------------------------------------------------------------------
  // 4. Smooth Anchor Scrolling & Active Link Highlighting
  // --------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 120;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});
