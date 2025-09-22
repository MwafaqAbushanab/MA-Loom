# MA Loom — The Flow Studio

> From chaos to cadence. Workflows that adapt.

A modern, dynamic website showcasing automation, agile practices, and workflow optimization services. Built with cutting-edge 3D interactions and creative developer features.

## 🎨 Features

- **3D Interactive Effects**: Mouse-tracking tilt animations and depth-based hover effects
- **Dynamic Backgrounds**: Animated patterns with dots, grids, geometric shapes, and waves
- **Mouse-Following Gradients**: Immersive cursor-responsive visual effects
- **Smooth Animations**: Framer Motion powered transitions and entrance effects
- **Dark Mode Support**: Complete theming with proper contrast ratios
- **Responsive Design**: Optimized for all screen sizes and devices
- **Performance Optimized**: GPU-accelerated animations and efficient rendering

## 🚀 Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** with custom design system
- **Framer Motion** for advanced animations
- **React Spring** for interactive effects
- **Lucide React** for icons

## 🎯 Design System

### Colors
- **Primary**: Tottenham Navy (#132257) with variations
- **Accent**: French Blue (#0055a4) and Red (#ef4135)
- **Neutral**: Spurs Silver (#c0c0c0)

### Typography
- **Display Font**: Sora (headings, hero text)
- **Body Font**: Plus Jakarta Sans (content, UI)

## 🛠 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

## 🎭 3D Components

### Interactive3DCard
Reusable component with mouse-tracking 3D tilt effects:
- Customizable glow colors and intensity
- Smooth spring animations
- GPU-accelerated transforms

### MouseGradient
Creates cursor-following gradient effects:
- Dynamic radial gradients
- Smooth opacity transitions
- Global mouse tracking

### AnimatedBackground
Four distinct background patterns:
- **Dots**: Floating animated circles
- **Grid**: Subtle grid overlay with animations
- **Geometric**: Rotating shapes and forms
- **Waves**: Flowing wave animations

## 📝 Content Management

Content is managed through `src/data/content.json` for easy updates:
- Personal information and bio
- Services and offerings
- Ventures and projects
- Social links and contact details

## 🎨 Custom Animations

Extended Tailwind with custom animations:
- `animate-float`: Gentle floating with 3D rotation
- `animate-glow`: Pulsing glow effects
- `animate-pulse-glow`: Scaling with glow
- `animate-tilt`: Subtle rotation animations
- `animate-shimmer`: Shimmer overlay effects

## 🔧 Performance

- **Transform-GPU**: Hardware acceleration for smooth 3D effects
- **Optimized Images**: Proper sizing and lazy loading
- **Efficient Animations**: RequestAnimationFrame and CSS transforms
- **Code Splitting**: Vite's automatic chunk optimization

---

**MA Loom — The Flow Studio** | Transforming business through automation, agile practices, and innovation.