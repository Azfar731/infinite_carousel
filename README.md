# Infinite Carousel React Implementation

A minimalist implementation of an infinite horizontal carousel using React and Tailwind CSS. This project serves as a practical example of how to create a smooth, infinitely scrolling carousel that can be implemented with either Tailwind CSS or pure CSS.

## Features

- ♾️ Infinite horizontal scrolling
- 🎯 Smooth animations
- 🎨 Tailwind CSS styling (with pure CSS alternative)
- 📱 Responsive design
- 🪶 Lightweight implementation
- ⚡ Built with Vite and React


## Project Structure

```
infinite_carousel/
├── app/
│   ├── data.json                    # Carousel items data
│   └── routes/
│       └── home.tsx                 # Home page with carousel implementation
└── ...configuration files
```

## Implementation Details

The carousel is implemented using CSS transforms and transitions for smooth animation. The infinite scroll effect is achieved by:

1. Duplicating the items at both ends
2. Using CSS transform to create the sliding effect
3. Implementing a seamless reset when reaching the end/beginning


## Customization

The carousel can be customized by modifying:

- The animation duration in the transition properties
- The number of visible items
- The gap between items
- The sliding animation timing

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - feel free to use this code in your own projects!