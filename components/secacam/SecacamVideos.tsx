'use client';

import { SectionHead } from "@/components/SectionHead";
import { VideoFacade } from "@/components/VideoFacade";
import { useLocale } from "@/lib/i18n/LocaleProvider";
import { SECACAM_VIDEOS } from "@/lib/secacam/content";

export function SecacamVideos() {
  const { locale, t } = useLocale();
  const v = t.secacam.videos;

  return (
    <section className="cs-section" id="videos" data-screen-label="Secacam videos">
      <div className="page">
        <SectionHead eyebrow={v.eyebrow} title={v.title} meta={v.meta} />
        <div className="cs-video-grid">
          {SECACAM_VIDEOS.map((video) => (
            <VideoFacade
              key={video.id}
              videoId={video.id}
              youtubeId={video.youtubeId}
              title={v.items[video.id].title}
              description={v.items[video.id].description}
              poster={video.poster}
              aspect={video.aspect}
              ledByMe={video.ledByMe}
              ledBadge={v.ledBadge}
              playLabel={v.playLabel}
              locale={locale}
              source="case_study"
            />
          ))}
        </div>
        <p className="cs-video-note">{v.privacyNote}</p>
      </div>
    </section>
  );
}
