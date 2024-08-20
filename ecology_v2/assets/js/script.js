function calculateCompliance() {
    const form = document.getElementById('quizForm');
    const volume = form.volume.value;
    const county = form.county.value;

    let complianceDate = '';
    let resources = '';

    if (volume == 'small') {
        complianceDate = 'January 1, 2025';
    } else if (volume === 'medium') {
        complianceDate = 'January 1, 2026';
    } else if (volume === 'large') {
        complianceDate = 'January 1, 2027';
    }

    if (county === 'king') {
        resources = 'Visit the King County website.'
    } else if (county === 'pierce') {
        resources = 'Visit the Pierce County website'
    } else if (county === 'snohomish') {
        resources = 'Visit the Snohomish County website'
    } else {
        resources = 'Here\'s other places'
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Your Compliance Date: ${complianceDate}</h2><p>${resources}</p>`;
}