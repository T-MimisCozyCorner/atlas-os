# ATLAS OS v0.3.1 AI Debug Setup

This update shows the reason ATLAS used the fallback generator.

Upload these into your GitHub inner `atlas-os` folder:
- lib/ai/product-generator.ts
- app/api/ai/generate/route.ts
- components/ProductFactoryForm.tsx
- docs/ATLAS_V0_3_1_DEBUG_SETUP.md

Then redeploy Vercel and test `/product-factory`.

Expected result:
- If OpenAI works, it says `Generation source: OpenAI API`.
- If not, it says `Fallback reason: ...`.
