const compliantZipCodes = ['98001', '98002', '98003', '98004', '98005', '98006', '98007', '98008', '98010', '98011', '98012', '98014', '98019', '98020', '98021', '98022', '98022', '98023', '98026', '98027', '98028', '98029', '98030', '98031', '98032', '98033', '98034', '98036', '98037', '98038', '98039', '98040', '98042', '98043', '98045', '98047', '98047', '98051', '98052', '98053', '98055', '98056', '98057', '98058', '98059', '98065', '98072', '98072', '98074', '98075', '98077', '98077', '98087', '98092', '98101', '98102', '98103', '98104', '98105', '98106', '98107', '98108', '98109', '98112', '98115', '98116', '98117', '98118', '98119', '98121', '98122', '98125', '98126', '98131', '98133', '98134', '98136', '98144', '98146', '98148', '98154', '98155', '98158', '98161', '98164', '98166', '98168', '98174', '98177', '98178', '98188', '98198', '98199', '98201', '98203', '98204', '98208', '98223', '98225', '98229', '98229', '98232', '98233', '98241', '98241', '98252', '98257', '98258', '98270', '98271', '98272', '98273', '98274', '98275', '98282', '98290', '98292', '98294', '98296', '98321', '98327', '98329', '98332', '98335', '98338', '98354', '98354', '98360', '98371', '98372', '98373', '98374', '98375', '98385', '98387', '98388', '98390', '98391', '98396', '98402', '98403', '98404', '98405', '98406', '98407', '98408', '98409', '98413', '98416', '98418', '98421', '98422', '98424', '98430', '98431', '98433', '98438', '98439', '98443', '98444', '98445', '98446', '98447', '98465', '98466', '98467', '98498', '98499', '98501', '98502', '98503', '98506', '98512', '98513', '98516', '98530', '98558', '98576', '98580', '98589', '98597', '98824', '98848']

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

    const volume = document.querySelector('input[name="volume"]:checked').value;
    const question4 = document.querySelector('.question4');

    if (volume === 'IDK') {
        question4.classList.remove('hidden');
    } else {
        question4.classList.add('hidden');
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
    let zipCode = form.zip.value.trim();
    let followUpAnswer = form['follow-up-question-answer']?.value;

    let complianceDate = '';
    let resources = '';
    let followUpAnswerText = '';

    switch(volume) {
        case 'small':
            complianceDate = 'January 1, 2025';
            break;
        case 'medium':
            complianceDate = 'January 1, 2026';
            break;
        case 'large':
            complianceDate = 'January 1, 2027';
            break;
    }

    switch(selfCart) {
        case 'one':
        case 'more':
            resources = 'link';
            break;
        case 'IDK':
            if (followUpAnswer === 'yes') {
                complianceDate = 'January 1, 2026';
            }
            break;
    }

    const resultDiv = document.getElementById('result');
    if (compliantZipCodes.includes(zipCode)) {
        if(!complianceDate && !resources) {
            alert('Please answer the questions before submitting.');
        } else {
            window.scrollTo(0, document.body.scrollHeight);
            resultDiv.style.display = 'flex';
            resultDiv.innerHTML = `<h2>Your Compliance Date: ${complianceDate}</h2><p>${resources}</p>`;
        }
    } else {
        resultDiv.style.display = 'flex';
        resultDiv.innerHTML = '<h2>Based on your zip code, you are not required to comply with this regulation.</h2>';
    }
}

