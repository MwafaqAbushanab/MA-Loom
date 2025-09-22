# Quick Setup Guide

## 🚀 Getting Started

1. **Open Terminal** and navigate to this folder:
   ```bash
   cd ~/Desktop/ma-loom-flow-studio
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Open in Browser**:
   - The website will be available at: `http://localhost:5173`
   - Or it may automatically open in your default browser

## 🛠 Available Commands

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Check code quality

## 📁 Project Structure

```
ma-loom-flow-studio/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Interactive3DCard.tsx    # 3D tilt effects
│   │   ├── MouseGradient.tsx        # Cursor-following effects
│   │   └── AnimatedBackground.tsx   # Background animations
│   ├── pages/              # Main website pages
│   ├── data/               # Content and configuration
│   └── contexts/           # React contexts (theme, etc.)
├── public/                 # Static assets
└── dist/                   # Built files (after npm run build)
```

## 🎨 Customization

- **Content**: Edit `src/data/content.json`
- **Colors**: Modify `tailwind.config.js`
- **Animations**: Adjust components in `src/components/`

## 📱 Testing

The website is responsive and works on:
- Desktop browsers (Chrome, Firefox, Safari, Edge)
- Tablets and mobile devices
- Both light and dark modes

---

Enjoy your new dynamic website! 🎉