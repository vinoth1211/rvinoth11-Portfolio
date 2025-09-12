# My Portfolio

A modern, responsive portfolio website built with React and Vite, showcasing my professional journey, projects, and skills.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive Layout**: Optimized for all device sizes
- **Interactive Components**: Engaging user experience with dynamic sections
- **Performance Optimized**: Built with Vite for fast loading and development
- **SEO Friendly**: Proper meta tags and semantic HTML


## 🛠️ Tech Stack

- React 19
- Vite
- CSS Modules
- ESLint
- Custom Fonts (Outfit, Roboto)

## 📦 Project Structure

```
src/
├── components/         # React components
│   ├── About/         # About section
│   ├── Contact/       # Contact section
│   ├── Experience/    # Work experience
│   ├── Hero/          # Landing section
│   ├── Navbar/        # Navigation
│   └── Projects/      # Portfolio projects
├── data/              # Data files with proper asset imports
│   ├── skills.js      # Skills data with image imports
│   ├── projects.js    # Projects data with image imports
│   └── history.js     # Work history data with image imports
├── App.jsx           # Main application component
├── main.jsx          # Application entry point
├── App.module.css    # App component styles
├── index.css         # Global styles
└── vars.css          # CSS variables and theme
```

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS version recommended)
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/my-portfolio.git
cd my-portfolio
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## 🎨 Customization

1. **Personal Information**: Update your details in the respective component files
2. **Skills & Projects**: Modify `src/data/skills.js` and `src/data/projects.js` to add/remove items
3. **Work History**: Update `src/data/history.js` with your experience
4. **Styling**: Modify CSS module files for component-specific styles
5. **Theme**: Customize colors and fonts in `vars.css`
6. **Images**: Add new images to the `assets/` folder and import them in the data files

### Adding New Images

When adding new images to your portfolio:

1. Place the image in the appropriate `assets/` subfolder
2. Import the image in the relevant data file (e.g., `skills.js`, `projects.js`)
3. Use the imported variable in your data object

Example:

```javascript
import newImage from "../../assets/skills/new-skill.png";

export const skills = [
  // ... existing skills
  {
    title: "New Skill",
    imageSrc: newImage,
  },
];
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🚀 Deployment

This portfolio is optimized for deployment on Vercel:

1. **Build the project**: `npm run build`
2. **Deploy to Vercel**: Connect your GitHub repository to Vercel
3. **Automatic deployments**: Every push to main branch triggers a new deployment

### Image Optimization

The project uses Vite's asset processing to ensure all images are properly optimized and referenced in production builds. Images are imported in JavaScript files rather than using relative paths in JSON files.

## 👥 Contact

**Vinoth Rasamanickam** - [LinkedIn](https://www.linkedin.com/in/vinoth-rasamanickam-537597302/)

**Project Repository**: [GitHub](https://github.com/vinoth1211/rvinoth11-Portfolio.git)

**Email**: vino6810403@gmail.com
