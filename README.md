# Portfolio Professionale - Zain Akram

Un portfolio web moderno, professionale e completamente responsive realizzato da Zain Akram, studente di Informatica e Web Developer.

## 📋 Contenuto

- **Home**: Hero section accattivante, sezioni informative, showcase di servizi e anteprima progetti
- **Portfolio**: Visualizzazione completa dei progetti con filtri, descrizioni dettagliate e tecnologie utilizzate
- **Competenze**: Showcase delle competenze tecniche con progress bar animate, stack tecnologico, timeline di apprendimento
- **Contatti**: Form di contatto professionale, informazioni di contatto, FAQ e social links

## 🎨 Design & Stile

### Palette Colori
- **Nero Profondo**: #0A0A0A (Background principale)
- **Blu Notte**: #0F172A (Sezioni secondarie)
- **Blu Professionale**: #2563EB (Primary color, accenti)
- **Bianco**: #FFFFFF (Testo principale)
- **Grigio Chiaro**: #D1D5DB (Testo secondario)

### Caratteristiche Design
- ✨ Design minimalista e moderno
- 📱 100% responsive (mobile, tablet, desktop)
- 🎯 Animazioni fluide e micro-interazioni
- ♿ Accessibilità WCAG compliant
- 🚀 Performance ottimizzate
- 🎨 Design System coerente con CSS Variables

## 🏗️ Struttura del Progetto

```
portfolio-zain/
│
├── index.html                 # Home page
├── portfolio.html             # Portfolio projects
├── competenze.html            # Skills & expertise
├── contatti.html              # Contact page
│
├── style.css                  # Global styles & design system
├── portfolio.css              # Portfolio page styles
├── skills.css                 # Skills page styles
├── contact.css                # Contact page styles
│
├── main.js                    # Global functionality
├── portfolio.js               # Portfolio interactions
├── animations.js              # Advanced animations
│
├── assets/
│   ├── images/               # Project & profile images
│   └── icons/                # Icon files
│
└── README.md                  # This file
```

## 💻 Tecnologie Utilizzate

### Frontend
- **HTML5**: Semantic markup, SEO optimized
- **CSS3**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript (Vanilla)**: No frameworks, pure ES6+
  - Intersection Observer API
  - Event Listeners
  - DOM Manipulation

### Features
- Responsive Design (Mobile-First)
- Smooth Scrolling
- Lazy Loading Images
- Form Validation
- Mobile Menu Toggle
- Progress Bar Animations
- Project Filtering
- FAQ Accordion
- Scroll-to-Top Button

## 🚀 Come Usare

### Visualizzazione Locale
1. Clona o scarica il progetto
2. Apri `index.html` nel browser
3. Naviga le diverse pagine usando il menu

### Deployment
Il portfolio è pronto per essere caricato su qualsiasi hosting web:
- **GitHub Pages**: Carica su un repository GitHub
- **Netlify**: Drag & drop il progetto
- **Vercel**: Push su GitHub e collega a Vercel
- **Tradizionale Hosting**: Carica i file via FTP/SFTP

## 📄 Pagine Disponibili

### Home (index.html)
- Hero section con CTA
- Sezione "Chi Sono"
- Servizi offerti (6 servizi)
- Statistiche
- Tecnologie principali
- Preview ultimi 3 progetti
- Call-to-action finale

### Portfolio (portfolio.html)
- Hero section
- **Filtri progetti**: Tutti, Sviluppo Web, Design, Responsive
- **3 Progetti completi**:
  1. Fondazione Ikarus Grumello (UX/UI Design)
  2. Portfolio Personale (Web Development)
  3. Sito Ristorante (Responsive Design)
- Descrizioni dettagliate, tecnologie e obiettivi
- Call-to-action per contatti

### Competenze (competenze.html)
- **Skill Categories** con progress bar animate:
  - Sviluppo Front-End (HTML5, CSS3, JavaScript, Responsive)
  - Design & UX/UI (Figma, Wireframing, Prototipazione)
  - Progettazione Software (Analisi, Architettura, Database, API)
- **Stack Tecnologico** (12 tecnologie)
- **Livelli di Expertise** (Expert, Intermedio, Fondamenti)
- **Soft Skills** (6 skills con descrizioni)
- **Timeline di Apprendimento** (2020-2024)
- **Certificazioni e Formazione** (6 certificazioni)

