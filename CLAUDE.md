# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal resume/portfolio site built with Jekyll and hosted on GitHub Pages. It uses the [sproogen/resume-theme](https://github.com/sproogen/resume-theme) as a remote theme.

## Development Commands

```bash
# Install dependencies
bundle install

# Run local development server
bundle exec jekyll serve

# Build the site
bundle exec jekyll build
```

## Architecture

- **_config.yml** - All resume content lives here (personal info, experience, education, skills). This is the primary file you'll edit.
- **assets/main.scss** - Custom style overrides (imports the theme's styles)
- **index.md** - Home page layout declaration (content comes from _config.yml)
- **images/** - Profile photo and favicon

## Key Patterns

- Content is defined in YAML format within `_config.yml` using the theme's v2 content configuration
- The theme is loaded remotely via `remote_theme: sproogen/resume-theme` - no local theme files
- Sections use `layout: list` or `layout: text` with content defined inline using YAML multiline strings (`|`)
