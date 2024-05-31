# Pokémon Repository

This repository contains a Pokémon application built using modern web development technologies. The app features data fetching, infinite scrolling, search filtering, SEO optimization, and a sleek UI design.

## Clone The Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/ameeriit/pokemon
```

## Setup

1. cd pokemon
2. pnpm install
3. Add the environment variables (but for this i have added a static value for now)
4. pnpm run dev

## Implementation Details

1. HTTP Requests: Utilizes axios for making HTTP requests.
2. Data Fetching and Caching: Implements tanstack query for efficient client-side data fetching and caching.
3. Infinite Scroll: Supports infinite scroll to ensure smooth UI and avoid initial load times with large datasets.
4. Search Filter: Includes a search filter to easily find specific cards.
5. Debouncing: Uses use-debounce package to debounce the search filter, improving performance.
6. SEO Optimization: Leverages astro-seo package for SEO enhancements. Currently, static data is used, but it can be made dynamic. OpenGraph and Twitter support are included.
7. UI Design: Utilizes Tailwind CSS for styling and a modern, responsive design.
8. Frameworks: Built with React and Astro, using the islands architecture for improved performance.
9. Type Safety: Written in TypeScript to ensure type safety and improve code quality.

## Technologies Used

1. React: For building the user interface.
2. Astro: For building static sites with server-side rendering and islands architecture.
3. TypeScript: For type safety.
4. Tailwind CSS: For styling.
5. axios: For making HTTP requests.
6. tanstack query: For data fetching and caching.
7. use-debounce: For debouncing input fields.
8. astro-seo: For SEO optimization.
