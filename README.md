# AS Research Lab - Portfolio Website

This project is a research lab portfolio website for As Sazzad Mahmud, built with Next.js and Tailwind CSS. The website showcases research work in AI, machine learning, and computational science with a modern, professional design.

## 🚀 Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```
src/
├── app/
│   ├── components/          # Reusable React components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Hero.jsx        # Hero section with ticker
│   │   ├── About.jsx       # About section with widgets
│   │   ├── Services.jsx    # Services with testimonials
│   │   ├── WhyChooseUs.jsx # Why choose us section
│   │   ├── Counter.jsx     # Animated counters
│   │   ├── CaseStudy.jsx   # Case study grid
│   │   ├── Testimonials.jsx # Testimonial slider
│   │   ├── Blog.jsx        # Blog posts grid
│   │   ├── CTA.jsx         # Call to action section
│   │   └── Footer.jsx      # Footer with links
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.js           # Root layout with fonts
│   └── page.js             # Home page
├── components/             # (Legacy - moved to app/components)
public/                     # Static assets
```

## 🎨 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Custom fonts**: Host Grotesk and Fustat
- **Responsive design** for all screen sizes
- **Component-based architecture**
- **Research-focused content** for AI/ML portfolio
- **Modern gradient backgrounds** and professional design
- **Optimized images** with Next.js Image component

## 📋 Required Assets

The following assets need to be added to the `public/` folder for full functionality:

### Icons & Logos
- `logo.svg` ✅ (Created - placeholder)
- `arrow-right-02.svg` ✅ (Created)
- `shopping-bag-black.svg` ✅ (Created)
- `arrow-right-01.svg`
- `arrow-left-01.svg`
- `arrow-right-03.svg`
- `maps-location-01.svg`
- `mail-01.svg`

### Star Ratings
- `Review Star.svg` (5 copies needed)

### Service Icons
- `si-1.svg`, `si-2.svg`, `si-3.svg`
- `icon-1.svg`, `icon-2.svg`, `icon-4.svg`

### Brand Logos
- `brand-logo-1.svg`, `brand-logo-2.svg`, `brand-logo-3.svg`

### Hero Images
- `hero-img-1.png`, `hero-img-2.png`, `hero-img-3.png`
- `hero-img-4.png`, `hero-img-5.png`, `hero-img-6.png`

### User Images
- `user-1.png`, `user-3.png`, `member-12.png`, `member-11.png`

### Content Images
- `img-3.png`, `img-4.png`, `img-7.png`, `img-8.png`
- `img-16.png`, `img-11.png`, `img-12.png`
- `img-17.png`, `img-18.png`

### Favicon
- `favicon.png`, `Webclip.png`

### Button Icons
- `corner-up-right.svg`, `web-design-01.svg`, `download.svg`

## 🔧 Customization

### Styling
All styles are in `src/app/globals.css`. The design uses Tailwind utility classes with custom component styles.

### Fonts
Fonts are configured in `tailwind.config.js` and loaded in `layout.js`.

### Components
Each section is a separate component in `src/app/components/`. Modify these files to customize content and styling.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
```

Deploy to Vercel with the built files.

### Other Platforms
This is a standard Next.js app that can be deployed to any platform supporting Node.js.

## 📝 Notes

- Website is designed for As Sazzad Mahmud's research portfolio
- Content focuses on AI, machine learning, and computational research
- Placeholder icons and gradients used for visual elements
- Add real publication links and research project details
- Connect to LinkedIn, GitHub, and academic profiles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request


