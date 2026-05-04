import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import PageMeta from "@/components/PageMeta";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Download, Trash2, Copy } from "lucide-react";

const ASPECT_RATIOS = ["16:9", "4:3", "3:4", "1:1", "21:9"];

const AdminImageGen = () => {
  const [prompt, setPrompt] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [loading, setLoading] = useState(false);
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  interface GeneratedImage {
    id: string;
    image_url: string;
    prompt: string;
    aspect_ratio: string;
    file_path: string;
  }
  const [history, setHistory] = useState<GeneratedImage[]>([]);
  const { toast } = useToast();

  const loadHistory = async () => {
    const { data } = await supabase
      .from("generated_images")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(20);
    if (data) setHistory(data);
  };

  useEffect(() => { loadHistory(); }, []);

  const generate = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setGeneratedUrl(null);
    try {
      const { data, error } = await supabase.functions.invoke("generate-image", {
        body: { prompt: prompt.trim(), aspectRatio },
      });
      if (error) throw error;
      if (data?.error) throw new Error(data.error);
      setGeneratedUrl(data.imageUrl);
      toast({ title: "Image générée !", description: "L'image a été sauvegardée." });
      loadHistory();
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Échec de la génération";
      toast({ title: "Erreur", description: message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    toast({ title: "URL copiée" });
  };

  const deleteImage = async (id: string, filePath: string) => {
    await supabase.storage.from("ai-images").remove([filePath]);
    await supabase.from("generated_images").delete().eq("id", id);
    toast({ title: "Image supprimée" });
    loadHistory();
  };

  return (
    <>
      <PageMeta title="Admin — Génération d'images IA" description="Outil admin pour générer des images avec l'IA." />
      <div className="min-h-screen bg-background py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h1 className="font-serif text-3xl font-bold text-foreground mb-8">Génération d'images IA</h1>

          <div className="rounded-2xl border border-border bg-card p-6 mb-10">
            <Textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Décrivez l'image souhaitée... ex: Vue aérienne d'Aylmer en automne avec le lac Deschênes"
              className="min-h-[120px] mb-4 text-base"
            />
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Ratio :</span>
                <Select value={aspectRatio} onValueChange={setAspectRatio}>
                  <SelectTrigger className="w-[100px]"><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {ASPECT_RATIOS.map((r) => (
                      <SelectItem key={r} value={r}>{r}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={generate} disabled={loading || !prompt.trim()} size="lg">
                {loading ? <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Génération en cours…</> : "Générer l'image"}
              </Button>
            </div>

            <p className="mt-3 text-xs text-muted-foreground">
              Le suffixe qualité est ajouté automatiquement : photorealistic, Canon 5D, natural lighting, etc.
            </p>
          </div>

          {generatedUrl && (
            <div className="mb-10">
              <h2 className="font-serif text-xl font-semibold mb-4">Résultat</h2>
              <div className="rounded-2xl overflow-hidden border border-border">
                <img src={generatedUrl} alt="Generated" className="w-full" />
              </div>
              <div className="flex gap-2 mt-3">
                <Button variant="outline" size="sm" onClick={() => copyUrl(generatedUrl)}>
                  <Copy className="mr-1 h-3.5 w-3.5" /> Copier l'URL
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={generatedUrl} download target="_blank" rel="noopener noreferrer">
                    <Download className="mr-1 h-3.5 w-3.5" /> Télécharger
                  </a>
                </Button>
              </div>
            </div>
          )}

          {history.length > 0 && (
            <>
              <h2 className="font-serif text-xl font-semibold mb-4">Historique</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {history.map((img) => (
                  <div key={img.id} className="rounded-xl border border-border overflow-hidden bg-card">
                    {img.image_url && (
                      <img src={img.image_url} alt={img.prompt} className="w-full aspect-video object-cover" />
                    )}
                    <div className="p-3">
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-2">{img.prompt}</p>
                      <div className="flex items-center gap-1">
                        <span className="text-[.65rem] bg-muted px-1.5 py-0.5 rounded">{img.aspect_ratio}</span>
                        <div className="ml-auto flex gap-1">
                          <Button variant="ghost" size="icon" className="h-7 w-7" onClick={() => copyUrl(img.image_url)}>
                            <Copy className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="icon" className="h-7 w-7 text-destructive" onClick={() => deleteImage(img.id, img.file_path)}>
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AdminImageGen;
