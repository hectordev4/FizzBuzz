# FizzBuzz

A TypeScript implementation of the classic FizzBuzz problem with a modern web interface.

## 📋 Description

This project is an interactive FizzBuzz application that evaluates numbers and returns the appropriate FizzBuzz response. It features:

- **FizzBuzz Logic**: Standard FizzBuzz rules:
  - Numbers divisible by 3 return "Fizz"
  - Numbers divisible by 5 return "Buzz"
  - Numbers divisible by both 3 and 5 return "FizzBuzz"
  - All other numbers return the number itself

- **Web Interface**: A simple, user-friendly interface to input numbers and view results
- **History Tracking**: Keeps track of previously evaluated numbers
- **Input Validation**: Validates user input before processing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server with Vite:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Build the project for production:

```bash
npm run build
```

### Testing

Run the test suite:

```bash
npm test
```

## 📁 Project Structure

```
FizzBuzz/
├── src/
│   └── scripts/
│       ├── fizzbuzz.ts        # Core FizzBuzz logic
│       ├── validations.ts      # Input validation functions
│       ├── ui.ts              # UI update functions
│       └── history.ts         # History management
├── types/
│   └── fizzbuzz.types.ts      # TypeScript type definitions
├── tests/                      # Test files
├── index.ts                   # Main application entry point
├── index.html                 # HTML template
├── package.json               # Project dependencies and scripts
└── README.md                  # This file
```

## 💻 Usage

1. Enter a number in the input field
2. Click the "Submit" button
3. The result will display below the input
4. Previous evaluations are shown in the history section

## 🔧 Technologies Used

- **TypeScript**: For type-safe JavaScript development
- **Vite**: Fast build tool and development server
- **Vitest**: Unit testing framework

## 📝 License

This project is open source and available under the MIT License.