# Qodo AI Code Review Tool Demo

A React project demonstrating how AI code review tools like Qodo identify common issues in React components.

## 📋 Project Structure

```
qodopoc/
├── src/
│   ├── components/
│   │   └── UserDataFetcher.jsx    # Intentionally flawed component
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   └── index.css                   # Styling
├── index.html                      # HTML entry point
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── QODO_ANALYSIS.md               # Detailed analysis of issues & fixes
└── README.md                       # This file
```

## 🎯 Purpose

This project showcases 8 common code issues that Qodo AI would detect:

1. ❌ **No Error Handling** - No try/catch or error states for async operations
2. ❌ **No Loading State** - Users don't know when data is being fetched
3. ❌ **Unsafe Data Access** - Accessing properties without null checks
4. ❌ **Excessive Logging** - Console.log statements left in production code
5. ❌ **Waterfalling Requests** - Sequential API calls instead of parallel
6. ❌ **Unbatched State Updates** - Multiple setState calls causing extra renders
7. ❌ **Type/Safety Issues** - No validation of returned data
8. ❌ **Unnecessary Mutations** - Poor state management patterns

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
cd /Users/prupala/projects/qodopoc
npm install
```

### Development

```bash
npm run dev
```

The app will start at `http://localhost:3000`

### Build

```bash
npm run build
```

Generates optimized production build in `dist/` directory.

## 📖 How to Use

1. **Review the flawed component**: Check [src/components/UserDataFetcher.jsx](src/components/UserDataFetcher.jsx)
2. **Read the analysis**: See [QODO_ANALYSIS.md](QODO_ANALYSIS.md) for detailed issue explanations
3. **Compare with improved version**: The analysis document includes a refactored version with all fixes
4. **Run the app**: Launch it in dev mode to see it in action (or crash due to the bugs)

## 🔍 What Qodo Would Detect

Run a code review tool like Qodo on `UserDataFetcher.jsx` to see:

- ✅ Missing error handlers
- ✅ Missing loading states  
- ✅ Potential null reference errors
- ✅ Unnecessary logging
- ✅ Performance issues (parallel vs sequential fetches)
- ✅ State management anti-patterns
- ✅ Missing null checks

## 💡 Learning Outcomes

After reviewing this project, you'll understand:

- How AI code review tools analyze React components
- Common mistakes in React async programming
- Best practices for error handling and loading states
- Patterns Qodo recommends
- How to write more robust React components

## 📚 Resources

- [QODO_ANALYSIS.md](QODO_ANALYSIS.md) - Complete analysis with code examples
- [React Documentation](https://react.dev)
- [Fetch API Best Practices](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [React Hooks Guide](https://react.dev/reference/react)

## 📝 Notes

- The `UserDataFetcher` component intentionally includes all 8 common issues
- It may crash or behave unexpectedly - this is intentional for demo purposes
- The [QODO_ANALYSIS.md](QODO_ANALYSIS.md) file contains the corrected version
- Use this as a teaching tool or reference for code review practices

---

**Created for demonstrating AI-powered code review capabilities** 🤖
