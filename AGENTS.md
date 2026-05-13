# Project Overview

This is a personal portfolio website built with Jekyll using the "Particle" theme. It's designed to showcase work experience, education, and personal projects.

**Key Technologies:**

*   **Jekyll:** A static site generator that uses Markdown, Liquid templates, and HTML/CSS to create websites.
*   **SASS:** A CSS preprocessor for styling.
*   **Gulp:** A toolkit for automating painful or time-consuming tasks in the development workflow.
*   **Particle.js:** A lightweight JavaScript library for creating particles.
*   **GitHub Pages:** The website is hosted on GitHub Pages.

**Architecture:**

The website follows a standard Jekyll project structure:

*   `_config.yml`: Main configuration file for the site, including user information.
*   `_data/`: Contains data files (`work.yml`, `education.yml`) that populate the portfolio sections.
*   `_includes/`: Reusable HTML components.
*   `_layouts/`: HTML templates for pages.
*   `_sass/`: SASS files for styling.
*   `assets/`: Contains CSS, JavaScript, fonts, and images.
*   `index.html`: The main entry point of the site.

# Building and Running

To run the website locally, you need to have Node.js, Yarn, and Jekyll installed.

1.  **Install Dependencies:**
    ```bash
    yarn
    ```

2.  **Run the development server:**
    ```bash
    gulp
    ```

This will compile the assets, start a local server, and automatically reload the browser when changes are made.

# Development Conventions

**Content Customization:**

*   **Personal Information:** Edit `_config.yml` to change your name, title, description, and social media links.
*   **Work Experience:** Add or modify entries in `_data/work.yml`.
*   **Education:** Add or modify entries in `_data/education.yml`.
*   **About Section:** The "About Me" section is populated from the `user_description_kor` and `user_description_eng` fields in `_config.yml`.

**Appearance Customization:**

*   **Colors:** Edit the SASS variables in the `_sass/` directory to change the color scheme.
*   **Particles:** The particle animation can be customized by editing the JSON data in the `particle` function in `assets/js/main.js`. Refer to the [Particle.js documentation](https://github.com/VincentGarreau/particles.js/) for more information.
