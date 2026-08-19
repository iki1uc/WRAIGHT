function NIS_RISK(sense, drift){
    const base = {
        ghost: 90,
        error: 80,
        miss: 60,
        help: 40,
        bioldung: 30,
        fit: 20,
        fin: 10,
        rdy: 5
    }[sense] || 100;

    return Math.min(100, base + drift);
}
