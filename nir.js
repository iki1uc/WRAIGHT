// ─── NIRWANA INTENT SPACE ───────────────────────────────
// Dieser Raum ist 100% isoliert. Keine Ausführung, nur Absicht.

export function NIS(intent){

    // Intent wird nur gelesen, niemals ausgeführt
    const pulse = intent.pulse || "none";
    const drift = intent.drift || 0;
    const sense = intent.sense || "ghost";

    // Absichtsanalyse
    const analysis = {
        pulse,
        drift,
        sense,
        risk: NIS_RISK(sense, drift),
        aura: NIS_AURA(sense, drift),
        allowed: false,   // niemals erlauben
        executed: false   // niemals ausführen
    };

    return analysis;
}
