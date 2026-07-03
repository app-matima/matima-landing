import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={inter.className} style={{ fontFamily: "Inter, sans-serif" }}>
      {/* NAVBAR */}
      <nav style={{
        background: "#fff",
        borderBottom: "1px solid #E5E7EB",
        padding: "0 40px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "60px",
        position: "sticky",
        top: 0,
        zIndex: 100,
      }}>
        <span style={{ fontWeight: 900, fontSize: "22px", letterSpacing: "-0.04em", color: "#0F1923" }}>
          matima
        </span>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <a href="#plans" style={{ fontSize: "13px", color: "#6B7280", textDecoration: "none" }}>Tarifs</a>
          <a href="https://app.matima.net/auth/login" style={{
            background: "#00A394", color: "#fff", padding: "8px 18px",
            borderRadius: "10px", fontWeight: 600, fontSize: "13px", textDecoration: "none"
          }}>Se connecter</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        background: "#fff",
        padding: "90px 40px 70px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 39px, #F0F0F0 39px, #F0F0F0 40px)",
          opacity: 0.4, pointerEvents: "none"
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "700px", margin: "0 auto" }}>
          <span style={{
            display: "inline-block", background: "#E6F7F5", color: "#00796B",
            fontSize: "11px", fontWeight: 600, padding: "4px 14px",
            borderRadius: "100px", letterSpacing: "0.04em", marginBottom: "24px"
          }}>
            1 mois offert · Sans engagement
          </span>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 900, color: "#0F1923",
            lineHeight: 1.05, letterSpacing: "-0.03em", marginBottom: "20px"
          }}>
            La plateforme des<br />
            <span style={{ color: "#00A394" }}>mandataires judiciaires</span><br />
            modernes
          </h1>
          <p style={{ color: "#6B7280", fontSize: "16px", lineHeight: 1.6, marginBottom: "32px", maxWidth: "500px", margin: "0 auto 32px" }}>
            Gérez dossiers, documents, prestations et alertes depuis un seul outil conçu pour votre métier.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#plans" style={{
              background: "#00A394", color: "#fff", padding: "14px 28px",
              borderRadius: "10px", fontWeight: 600, fontSize: "15px", textDecoration: "none"
            }}>Démarrer maintenant →</a>
            <a href="#plans" style={{
              background: "#fff", color: "#0F1923", padding: "14px 28px",
              borderRadius: "10px", fontWeight: 600, fontSize: "15px",
              border: "1.5px solid #E5E7EB", textDecoration: "none"
            }}>Voir les tarifs</a>
          </div>
          <p style={{ marginTop: "16px", fontSize: "12px", color: "#9CA3AF" }}>
            À partir de <strong style={{ color: "#0F1923" }}>2€</strong> / dossier / mois
          </p>
        </div>
      </section>

      {/* STATS SOMBRES */}
      <section style={{ background: "#0F1923", padding: "60px 40px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <p style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "40px", textAlign: "center" }}>
            Pourquoi les MJPM choisissent Matima
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", textAlign: "center" }}>
            {[
              { val: "3h", desc: "économisées par semaine sur la gestion administrative" },
              { val: "1", desc: "seul outil au lieu de 4 logiciels différents" },
              { val: "0", desc: "formation requise, prise en main en moins d'une heure" },
            ].map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: "48px", fontWeight: 900, color: "#00A394", lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: "#9CA3AF", fontSize: "13px", marginTop: "10px", lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ background: "#F4F5F7", padding: "80px 40px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 900, color: "#0F1923", letterSpacing: "-0.02em", marginBottom: "8px" }}>
            Tout ce dont vous avez besoin, enfin réuni
          </h2>
          <p style={{ color: "#6B7280", marginBottom: "40px", fontSize: "15px" }}>
            Conçu par des professionnels de la tutelle, pour des professionnels de la tutelle.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "16px" }}>
            {[
              { icon: "📁", title: "GED intelligente", desc: "Upload en masse, classement IA automatique, recherche instantanée dans tous vos documents." },
              { icon: "👥", title: "Gestion des protégés", desc: "Fiches complètes, contacts, mesures de protection, checklist d'onboarding pour chaque nouveau dossier." },
              { icon: "🚗", title: "Prestations & attestations", desc: "Commandez des interventions, suivez leur avancement, générez automatiquement l'attestation signée." },
              { icon: "📅", title: "Calendrier & alertes", desc: "Renouvellements automatiques, rappels d'échéances, vue semaine sur le dashboard." },
              { icon: "🔒", title: "Coffre-fort sécurisé", desc: "Stockage chiffré AES-256 des accès bancaires, impôts, CAF de chaque protégé." },
              { icon: "💶", title: "Compte de gestion", desc: "Synchronisation bancaire, génération automatique du compte de gestion annuel en PDF." },
            ].map((f, i) => (
              <div key={i} style={{
                background: "#fff", borderRadius: "14px", padding: "24px",
                border: "1px solid #E5E7EB"
              }}>
                <div style={{
                  width: "40px", height: "40px", background: "#E6F7F5",
                  borderRadius: "10px", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "20px", marginBottom: "14px"
                }}>{f.icon}</div>
                <div style={{ fontWeight: 700, color: "#0F1923", fontSize: "15px", marginBottom: "8px" }}>{f.title}</div>
                <div style={{ color: "#6B7280", fontSize: "13px", lineHeight: 1.6 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section id="plans" style={{ background: "#fff", padding: "80px 40px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 900, color: "#0F1923", letterSpacing: "-0.02em", marginBottom: "8px", textAlign: "center" }}>
            Des tarifs simples, par dossier
          </h2>
          <p style={{ color: "#6B7280", textAlign: "center", marginBottom: "48px", fontSize: "15px" }}>
            Payez uniquement pour ce que vous utilisez. 1 mois offert sur tous les plans.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "16px", alignItems: "start" }}>
            {/* Gestion */}
            <div style={{ border: "1px solid #E5E7EB", borderRadius: "16px", padding: "28px" }}>
              <div style={{ fontWeight: 800, fontSize: "17px", color: "#0F1923", marginBottom: "4px" }}>Gestion</div>
              <div style={{ color: "#6B7280", fontSize: "12px", marginBottom: "20px" }}>L'essentiel pour démarrer</div>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "44px", fontWeight: 900, color: "#0F1923" }}>2€</span>
                <span style={{ color: "#6B7280", fontSize: "13px" }}> /dossier/mois</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", fontSize: "13px", color: "#374151" }}>
                {["Gestion des protégés", "GED & documents", "Rappels & alertes", "Calendrier", "Coffre-fort sécurisé", "Prestations & attestations", "Courrier physique (à l'usage)"].map((f, i) => (
                  <div key={i}>✓ {f}</div>
                ))}
              </div>
              <a href="https://app.matima.net/auth/register?plan=gestion" style={{
                display: "block", textAlign: "center", padding: "12px",
                border: "1.5px solid #E5E7EB", borderRadius: "10px",
                fontWeight: 600, fontSize: "14px", color: "#0F1923", textDecoration: "none"
              }}>Choisir Gestion</a>
            </div>

            {/* Optimal */}
            <div style={{ border: "2px solid #00A394", borderRadius: "16px", padding: "28px", position: "relative" }}>
              <div style={{
                position: "absolute", top: "-13px", left: "50%", transform: "translateX(-50%)",
                background: "#00A394", color: "#fff", fontSize: "11px", fontWeight: 700,
                padding: "4px 16px", borderRadius: "100px", whiteSpace: "nowrap"
              }}>Recommandé</div>
              <div style={{ fontWeight: 800, fontSize: "17px", color: "#0F1923", marginBottom: "4px" }}>Optimal</div>
              <div style={{ color: "#6B7280", fontSize: "12px", marginBottom: "20px" }}>Gestion + automatisations IA</div>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "44px", fontWeight: 900, color: "#0F1923" }}>4€</span>
                <span style={{ color: "#6B7280", fontSize: "13px" }}> /dossier/mois</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", fontSize: "13px", color: "#374151" }}>
                {["Tout le plan Gestion", "Génération courriers par IA", "Emails & alias par protégé", "Génération DIPM automatique", "Compte de gestion PDF", "Paiement SEPA Bridge"].map((f, i) => (
                  <div key={i}>✓ {f}</div>
                ))}
              </div>
              <a href="https://app.matima.net/auth/register?plan=optimal" style={{
                display: "block", textAlign: "center", padding: "12px",
                background: "#00A394", borderRadius: "10px",
                fontWeight: 600, fontSize: "14px", color: "#fff", textDecoration: "none"
              }}>Choisir Optimal</a>
            </div>

            {/* Ultime */}
            <div style={{ background: "#0F1923", borderRadius: "16px", padding: "28px" }}>
              <div style={{ fontWeight: 800, fontSize: "17px", color: "#fff", marginBottom: "4px" }}>Ultime</div>
              <div style={{ color: "#9CA3AF", fontSize: "12px", marginBottom: "20px" }}>Optimal + gestion courrier</div>
              <div style={{ marginBottom: "24px" }}>
                <span style={{ fontSize: "44px", fontWeight: 900, color: "#fff" }}>8€</span>
                <span style={{ color: "#9CA3AF", fontSize: "13px" }}> /dossier/mois</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px", fontSize: "13px", color: "#D1D5DB" }}>
                {["Tout le plan Optimal", "Réception & ouverture courrier", "Scan & numérisation", "Classement auto dans la GED", "Notification à chaque courrier"].map((f, i) => (
                  <div key={i}>✓ {f}</div>
                ))}
              </div>
              <a href="https://app.matima.net/auth/register?plan=ultime" style={{
                display: "block", textAlign: "center", padding: "12px",
                border: "1.5px solid #374151", borderRadius: "10px",
                fontWeight: 600, fontSize: "14px", color: "#fff", textDecoration: "none"
              }}>Choisir Ultime</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#0F1923", padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", fontWeight: 900, color: "#fff", letterSpacing: "-0.02em", marginBottom: "12px" }}>
          Rejoignez les mandataires<br />qui font confiance à Matima
        </h2>
        <p style={{ color: "#9CA3AF", marginBottom: "32px", fontSize: "15px" }}>
          1 mois offert, sans engagement, résiliable à tout moment.
        </p>
        <a href="#plans" style={{
          background: "#00A394", color: "#fff", padding: "16px 32px",
          borderRadius: "10px", fontWeight: 600, fontSize: "15px", textDecoration: "none"
        }}>Démarrer avec 1 mois offert →</a>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#fff", borderTop: "1px solid #E5E7EB", padding: "24px 40px",
        display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px"
      }}>
        <span style={{ fontWeight: 900, fontSize: "16px", letterSpacing: "-0.04em", color: "#0F1923" }}>matima</span>
        <span style={{ fontSize: "12px", color: "#9CA3AF" }}>contact@matima.net · © 2026 Matima</span>
      </footer>
    </main>
  );
}
