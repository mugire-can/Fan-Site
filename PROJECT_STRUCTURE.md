# 📁 Project Structure - Sezen & Barış Fansite

## Directory Layout

```
Fan-Site/
├── 📄 README.md                    # Project overview
├── 📄 .gitignore                   # Git ignore rules
├── 📄 PROJECT_STRUCTURE.md         # This file
│
├── 📁 src/                         # Source code
│   ├── 📁 pages/                   # HTML pages
│   │   ├── sezen_baris.html       # Home page
│   │   ├── sezen_aksu.html        # Sezen Aksu page
│   │   ├── Baris_Manco_Site.html  # Barış Manço page
│   │   ├── contact.html           # Contact page
│   │   └── Vie_prive.html         # Privacy page
│   │
│   ├── 📁 styles/                  # CSS stylesheets
│   │   ├── style.css              # Main styles
│   │   ├── style_sezen_aksu.css   # Sezen Aksu page styles
│   │   └── style_sezen_baris.css  # Barış Manço page styles
│   │
│   └── 📁 scripts/                 # JavaScript files
│       └── vibe-coding.js         # Interactive framework
│
├── 📁 assets/                      # Static assets
│   ├── 📁 images/                  # Image files
│   │   ├── logos/
│   │   ├── photos/
│   │   ├── icons/
│   │   └── covers/
│   │
│   └── 📁 fonts/                   # Font files (if any)
│
├── 📁 docs/                        # Documentation
│   ├── VIBE_CODING_GUIDE.md       # VIBE CODING documentation
│   ├── VIBE_CODING_COMPLETE_REPORT.md
│   ├── VIBE_CODING_FINAL_SUMMARY.md
│   ├── PROJECT_COMPLETION_SUMMARY.md
│   └── GIT_OPERATIONS_VERIFICATION.md
│
└── 📁 .git/                        # Git repository (hidden)
```

## File Descriptions

### Root Level
| File | Purpose |
|------|---------|
| `README.md` | Project documentation & overview |
| `.gitignore` | Git ignore rules |
| `PROJECT_STRUCTURE.md` | This structure document |

### src/pages/ (HTML)
| File | Purpose |
|------|---------|
| `sezen_baris.html` | Home page - both artists |
| `sezen_aksu.html` | Sezen Aksu biography & discography |
| `Baris_Manco_Site.html` | Barış Manço biography |
| `contact.html` | Contact form page |
| `Vie_prive.html` | Privacy policy page |

### src/styles/ (CSS)
| File | Purpose |
|------|---------|
| `style.css` | Main stylesheet (global styles) |
| `style_sezen_aksu.css` | Sezen Aksu page specific styles |
| `style_sezen_baris.css` | Barış Manço page specific styles |

### src/scripts/ (JavaScript)
| File | Purpose |
|------|---------|
| `vibe-coding.js` | Interactive framework (animations, dark mode, etc.) |

### assets/images/ (Images)
| Folder | Contains |
|--------|----------|
| `logos/` | Logo images |
| `photos/` | Profile & biographical photos |
| `icons/` | Social media & UI icons |
| `covers/` | Album covers |

### docs/ (Documentation)
| File | Purpose |
|------|---------|
| `VIBE_CODING_GUIDE.md` | Complete VIBE CODING framework guide |
| `VIBE_CODING_COMPLETE_REPORT.md` | Implementation report |
| `VIBE_CODING_FINAL_SUMMARY.md` | Final summary & metrics |
| `PROJECT_COMPLETION_SUMMARY.md` | Project completion details |
| `GIT_OPERATIONS_VERIFICATION.md` | Git operations log |

## HTML File References

### How to reference files from HTML:

```html
<!-- CSS - from src/pages/ referencing src/styles/ -->
<link rel="stylesheet" href="../styles/style.css">

<!-- JavaScript - from src/pages/ referencing src/scripts/ -->
<script src="../scripts/vibe-coding.js"></script>

<!-- Images - from src/pages/ referencing assets/images/ -->
<img src="../assets/images/logo.png" alt="Logo">
```

## Git Workflow

### Branch Strategy
- `main` - Production ready code
- `Mugire` - Development branch (your working branch)
- `Modifications` - Alternative development branch

### Commit Flow
1. Work on `Mugire` branch
2. Make changes
3. `git add` modified files
4. `git commit` with descriptive message
5. `git push origin Mugire`
6. Create Pull Request to `main`
7. Merge when approved

## Development Guidelines

### Adding New Pages
1. Create HTML in `src/pages/`
2. Create CSS in `src/styles/`
3. Reference correctly in HTML
4. Link in navigation menu

### Adding Images
1. Optimize image first (< 500KB)
2. Place in appropriate folder in `assets/images/`
3. Update HTML with correct path
4. Commit with image files

### Modifying Scripts
1. Edit `src/scripts/vibe-coding.js`
2. Test in browser
3. Commit with message describing changes
4. Push to GitHub

## Total Project Stats

- **HTML Pages**: 5
- **CSS Files**: 3
- **JavaScript Files**: 1
- **Documentation Files**: 5
- **Organized Folders**: 8
- **Total Size**: ~80 KB (without images)

## How to Use This Structure

### For Development
```bash
# Make changes in src/ folder
# Test in browser with correct relative paths
# Commit organized changes
git add src/
git commit -m "Feature: Description"
git push origin Mugire
```

### For Deployment
```bash
# All files ready to deploy
# Directory structure optimized
# Assets properly organized
# Ready for production
```

---

**Last Updated**: December 23, 2025  
**Version**: 1.0  
**Status**: Active & Organized
