# LinkedIn Formatter

A web app for creating eye-catching LinkedIn posts with custom Unicode text styles — right in your browser, no login required.

🔗 **Live demo:** https://drdeteck.github.io/linkedin-formatter/

---

## Features

- **Bold & Italic Unicode styles** — select any text in the editor and apply bold, italic, or bold-italic formatting using Unicode characters that render on LinkedIn
- **Emoji picker** — quickly insert popular emojis from a popover toolbar
- **Live preview** — see a faithful LinkedIn-style mock-up of your post as you type
- **Copy to clipboard** — one-click copy of the formatted post, ready to paste on LinkedIn

## Tech stack

| Layer | Library |
|---|---|
| Framework | [Next.js 15](https://nextjs.org/) |
| UI components | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Type safety | [TypeScript](https://www.typescriptlang.org/) + [Zod](https://zod.dev/) |

## Getting started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:9002)
npm run dev
```

### Other commands

```bash
npm run build      # Production build
npm run start      # Start production server
npm run lint       # Run ESLint
npm run typecheck  # Run TypeScript type checker
```

## How it works

LinkedIn doesn't support Markdown or HTML in posts, but it does render Unicode mathematical alphanumeric symbols (U+1D400–U+1D7FF) which visually resemble bold and italic Latin letters. This app maps each character to its Unicode equivalent on-the-fly so you can copy the result straight into a LinkedIn post.

## Contributing

Pull requests are welcome. For large changes please open an issue first to discuss what you'd like to change.

## License

MIT
