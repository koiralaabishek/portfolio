# Abishek Koirala — Engineering Portfolio Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live%20Site-blue.svg)](https://koiralaabishek.github.io/portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

Personal engineering portfolio website showcasing low-level Linux systems, native desktop software, and full-stack software engineering projects.

🔗 **Live Website**: [https://koiralaabishek.github.io/portfolio/](https://koiralaabishek.github.io/portfolio/)

---

## 🚀 Featured Projects Showcased

1. **[Glide Files](https://github.com/koiralaabishek/Glide-Files-)**:
   - The elegance of macOS Finder, engineered for modern Linux desktops.
   - Built with **Flutter**, **Dart**, and **GTK 3**.
   - Features **GlideDrop P2P Engine** (AirDrop protocol for Android, iOS, Windows, Linux) + QR WebDrop Gateway, 20MB chunked buffer pipeline, and universal archive handling (50+ formats).

2. **[DBStack Control Panel](https://github.com/koiralaabishek/DBStack)**:
   - Modern native **GTK 3** Control Panel for Linux to install, configure, and manage **MariaDB** and **PostgreSQL** database servers.
   - Features 1-click engine installation with `pkexec` privilege escalation, PID monitoring, built-in SQL runner, and live `journalctl` log streaming.

3. **[LxSub — Linux Subsystem for Linux](https://github.com/koiralaabishek/Linux-SubSytem-Linux)**:
   - WSL for Linux desktops and servers.
   - Built with modern **C++20**, **Linux Namespaces** (`CLONE_NEWPID`, `CLONE_NEWNS`, `CLONE_NEWNET`, etc.), **Cgroups v2**, and **Copy-on-Write (COW) OverlayFS** storage.
   - Includes intuitive `lxrun` CLI utility for instant snapshotting, cloning, and multi-distro sandboxing.

---

## 🛠️ Tech Stack & Features

- **Pure Modern Web**: HTML5, CSS3, Vanilla JavaScript (zero bloat, instant page speed, zero dependencies).
- **Interactive Linux Terminal Widget**: In-browser shell simulation allowing visitors to run commands like `lxrun list`, `dbstack status`, `glide --version`, `skills`, and `neofetch`.
- **Responsive & Accessible**: Tested across desktop, tablet, and mobile screens.
- **Dark & Light Mode**: Theme toggle with persistent local storage.
- **Automated Deployment**: GitHub Actions workflow automatically publishing to GitHub Pages on every push to `main`.

---

## 💻 Running Locally

Simply serve with any local HTTP server:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve .
```

Then open `http://localhost:8000` in your web browser.

---

## 📬 Contact & Connect

- **GitHub**: [@koiralaabishek](https://github.com/koiralaabishek)
- **Email**: [koirala.abishek@hotmail.com](mailto:koirala.abishek@hotmail.com)
- **Location**: Kathmandu, Nepal
