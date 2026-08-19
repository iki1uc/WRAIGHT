// calm.js — ENDRAUM · RUHEMODUL
// Der Raum tut nichts. Er beruhigt nur.

export function CALM(){

    return {
        state: "ruhig",
        active: false,
        sealed: true,
        observe: true,
        execute: false,
        message: "Endrunde abgeschlossen. System ist ruhig."
    };
}
