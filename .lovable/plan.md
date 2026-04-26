## Convert phone links to E.164 format

Replace `href="tel:8192103044"` with `href="tel:+18192103044"` in 5 exact locations. Display text and all other attributes remain unchanged.

### Changes

| File | Line | Context |
|---|---|---|
| `src/components/StickyMobileCTA.tsx` | 79 | Sticky mobile call button |
| `src/components/WhatsAppButton.tsx` | 50 | Phone option (1st instance) |
| `src/components/WhatsAppButton.tsx` | 80 | Phone option (2nd instance) |
| `src/components/ValuationWidget.tsx` | 494 | Success-state contact link |
| `src/components/CTASection.tsx` | 83 | Footer CTA phone link |

### Rationale

E.164 format (`+1` country code prefix) ensures reliable dialing on iOS, Android, and desktop softphones across regions, and is the format expected by tracking/analytics tools that normalize click-to-call events.

Verified all 5 lines exist as specified before drafting this plan.
