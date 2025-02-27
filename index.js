function calculateStock() {
    // Get previous stock values
    const P = parseInt(document.getElementById('P-P').value) || 0;
    const T = parseInt(document.getElementById('P-T').value) || 0;
    const E = parseInt(document.getElementById('P-E').value) || 0;

    // Get sale values
    const p = parseInt(document.getElementById('S-P').value) || 0;
    const t = parseInt(document.getElementById('S-T').value) || 0;
    const e = parseInt(document.getElementById('S-E').value) || 0;

    // Calculate stock after sale
    let f = P - p;
    let g = T - t;
    let h = E - e;

    // Adjust for stock if eggs or trays go below required threshold
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
