function NIS_AURA(sense, drift){
    const risk = NIS_RISK(sense, drift);
    return risk < 20 ? "grün"
         : risk < 60 ? "gelb"
         : "rot";
}
