# react-dayzee

A work-in-progress date picker library for React 19. This library is still under development and may have breaking changes.

## Installation

```sh
npm install react-dayzee
```

## Development

Clone the repository and run the following commands:

```sh
npm install
npm run dev
```

## Build

To build the library for production, run the following command:

```sh
npm run build
```

## Usage

```jsx
import { DatePicker } from "react-dayzee";

function App() {
  return <DatePicker />;
}
```

## Components

This library provides individual components for full customization:

- `DatePicker`
- `DayNumbersGrid`
- `DaysList`
- `MonthSelect`
- `YearSelect`
- `NavigationButton`
- `DatePickerProvider`

## Hooks

- `useDatePicker`

### Component Dependency

<span style="color: orange;">**All components except `DatePicker` require being wrapped with `DatePickerProvider` to function properly.**</span>

## Theming

You can customize the styles using CSS variables defined in `variables.css` and `styles.css`.

## TO-DO

- [x] Basic date picker functionality
- [x] Customizable styles using CSS variables
- [ ] Multi calendar support
- [ ] Disabled date(s) support
- [ ] Multi-language support
- [ ] More customization options (custom components)
- [ ] Time picker integration
- [ ] Full test coverage
- [ ] Improved accessibility
- [ ] Mobile responsiveness enhancements

## License

MIT
