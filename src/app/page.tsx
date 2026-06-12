export default function HomePage() {
  return (
    <main>
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 1rem",
        fontFamily: "sans-serif",
      }}>
        <h1 style={{
          fontSize: "clamp(3rem, 10vw, 8rem)",
          fontWeight: 700,
          color: "#ffffff",
          margin: 0,
          lineHeight: 0.95,
          letterSpacing: "-0.03em",
        }}>池长俊</h1>
        <p style={{
          fontSize: "clamp(1.5rem, 5vw, 3rem)",
          color: "rgba(255,255,255,0.5)",
          marginTop: "1.5rem",
        }}>作品集</p>
        <p style={{
          fontSize: "1.125rem",
          color: "rgba(255,255,255,0.3)",
          marginTop: "2rem",
        }}>游戏开发 · 人工智能</p>
      </section>
    </main>
  );
}
