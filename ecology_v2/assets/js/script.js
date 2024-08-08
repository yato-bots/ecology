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

        if (businessType === 'Restaurant') {
            document.getElementById('followUpQuestionIDKRestaurant').classList.remove('hidden');
        } else if (businessType === 'Grocery, Speciality Foods, and/or Convenience Store') {
            document.getElementById('followUpQuestionIDKGrocery').classList.remove('hidden');
        } else if (businessType === 'Food Wholesaler, Distributor, or Manufacturer') {
            document.getElementById('followUpQuestionIDKWholesaler').classList.remove('hidden');
        } else if (businessType === 'Lodging or Hotel') {
            document.getElementById('followUpQuestionIDKLodging').classList.remove('hidden');
        } else if (businessType === 'Hospital') {
            document.getElementById('followUpQuestionIDKHospital').classList.remove('hidden');
        } else if (businessType === 'Sports or Event Venue') {
            document.getElementById('followUpQuestionIDKVenue').classList.remove('hidden');
        } else if (businessType === 'Supercenter') {
            document.getElementById('followUpQuestionIDKSupercenter').classList.remove('hidden');
        } else if (businessType === 'Nursing or Residential Care Facility') {
            document.getElementById('followUpQuestionIDKNursing').classList.remove('hidden');
        } else if (businessType === 'Office Building with Dining Service') {
            document.getElementById('followUpQuestionIDKOffice').classList.remove('hidden');
        } else if (businessType === 'College or University (Residential)') {
            document.getElementById('followUpQuestionIDKCollegeRes').classList.remove('hidden');
        } else if (businessType === 'College or University (Non-Residential)') {
            document.getElementById('followUpQuestionIDKCollegeNonRes').classList.remove('hidden');
        } else if (businessType === 'Correctional Facility') {
            document.getElementById('followUpQuestionIDKCorrectional').classList.remove('hidden');
        }
    }
}


function calculateCompliance() {
    const form = document.getElementById('quizForm');
    const volume = form.volume.value;
    const selfCart = form['self-cart'].value;

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
        const businessType = form['business-type'].value;

        if (businessType === 'Restaurant') {
            followUpAnswer = form['follow-up-idk-restaurant'].value;
        } else if (businessType === 'Grocery, Speciality Foods, and/or Convenience Store') {
            followUpAnswer = form['follow-up-idk-grocery'].value;
        } else if (businessType === 'Food Wholesaler, Distributor, or Manufacturer') {
            followUpAnswer = form['follow-up-idk-wholesaler'].value;
        } else if (businessType === 'Lodging or Hotel') {
            followUpAnswer = form['follow-up-idk-lodging'].value;
        } else if (businessType === 'Hospital') {
            followUpAnswer = form['follow-up-idk-hospital'].value;
        } else if (businessType === 'Sports or Event Venue') {
            followUpAnswer = form['follow-up-idk-venue'].value;
        } else if (businessType === 'Supercenter') {
            followUpAnswer = form['follow-up-idk-supercenter'].value;
        } else if (businessType === 'Nursing or Residential Care Facility') {
            followUpAnswer = form['follow-up-idk-nursing'].value;
        } else if (businessType === 'Office Building with Dining Service') {
            followUpAnswer = form['follow-up-idk-office'].value;
        } else if (businessType === 'College or University (Residential)') {
            followUpAnswer = form['follow-up-idk-college-res'].value;
        } else if (businessType === 'College or University (Non-Residential)') {
            followUpAnswer = form['follow-up-idk-college-non-res'].value;
        } else if (businessType === 'Correctional Facility') {
            followUpAnswer = form['follow-up-idk-correctional'].value;
        }

        if (followUpAnswer === 'yes') {
            complianceDate = 'January 1, 2026';
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Your Compliance Date: ${complianceDate}</h2><p>${resources}</p>`;
}
