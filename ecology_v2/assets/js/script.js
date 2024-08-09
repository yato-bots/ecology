const businessTypeQuestions = {
    "Restaurant": "5. Does your restaurant have at least 3 full-time employees or serve 188 meals per week?",
    "Grocery, Speciality Foods, and/or Convenience Store": "5. Does your store have at least 4 full time employees?",
    "Food Wholesaler, Distributor, or Manufacturer": "5. Does your business have at least 1 part time employee?",
    "Lodging or Hotel": "5. Does your hotel or lodging have at least 34 rooms or 6 full time employees?",
    "Hospital": "5. Does your hospital have at least 10 beds or serve over 500 meals per week?",
    "Sports or Event Venue": "5. Does your venue have at least 50 seats or 500 visitors or 225 meals per week?",
    "Supercenter": "5. Does your supercenter have at least 12 employees?",
    "Nursing or Residential Care Facility": "5. Does your facility have at least 18 beds?",
    "Office Building with Dining Service": "5. Does your office building serve over 360 meals per week?",
    "College or University (Residential)": "5. Does your residential college have at least 135 students or serve over 1,000 meals per week?",
    "College or University (Non-Residential)": "5. Does your non-residential college have at least 500 students or serve over 1,000 meals per week?",
    "Correctional Facility": "5. Does your correctional facility have over 50 incarcerated individuals?"
}

let previousBusinessType = "";

function showFollowUpQuestion(response) {
    const followUpQuestions = document.querySelectorAll('.question.hidden-dynamic');
    followUpQuestions.forEach(q => q.classList.add('hidden'));

    if (response === 'one') {
        document.getElementById('followUpQuestionOne').classList.remove('hidden');
    } else if (response === 'more') {
        document.getElementById('followUpQuestionMore').classList.remove('hidden');
    } else if (response === 'IDK') {
        const form = document.getElementById('quizForm');
        const businessType = form['business-type'].value;
        showBusinessTypeQuestion(businessType);
    }
}

function showBusinessTypeQuestion(businessType) {
    if(previousBusinessType != businessType) {
        previousBusinessType = businessType;
        document.getElementById('businessTypeQuestion').innerText = businessTypeQuestions[businessType];
    }
    let form = document.getElementById('quizForm');
    let volume = form.volume.value;
    let selfCart = form['self-cart'].value;
    if(volume && selfCart) {
        document.getElementById('followUpQuestionBusinessType').classList.remove('hidden');
    }
};

function calculateCompliance() {
    let form = document.getElementById('quizForm');
    let volume = form.volume.value;
    let selfCart = form['self-cart'].value;

    let complianceDate = '';
    let resources = '';
    let followUpAnswer = '';

    if (volume === 'small') {
        complianceDate = 'January 1, 2025';
    } else if (volume === 'medium') {
        complianceDate = 'January 1, 2026';
    } else if (volume === 'large') {
        complianceDate = 'January 1, 2027';
    }

    if (selfCart === 'one') {
        resources = 'link';
    } else if (selfCart === 'more') {
        resources = 'link';
    } else if (selfCart === 'IDK') {
        followUpAnswer = form['follow-up-question-answer'].value;
        if (followUpAnswer === 'yes') {
            complianceDate = 'January 1, 2026';
        }
    }
    
    const resultDiv = document.getElementById('result');
    if(!complianceDate && !resources) {
        alert('Please answer the questions before submitting.')
    } else {
        document.getElementsByTagName('body').scrollTop = document.getElementsByTagName('body').scrollHeight;
        resultDiv.style.display = 'flex';
        resultDiv.innerHTML = `<h2>Your Compliance Date: ${complianceDate}</h2><p>${resources}</p>`;
    }
}
