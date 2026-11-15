* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #fff8ee;
  --panel: #fffdf9;
  --primary: #ff5a36;
  --primary-dark: #d93d1b;
  --accent: #ffd166;
  --dark: #1e1b18;
  --muted: #6e625e;
  --card: #fff;
  --shadow: rgba(23, 15, 12, 0.15);
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Inter", sans-serif;
  background: linear-gradient(180deg, #fff9f1 0%, #fff 100%);
  color: var(--dark);
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  font: inherit;
  border: none;
  cursor: pointer;
}

.container {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(10px);
  background: rgba(255, 248, 238, 0.8);
  border-bottom: 1px solid rgba(30, 27, 24, 0.06);
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 76px;
  gap: 20px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
  letter-spacing: 0.04em;
  font-size: 1.1rem;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--primary), #ff8a5d);
  color: white;
  font-family: "Bangers", cursive;
  font-size: 1.5rem;
  letter-spacing: 0.08em;
  box-shadow: 0 12px 25px rgba(255, 90, 54, 0.35);
}

.menu {
  display: flex;
  align-items: center;
  gap: 24px;
  color: var(--muted);
  font-weight: 600;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.9rem 1.4rem;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, var(--primary), var(--primary-dark));
  color: white;
  box-shadow: 0 18px 30px rgba(255, 90, 54, 0.25);
}

.btn-secondary {
  background: transparent;
  border: 2px solid rgba(30, 27, 24, 0.12);
  color: var(--dark);
}

.btn-small {
  padding: 0.65rem 1rem;
  background: var(--dark);
  color: white;
}

.hero {
  padding: 72px 0 40px;
}

.hero-content {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 40px;
}

.eyebrow {
  color: var(--primary-dark);
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.74rem;
  margin-bottom: 18px;
}

.hero-copy h1,
.section-heading h2,
.about h2 {
  font-family: "Bangers", cursive;
  letter-spacing: 0.04em;
  line-height: 0.98;
  font-weight: 400;
}

.hero-copy h1 {
  font-size: clamp(3.2rem, 5vw, 6rem);
  max-width: 620px;
}

.subtitle {
  max-width: 560px;
  margin-top: 18px;
  color: var(--muted);
  font-size: 1.08rem;
  line-height: 1.7;
}

.actions {
  display: flex;
  gap: 16px;
  margin-top: 28px;
}

.stats {
  list-style: none;
  display: flex;
  gap: 28px;
  margin-top: 32px;
  flex-wrap: wrap;
}

.stats li {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stats strong {
  font-size: 1.6rem;
}

.stats span {
  color: var(--muted);
  font-size: 0.9rem;
}

.hero-visual {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 480px;
}

.pizza-card {
  position: relative;
  width: min(430px, 100%);
  height: 430px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.pizza-slice {
  position: absolute;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  background: radial-gradient(circle at center, #ffd95f 0 18%, #ffbd55 19% 28%, #e8a328 29% 33%, #d07b2d 34% 48%, #f3c95c 49% 65%, #d65d2f 66% 72%, #f5d56e 73% 100%);
  box-shadow: 0 32px 40px rgba(220, 122, 29, 0.25);
  transform: rotate(-12deg);
}

.pizza-slice::before,
.pizza-slice::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
}

.pizza-slice::before {
  background-image: radial-gradient(#d13b2a 0 12%, transparent 12.5% 100%);
  background-size: 48px 48px;
  background-position: center;
  mask: radial-gradient(circle at center, transparent 0 63%, #000 64% 100%);
}

.pizza-slice::after {
  inset: 24px;
  border: 16px solid rgba(255, 255, 255, 0.42);
  border-left-width: 22px;
  border-bottom-width: 22px;
}

.pizza-shadow {
  position: absolute;
  bottom: 25px;
  width: 300px;
  height: 40px;
  background: rgba(197, 116, 36, 0.2);
  border-radius: 50%;
  filter: blur(12px);
}

.menu-section,
.about {
  padding: 60px 0;
}

.section-heading {
  text-align: center;
  margin-bottom: 30px;
}

.section-heading h2,
.about h2 {
  font-size: clamp(2.4rem, 4vw, 4rem);
  color: var(--dark);
}

.cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;
}

.menu-card {
  background: var(--card);
  border: 1px solid rgba(30, 27, 24, 0.08);
  border-radius: 26px;
  padding: 22px 22px 18px;
  box-shadow: 0 15px 30px var(--shadow);
}

.menu-card.accent {
  background: linear-gradient(180deg, #fffaf0, #fff);
}

.badge {
  display: inline-block;
  padding: 0.42rem 0.7rem;
  background: rgba(255, 90, 54, 0.1);
  color: var(--primary-dark);
  border-radius: 999px;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.menu-card h3 {
  margin-top: 18px;
  font-size: 1.8rem;
}

.menu-card p {
  margin-top: 12px;
  color: var(--muted);
  line-height: 1.7;
}

.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 24px;
}

.card-footer strong {
  font-size: 1.65rem;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 20px;
}

.about p {
  color: var(--muted);
  line-height: 1.8;
  font-size: 1.02rem;
}

.footer {
  background: var(--dark);
  color: rgba(255, 255, 255, 0.81);
  padding: 32px 0;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.footer-brand {
  color: white;
}

@media (max-width: 900px) {
  .hero-content,
  .about-grid,
  .cards {
    grid-template-columns: 1fr;
  }

  .nav {
    flex-wrap: wrap;
    justify-content: center;
    padding: 16px 0;
  }

  .menu {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 520px) {
  .actions {
    flex-direction: column;
  }

  .btn {
    width: 100%;
  }

  .stats {
    flex-direction: column;
    gap: 16px;
  }
}

