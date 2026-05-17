## Fix: EN client confirmation email body + signature

Single file change: `supabase/functions/send-email/index.ts` (lines 73-118).

### Changes to `buildConfirmationHtml`

1. Hoist a `signature` const at the top of the function:
   ```ts
   const signature = isFr
     ? `<p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Courtier immobilier · RE/MAX · Équipe Marty Waite<br>819-210-3044</p>`
     : `<p style="color:#999;font-size:13px">Yanis Gauthier-Sigeris<br>Real Estate Broker · RE/MAX · The Marty Waite Experience<br>819-210-3044</p>`;
   ```

2. Replace each of the 5 hardcoded FR signature `<p>` blocks with `${signature}`.

3. Per-formType, branch H2 + body paragraphs via `isFr ? frHtml : enHtml`:

   - **contact**: H2 `Thanks ${firstName}.` · P1 "I got your message and I'll be in touch shortly." · P2 "In the meantime, feel free to browse the site to see how I work."
   - **valuation**: H2 `Thanks ${firstName}.` · P1 "I got your valuation request for:" · address block unchanged · P2 "I'll send you a personal analysis within 24 hours, based on recent comparable sales in your neighbourhood."
   - **analysis**: H2 `Thanks ${firstName}.` · P1 "I got your plex analysis request. I'll send you a full analysis within 48 hours. Real numbers on the property you asked about, not a generic template report."
   - **consultation**: H2 `Thanks ${firstName}.` · P1 "I got your consultation request. I'll be in touch personally within 24 to 48 hours to set up a time."
   - **guide** (fallback): H2 `Thanks ${firstName}.` · P1 `Your guide "${data.guideTitle || "Guide"}" will arrive by email shortly.` · P2 "If you have questions in the meantime, contact me directly at 819-210-3044 or reply to this email."

### Untouched
- `buildNotificationHtml` (Yanis inbox stays FR)
- All subject lines (already branch on `isFr`)
- Wrapper `<div>`, `<h2 style="color:#1e3a5f">`, `<hr>`, valuation address block styling
- Frontend forms, analytics, request validation, handler

### Deploy
After edit, call `supabase--deploy_edge_functions(["send-email"])` so the deploy preview serves the new template. Then confirm in chat for QA (1 FR + 1 EN submission per formType).
