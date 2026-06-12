import { SkillCloud } from "@/components/about/SkillCloud";
import { AwardList } from "@/components/about/AwardList";
import { PersonalNotes } from "@/components/about/PersonalNotes";
import { ResumeDownload } from "@/components/about/ResumeDownload";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 md:px-10 py-32 md:py-40">
      <SkillCloud />
      <AwardList />
      <PersonalNotes />
      <ResumeDownload />
    </main>
  );
}
