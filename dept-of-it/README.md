# Department of Information Technology - LICET

A modern, professional website for the Information Technology Department at LICET, built with React and ready for deployment on Vercel.

## Features

- 🎬 **Film Reel Animation**: Interactive 3D film strip with smooth scrolling images
- 💼 **Professional Design**: Modern MNC-style website with responsive layout
- 🎨 **Smooth Animations**: Beautiful fade-in effects and hover interactions
- 📱 **Mobile Responsive**: Fully responsive design for all devices
- ⚡ **Performance**: Optimized for fast loading and smooth interactions

## Project Structure

```
dept-of-it/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js          # Main React component with all sections
│   ├── App.css         # Styling with animations
│   ├── index.js        # React entry point
│   └── index.css       # Global styles
├── package.json
├── vercel.json         # Vercel deployment config
└── .vercelignore       # Files to ignore during deployment
```

## Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

## Installation & Setup

```bash
# Install dependencies
npm install

# Start development server
npm start

# Create production build
npm run build
```

## Deployment on Vercel

### Option 1: Via Git (Recommended)

1. Push the project to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Import your GitHub repository in Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

### Option 2: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project directory
vercel
```

### Option 3: Drag & Drop

1. Build the project:
```bash
npm run build
```

2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag and drop the `build` folder

## Vercel Configuration

The project includes:
- **vercel.json**: Specifies build command, output directory, and environment variables
- **.vercelignore**: Lists files to ignore during deployment

## Components

- **Navbar**: Sticky navigation with smooth scroll links
- **Hero**: Eye-catching banner with call-to-action buttons
- **FilmReel**: Interactive 3D film strip animation (15 images per row)
- **About**: Department information section
- **Services**: 6 service cards with hover effects
- **Stats**: Key achievements and metrics
- **Team**: Faculty members and leadership
- **Footer**: Company information and links

## Technologies

- **React 19.2.5**: UI library
- **Create React App**: Build tool
- **CSS3**: Animations and styling
- **Vercel**: Hosting platform

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues or questions, please contact the IT Department at LICET.


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
