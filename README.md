# 🏆 Katpur College Sports Mahotsav 2026

A vibrant, cartoon-themed website for your college sports week featuring Chota Bheem and other beloved cartoon characters!

## 🎨 Features

### Page 1 - Animated Hero Entry
- Cinematic welcome animation
- 6 cartoon mascots (Chota Bheem, Doraemon, Ben 10, Motu Patlu, Oggy, Shinchan)
- Smooth entrance effects with bouncing characters
- "Enter Mahotsav" button with glow effect

### Page 2 - Memories + Game Posters
- **Memories Section**: Auto-scrolling horizontal gallery of last year's photos
- **Events Section**: 8 colorful game posters with hover effects:
  - Tug of War
  - Cricket
  - Kabaddi
  - Football
  - Volleyball
  - Basketball
  - Athletics
  - Badminton

### Page 3 - Game Detail & Registration
- Complete game information
- Rules and eligibility
- Event coordinator details
- Registration button (Google Forms ready)

## 🚀 How to Use

1. **Open the website**: Simply open `index.html` in any modern web browser
2. **Navigate**: Click "Enter Mahotsav" → Browse events → Click any poster
3. **Register**: Click registration button on detail page

## 🎨 Customization Guide

### 1. Replace Placeholder Photos (Gallery)
In `index.html`, find the gallery section and update the `style` attributes:

```html
<div class="photo" style="background: url('images/cricket2025.jpg') center/cover;">
    <span class="placeholder-text">Cricket Championship 2025</span>
</div>
```

### 2. Add Real Images for Posters
Create cartoon-themed posters using:
- **Canva** - Use cartoon templates
- **DALL-E / MidJourney / Stable Diffusion** - Generate AI cartoon art
- **Photoshop** - Create custom designs

Replace the gradient backgrounds:
```css
.cricket {
    background: url('images/cricket-poster.jpg') center/cover;
}
```

### 3. Update College Information
In `index.html`, change:
- College name: "Katpur College, Patan"
- Event name: "Sports Mahotsav 2026"
- Dates for each event

### 4. Update Coordinator Details
In `script.js`, modify the `gamesData` object:

```javascript
coordinator: {
    name: "Your Coordinator Name",
    phone: "+91 XXXXXXXXXX",
    email: "email@college.edu",
    emoji: "👨‍💼"
}
```

### 5. Connect Google Forms
In `script.js`, update registration links:

```javascript
registrationLink: "YOUR_GOOGLE_FORM_LINK_HERE"
```

Then uncomment this line:
```javascript
window.open(gameData.registrationLink, '_blank');
```

### 6. Change Color Theme
In `styles.css`, modify the root variables:

```css
:root {
    --primary-yellow: #FFD700;
    --primary-orange: #FF8C00;
    --festival-red: #FF4444;
    /* Add your colors */
}
```

### 7. Add More Sports Events
In `script.js`, add new entries to `gamesData`:

```javascript
newsport: {
    title: "New Sport Name",
    description: "Description here...",
    rules: ["rule 1", "rule 2"],
    coordinator: { /* details */ },
    emoji: "🎯",
    date: "March 20, 2026",
    registrationLink: "form-link"
}
```

Then in `index.html`, add new poster card:

```html
<div class="poster-card" data-game="newsport">
    <!-- Poster content -->
</div>
```

### 8. Add Coordinator Photos
Replace the emoji placeholder with an actual image:

In `index.html`:
```html
<div class="coordinator-photo">
    <img src="images/coordinator.jpg" alt="Coordinator">
</div>
```

Add CSS:
```css
.coordinator-photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
}
```

## 🎭 Adding Custom Cartoon Characters

### Option 1: Use Emojis (Current Method)
- Fast and works immediately
- No image files needed
- Limited customization

### Option 2: Add Custom Images
1. Create/download cartoon character images (PNG with transparency)
2. Save in `images/characters/` folder
3. Update CSS:

```css
.chota-bheem {
    background: url('../images/characters/chota-bheem.png') center/cover;
}
```

### Option 3: Use AI-Generated Characters
Generate custom cartoon characters using:
- **ChatGPT + DALL-E**: "Create a cartoon sports mascot in Chota Bheem style"
- **MidJourney**: "sports mascot, cartoon style, vibrant colors, Indian village theme"
- **Leonardo.ai**: Similar prompts

## 📱 Mobile Responsive

The website is fully responsive and works on:
- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (375px)

## 🎮 Interactive Features

### Current Features:
- ✨ Sparkle animations
- 🎯 Hover effects on all cards
- 🎪 Smooth page transitions
- ⌨️ Keyboard navigation (ESC to go back, Enter to proceed)
- 🎉 Secret confetti effect (click logo 5 times!)

### Add Background Music (Optional):
In `index.html`, add after opening `<body>` tag:

```html
<audio id="bgMusic" loop>
    <source src="sounds/theme-music.mp3" type="audio/mpeg">
</audio>

<button id="musicToggle" style="position: fixed; top: 20px; right: 20px; z-index: 1000;">
    🔊
</button>
```

In `script.js`:
```javascript
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) {
        bgMusic.play();
        musicToggle.textContent = '🔊';
    } else {
        bgMusic.pause();
        musicToggle.textContent = '🔇';
    }
});
```

## 📂 Project Structure

```
Sportsweek/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
├── README.md           # This file
│
└── images/             # (Create this folder)
    ├── gallery/        # Last year's photos
    ├── posters/        # Event posters
    ├── characters/     # Cartoon mascots
    └── coordinators/   # Staff photos
```

## 🎨 Design Tips

### For Cartoon Theme:
1. **Use bright colors**: Yellow, orange, red, green
2. **Rounded corners**: Everything should look playful
3. **Bold fonts**: Bangers, Chewy, Fredoka
4. **Animations**: Bounce, swing, scale effects
5. **Characters**: Position them in action poses

### For Posters:
- Use dynamic action scenes
- Add motion lines and effects
- Include team mascots
- Use festival-style borders
- Add glow and shadow effects

## 🔧 Browser Compatibility

Tested and working on:
- ✅ Chrome/Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Opera (v76+)

## 🆘 Troubleshooting

**Animations not working?**
- Check if JavaScript is enabled
- Try hard refresh (Ctrl + Shift + R)

**Gallery not scrolling?**
- Verify `.gallery-scroll` has animation in CSS
- Check browser console for errors

**Registration button not opening form?**
- Uncomment the `window.open()` line in script.js
- Add your actual Google Form link

## 🎯 Next Steps

1. ✅ Website is ready to use!
2. Add your actual photos to gallery
3. Create/generate cartoon posters
4. Update coordinator information
5. Create Google Forms for registration
6. Test on mobile devices
7. Deploy to web hosting

## 📱 Deployment Options

### Free Hosting:
- **GitHub Pages**: Free, easy to setup
- **Netlify**: Drag and drop deployment
- **Vercel**: Fast and free
- **Firebase Hosting**: Google's hosting service

### Quick Deploy to GitHub Pages:
1. Create a GitHub repository
2. Upload these files
3. Go to Settings → Pages
4. Select main branch
5. Your site is live!

## 🎉 Credits

Created for Katpur College Sports Mahotsav 2026
Inspired by Chota Bheem and classic Indian cartoons

**Fonts Used:**
- Bangers (Google Fonts)
- Fredoka (Google Fonts)
- Chewy (Google Fonts)

---

**Made with ❤️ and lots of cartoon spirit!** 🏆✨

For questions or support, contact your web development team.
