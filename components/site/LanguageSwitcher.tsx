import { Globe } from "lucide-react";
import { useT, type Lang } from "@/lib/i18n";

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useT();
  const options: { value: Lang; label: string }[] = [
    { value: "en", label: "EN" },
    { value: "bn", label: "বাং" },
  ];
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-full border border-border bg-background/70 ${
        compact ? "p-0.5" : "p-1"
      }`}
      role="group"
      aria-label="Language"
    >
      <Globe className="ml-1.5 h-3.5 w-3.5 text-muted-foreground" aria-hidden />
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => setLang(o.value)}
          aria-pressed={lang === o.value}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition ${
            lang === o.value
              ? "bg-primary text-primary-foreground shadow-soft"
              : "text-muted-foreground hover:text-ink"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
