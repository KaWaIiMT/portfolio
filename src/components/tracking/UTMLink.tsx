import { buildUtmUrl } from "@/lib/utm";

interface UTMLinkProps {
  href: string;
  label: string;
  utmCampaign: string;
}

export function UTMLink({ href, label, utmCampaign }: UTMLinkProps) {
  return (
    <a
      href={buildUtmUrl(href, utmCampaign)}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                 border border-white/[0.08] text-sm text-white/60
                 hover:text-white hover:border-white/20 hover:bg-white/[0.04]
                 transition-all duration-300 font-sans"
    >
      {label}
      <span className="text-white/30 group-hover:text-white/60 transition-colors">
        ↗
      </span>
    </a>
  );
}
