// Pure server component — zero "use client", full static HTML output
// for clean GitHub Pages static export

import Link from "next/link";
import { featuredProjects, moreProjects } from "@/content/projects";

const NAME_CHARS = ["池", "长", "俊"];

export default function HomePage() {
  return (
    <main>
      {/* ====== HERO ====== */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1rem",
          position: "relative",
          backgroundColor: "#000",
        }}
      >
        <h1 style={{ display: "flex", gap: "0", justifyContent: "center", flexWrap: "wrap" }}>
          {NAME_CHARS.map((char, i) => (
            <span
              key={i}
              className="hero-char"
              style={{
                fontSize: "clamp(3.5rem, 10vw, 8rem)",
                fontWeight: 700,
                color: "#fff",
                lineHeight: 0.95,
                letterSpacing: "-0.04em",
                fontFamily: '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", sans-serif',
              }}
            >
              {char}
            </span>
          ))}
        </h1>
        <p
          style={{
            fontSize: "clamp(1.5rem, 5vw, 3rem)",
            color: "rgba(255,255,255,0.5)",
            marginTop: "1.5rem",
            fontFamily: '"Noto Sans SC", "PingFang SC", sans-serif',
          }}
        >
          作品集
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            color: "rgba(255,255,255,0.3)",
            marginTop: "2rem",
            fontFamily: "Inter, sans-serif",
          }}
        >
          游戏开发 · 人工智能
        </p>
        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "3rem",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <div
            style={{ width: "1px", height: "2rem", backgroundColor: "rgba(255,255,255,0.15)" }}
          />
          <span
            style={{
              fontSize: "0.625rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Scroll
          </span>
        </div>
      </section>

      {/* ====== FEATURED PROJECTS ====== */}
      <section
        id="projects"
        style={{ maxWidth: "72rem", margin: "0 auto", padding: "6rem 1.5rem" }}
      >
        <p
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "2.5rem",
            fontFamily: "Inter, sans-serif",
          }}
        >
          精选项目
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              href={'/projects/' + project.slug}
              style={{ textDecoration: "none", display: "block" }}
            >
              <div
                className="project-card"
                style={{
                  borderRadius: "1rem",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  overflow: "hidden",
                  cursor: "pointer",
                }}
              >
                {/* Thumbnail */}
                <div
                  style={{
                    position: "relative",
                    height: "340px",
                    overflow: "hidden",
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "1rem",
                      left: "1rem",
                      fontSize: "0.625rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.3)",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      backdropFilter: "blur(8px)",
                      padding: "0.25rem 0.625rem",
                      borderRadius: "999px",
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {project.category === "game" ? "Game" : "AI"}
                  </span>
                </div>
                {/* Text */}
                <div style={{ padding: "1.25rem 1.5rem" }}>
                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#fff",
                      margin: 0,
                      fontFamily: '"Noto Sans SC", "PingFang SC", sans-serif',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.4)",
                      margin: "0.5rem 0 0",
                      lineHeight: 1.6,
                      fontFamily: "Inter, sans-serif",
                    }}
                  >
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.375rem",
                      marginTop: "0.75rem",
                      flexWrap: "wrap",
                    }}
                  >
                    {project.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: "0.625rem",
                          color: "rgba(255,255,255,0.25)",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ====== MORE PROJECTS ====== */}
      {moreProjects.length > 0 && (
        <section style={{ maxWidth: "72rem", margin: "0 auto", padding: "0 1.5rem 6rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.2)",
              marginBottom: "2rem",
              fontFamily: "Inter, sans-serif",
            }}
          >
            更多项目
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "0.75rem",
            }}
          >
            {moreProjects.map((project) => (
              <Link
                key={project.slug}
                href={'/projects/' + project.slug}
                style={{ textDecoration: "none", display: "block" }}
              >
                <div
                  className="project-card"
                  style={{
                    borderRadius: "1rem",
                    border: "1px solid rgba(255,255,255,0.06)",
                    backgroundColor: "rgba(255,255,255,0.02)",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      height: "140px",
                      overflow: "hidden",
                      backgroundColor: "rgba(255,255,255,0.03)",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </div>
                  <div style={{ padding: "0.75rem 1rem" }}>
                    <h3
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#fff",
                        margin: 0,
                        fontFamily: '"Noto Sans SC", "PingFang SC", sans-serif',
                      }}
                    >
                      {project.title}
                    </h3>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