### Contatti (contatti.html)
- **Informazioni di Contatto**:
  - Email
  - Telefono
  - Localizzazione
  - Disponibilità oraria
  - Social media links
- **Form di Contatto** professionale con:
  - Validazione form
  - Feedback utente (success/error messages)
  - Styling moderno
- **FAQ Section** con accordion:
  - 6 domande frequenti
  - Risposte dettagliate
  - Icone intuitive

## ✨ Features Speciali

### Animazioni
- Fade-in on scroll (Intersection Observer)
- Progress bar animate (skill percentage)
- Counter animation (statistics)
- Smooth transitions su hover
- Mobile menu toggle animato
- Scroll-to-top button
- Ripple effect su button click

### Interattività
- Filtri progetti (hide/show con animazioni)
- Form validation real-time
- FAQ accordion (open/close)
- Mobile responsive navigation
- Smooth scroll anchors
- Hover effects su cards

### SEO & Accessibility
- Meta tags completi (title, description, OG tags)
- Semantic HTML5
- ARIA labels per accessibilità
- Keyboard navigation
- Mobile-first responsive design
- Image lazy loading
- Structured data ready

## 🎯 Best Practices Implementate

✅ **Code Organization**
- File separati per HTML, CSS, JavaScript
- CSS variables per coerenza design
- Commenti professionali nel codice

✅ **Performance**
- Lazy loading images
- CSS Grid/Flexbox per layout
- Minimal JavaScript, vanilla ES6+
- Optimized animations

✅ **Responsive Design**
- Mobile-first approach
- Media queries breakpoints
- Touch-friendly buttons
- Readable font sizes

✅ **User Experience**
- Clear navigation
- Fast loading
- Smooth interactions
- Accessible forms
- Visual feedback

## 📱 Browser Support

- Chrome/Edge (Latest 2 versions)
- Firefox (Latest 2 versions)
- Safari (Latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Personalizzazione

### Modifica Colori
Modifica le variabili CSS in `style.css`:
```css
:root {
  --color-primary: #2563EB;  /* Colore principale */
  --color-dark-extreme: #0A0A0A;  /* Background */
  /* ... altri colori ... */
}
```

### Modifica Contenuti
- Sostituisci testi nelle pagine HTML
- Aggiungi tue immagini nella cartella `assets/images/`
- Aggiorna link social nel footer
- Personalizza progetti nel portfolio

### Aggiungi Progetti
Duplica la struttura di `.project-card` in `portfolio.html`:
```html
<div class="project-card" data-category="web responsive">
  <div class="project-image">
    <img src="tua-immagine.jpg" alt="Descrizione">
  </div>
  <div class="project-info">
    <h3 class="project-title">Titolo Progetto</h3>
    <!-- ... resto del contenuto ... -->
  </div>
</div>
```

## 📊 Performance Metrics

- ⚡ Lightweight (< 100KB senza immagini)
- 🚀 Fast loading time
- 📱 Mobile optimized
- 🎯 SEO friendly
- ♿ WCAG AA compliant

## 📚 File da Modificare per Personalizzazione

1. **index.html** - Home page content
2. **portfolio.html** - Projects and descriptions
3. **competenze.html** - Skills and certifications
4. **contatti.html** - Contact info and links
5. **style.css** - Global colors and fonts
6. **main.js** - Navigation and global behavior

## 🔐 Note Importanti

- Sostituisci l'email nel form (attualmente non invia realmente)
- Aggiorna i link social (attualmente placeholder)
- Carica le immagini dei tuoi progetti
- Personalizza tutti i testi con le tue informazioni
- Test su mobile prima del deployment

## 📞 Contatti

**Zain Akram**
- Email: zain.akram@email.com
- Telefono: +39 333 1234567
- Localizzazione: Milano, Lombardia, IT
- Portfolio: [Questo sito]

## 📜 Licenza

Questo portfolio è stato creato come progetto professionale. Senti libero di personalizzarlo per il tuo uso personale.

---

**Creato con ❤️ da Zain Akram**  
*Web Developer & Designer | Studente di Informatica*

Ultimo aggiornamento: 2024
