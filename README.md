# FrameFix

FrameFix is a responsive, English-language PC FPS estimator. It combines relative hardware scores, per-game workload profiles, resolution scaling and memory pressure to return an FPS range, a recommended graphics preset and a likely bottleneck.

## Local preview

```bash
npm run dev
```

Open `http://localhost:4173`.

## Deploy to Vercel

Import this folder as a new Vercel project. Vercel reads `vercel.json` and publishes the `dist` directory. No environment variables are required.

## Model notes

The estimator is intentionally transparent and conservative. It is a planning tool, not a replacement for measured benchmarks. Extend the `CPUS`, `GPUS` and `GAMES` arrays in `dist/app.js` as the data set grows.

## Monetization and SEO

- The page includes structured data, semantic headings, descriptive metadata and crawlable FAQ content.
- A non-intrusive ad slot is reserved below the calculator.
- Add a real canonical URL and analytics only after the production domain is known.
