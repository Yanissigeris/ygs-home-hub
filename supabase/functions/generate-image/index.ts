// Disabled on 2026-10-04: the public image generator (/admin/image-gen) was removed.
// This endpoint no longer calls any paid API and no longer writes to storage.
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

serve(() =>
  new Response(JSON.stringify({ error: "This endpoint has been removed.", version: "2026-10-04" }), {
    status: 410,
    headers: { "Content-Type": "application/json" },
  })
);
