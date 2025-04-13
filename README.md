# Cloction

![🚀 Build Status](https://github.com/rrayor/cloction/actions/workflows/build-and-test.yml/badge.svg?branch=main)  
[![📊 Code Coverage](https://app.deepsource.com/gh/Rrayor/cloction.svg/?label=code+coverage&show_trend=true&token=e48zbZxM2RGeaVS2cCtjKHfq)](https://app.deepsource.com/gh/Rrayor/cloction/)
[![🐛 Active Issues](https://app.deepsource.com/gh/Rrayor/cloction.svg/?label=active+issues&show_trend=true&token=e48zbZxM2RGeaVS2cCtjKHfq)](https://app.deepsource.com/gh/Rrayor/cloction/)
[![✅ Resolved Issues](https://app.deepsource.com/gh/Rrayor/cloction.svg/?label=resolved+issues&show_trend=true&token=e48zbZxM2RGeaVS2cCtjKHfq)](https://app.deepsource.com/gh/Rrayor/cloction/)  
![📜 License](https://img.shields.io/badge/license-Apache%202.0-blue.svg)

A simple, customizable clock dashboard that displays clocks in multiple time zones.

## Table of Contents
- [✨ Feature Overview](#feature-overview)
- [🔧 Development Setup](#development-setup)
- [📖 Usage](#usage)
- [🧪 Tests](#tests)
- [⚙️ CI](#ci)
- [📈 Code Quality and Coverage](#code-quality-and-coverage)
- [🏗️ Architecture](#architecture)
- [📜 License](#license)

## ✨ Feature Overview
**Note**: The feature set is evolving and may change as the project progresses.

- 🕒 Customizable clock widgets
- 🌍 Support for multiple time zones
- 🌐 Internationalization support
- 📄 JSON export/import for clock configurations

## 🔧 Development Setup
**Prerequisites**: Ensure Node.js version 20 or higher is installed.

The application uses Vite + React. To get started, run the following commands from the root directory:

1. Install dependencies:
   ```shell
   npm i
   ```

2. Run the app in development mode:
   ```shell
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:3000` (or the port specified in the terminal) to view the application.

## 🧪 Tests

The repository uses Vitest. To run all tests, use the following command:

```shell
npm test
```

## ⚙️ CI

The repository uses Github actions as its CI facilitator. A basic action is set up to build and test the app with multiple node versions.

## 📈 Code Quality and Coverage

Deepsource is set up for the repository which should make sure best practices are enforced and the code is always appropriately covered with tests.

## 🏗️ Architecture

Cloction is a local-first application. It stores everything on the client side. In the future, there might be some external API calls to time-syncing APIs, but nothing more is planned. The UI is supposed to be highly dynamic. Users are expected to set up their own clocks with their own preferences. Data is stored in the browser or "downloaded" as JSON.

To support this, the main architectural considerations are:
* Need a frontend library that supports dynamic content.
* External API calls must be optional and in the first iteration they shouldn't even be implemented.
* No server-side logic needed.
* SSR and SSG can't be utilized.
* Accessibility is highly important, which should include internationalization.

According to the above considerations, I opted to include the following dependencies:
* React (Only the library, no framework like NextJS is needed here)
* Chakra UI: For basic, but accessible components that allow focusing design efforts on the main functionality (The clock dashboard)
* Luxon: For managing date and time-related features.
* i18next: For easy internationalization.

To ensure high-quality code, the following development dependencies were chosen:
* Typescript
* Eslint and Prettier
* eslint-plugin-jsx-a11y (For accessibility linting)
* Husky and lint-staged

## 📜 License

The project uses the [Apache 2.0 License](LICENSE).