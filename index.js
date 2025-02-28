function calculateStock() {
    // Get previous stock values
    let P = parseInt(document.getElementById('P-P').value) || 0;
    let T = parseInt(document.getElementById('P-T').value) || 0;
    let E = parseInt(document.getElementById('P-E').value) || 0;
    
    let PN = parseInt(document.getElementById('N-P').value) || 0;
    let TN = parseInt(document.getElementById('N-T').value) || 0;
    let EN = parseInt(document.getElementById('N-E').value) || 0;

    // Add incoming stock
    P += PN;
    T += TN;
    E += EN;

    // Adjust Trays (T) to Patis (P) if Trays > 12
    if (T >= 12) {
        const extraP = Math.floor(T / 12); // Find the number of full Patis
        P += extraP; // Add full Patis
        T = T % 12; // Remaining Trays after conversion
    }

    // Adjust Eggs (E) to Trays (T) if Eggs > 30
    if (E >= 30) {
        const extraT = Math.floor(E / 30); // Find the number of full Trays
        T += extraT; // Add full Trays
        E = E % 30; // Remaining Eggs after conversion
    }

    // Get sale values
    const p = parseInt(document.getElementById('S-P').value) || 0;
    const t = parseInt(document.getElementById('S-T').value) || 0;
    const e = parseInt(document.getElementById('S-E').value) || 0;

    // Calculate stock after sale
    let f = P - p;
    let g = T - t;
    let h = E - e;

    // Adjust for stock if eggs or trays go below required threshold
    if (e === 0 && E < e) {
        T = T - 1;
        E = E + 30;
    }
    if (T === 0 && T < t) {
        P = P - 1;
        T = T + 12;
    }
    if (E < e) {
        T = T - 1;
        E = E + 30;
    }
    
    if (T < t) {
        P = P - 1;
        T = T + 12;
    }

    // Final stock calculation after sale and adjustments
    f = P - p;
    g = T - t;
    h = E - e;

    // Display the final stock
    document.getElementById('final-p').innerText = f;
    document.getElementById('final-t').innerText = g;
    document.getElementById('final-s').innerText = h;
}
