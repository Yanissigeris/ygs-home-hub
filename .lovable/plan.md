## Phase 5 — Hero + Header token consolidation

Baseline verified ✓ (Hero: #A88A5A=4, #17303B=1, #F7F4EE=3, #0F2129=1; Header: #A88A5A=6, #17303B=6, #4A5568=4, "#fff"=2).

### Replacements (21 total, 2 files)

**HeroSection.tsx** — 7 swaps via targeted `code--line_replace` on lines 511, 540, 684, 706, 746, 798, 1111. Carve-outs preserved: line 796 (Tailwind `ring-[#A88A5A]/50`), line 1107 (`#0F2129`), lerp block 423–477, template-interp lines 491/501/503/505, all rgba() literals.

**SiteHeader.tsx** — 14 swaps via targeted `code--line_replace` on lines 107, 125, 128, 177, 180, 227, 420, 444, 486, 536 (×2), 537 (×2), 538. Carve-outs preserved: `#4A5568` (×4) on lines 125/129/177/181, all rgba(), ctaBorderColor refs.

### Mappings
- `#A88A5A` → `var(--gold)`
- `#17303B` → `var(--ink)`
- `#F7F4EE` → `var(--cream)`
- `"#fff"` → `"var(--white)"`

### Verification
Post-edit greps to confirm: Hero `#A88A5A`=1, `#17303B`=0, `#F7F4EE`=0, `#0F2129`=1; Header `#A88A5A`=0, `#17303B`=0, `"#fff"`=0, `#4A5568`=4. lerp/template-interp counts unchanged. Build passes. Update `.lovable/plan.md` with phase log.