// for zip code related questions
const zipYes = ['98001', '98002', '98003', '98004', '98005', '98006', '98007', '98008', '98010', '98011', '98012', '98014', '98019', '98020', '98021', '98022', '98022', '98023', '98026', '98027', '98028', '98029', '98030', '98031', '98032', '98033', '98034', '98036', '98037', '98038', '98039', '98040', '98042', '98043', '98045', '98047', '98047', '98051', '98052', '98053', '98055', '98056', '98057', '98058', '98059', '98065', '98072', '98072', '98074', '98075', '98077', '98077', '98087', '98092', '98101', '98102', '98103', '98104', '98105', '98106', '98107', '98108', '98109', '98112', '98115', '98116', '98117', '98118', '98119', '98121', '98122', '98125', '98126', '98131', '98133', '98134', '98136', '98144', '98146', '98148', '98154', '98155', '98158', '98161', '98164', '98166', '98168', '98174', '98177', '98178', '98188', '98198', '98199', '98201', '98203', '98204', '98208', '98223', '98225', '98229', '98229', '98232', '98233', '98241', '98241', '98252', '98257', '98258', '98270', '98271', '98272', '98273', '98274', '98275', '98282', '98290', '98292', '98294', '98296', '98321', '98327', '98329', '98332', '98335', '98338', '98354', '98354', '98360', '98371', '98372', '98373', '98374', '98375', '98385', '98387', '98388', '98390', '98391', '98396', '98402', '98403', '98404', '98405', '98406', '98407', '98408', '98409', '98413', '98416', '98418', '98421', '98422', '98424', '98430', '98431', '98433', '98438', '98439', '98443', '98444', '98445', '98446', '98447', '98465', '98466', '98467', '98498', '98499', '98501', '98502', '98503', '98506', '98512', '98513', '98516', '98530', '98558', '98576', '98580', '98589', '98597', '98824', '98848']
const zipNo = ['98024', '98068', '98070', '98220', '98224', '98235', '98236', '98237', '98237', '98238', '98239', '98244', '98247', '98249', '98251', '98251', '98253', '98255', '98256', '98260', '98262', '98263', '98266', '98267', '98267', '98276', '98277', '98278', '98281', '98283', '98283', '98288', '98295', '98303', '98304', '98323', '98328', '98330', '98333', '98349', '98351', '98394', '98823', '98832', '98837', '98851', '98853', '98857', '98860', '99103', '99115', '99123', '99135', '99321', '99344', '99349', '99357', '00072']
const zipPartial = ['98221', '98226', '98230', '98240', '98248', '98264', '98284', '98284', '98531', '98579']

const zipToUrlYes = {
    "98001": "https://www.auburnwa.gov/",
    "98223": "https://www.arlingtonwa.gov/",
    "98004": "https://yarrowpointwa.gov/",
    "98225": "https://cob.org/",
    "98010": "https://www.blackdiamondwa.gov/",
    "98391": "https://www.ci.bonney-lake.wa.us/",
    "98011": "https://www.bothellwa.gov/",
    "98036": "https://www.lynnwoodwa.gov/Home",
    "98321": "https://www.cityofbuckley.com/",
    "98530": "https://www.bucoda.us/",
    "98166": "https://normandyparkwa.gov/",
    "98233": "https://burlingtonwa.gov/",
    "98014": "https://www.carnationwa.gov/",
    "98042": "https://www.covingtonwa.gov/",
    "98241": "https://townofdarrington.com/",
    "98198": "https://www.desmoineswa.gov/",
    "98327": "https://www.dupontwa.gov/",
    "98019": "https://www.duvallwa.gov/",
    "98372": "https://www.cityofedgewood.org/",
    "98020": "https://www.townofwoodway.com/",
    "98022": "https://www.cityofenumclaw.net/",
    "98201": "https://everettwa.gov/",
    "98003": "https://www.federalwaywa.gov/",
    "98424": "https://www.cityoffife.org/",
    "98466": "https://www.cityofup.com/",
    "98824": "http://www.cityofgeorge.org/",
    "98335": "https://www.gigharborwa.gov/",
    "98252": "https://ci.granite-falls.wa.us/",
    "98027": "https://www.issaquahwa.gov/",
    "98028": "https://www.kenmorewa.gov/",
    "98032": "https://www.kentwa.gov/",
    "98033": "https://www.kirklandwa.gov/Home",
    "98257": "https://www.townoflaconner.org/",
    "98503": "https://cityoflacey.org/",
    "98155": "https://www.cityoflfp.gov/",
    "98258": "https://www.lakestevenswa.gov/",
    "98499": "https://cityoflakewood.us/",
    "98038": "https://www.maplevalleywa.gov/",
    "98270": "https://marysvillewa.gov/",
    "98039": "https://www.medina-wa.gov/",
    "98040": "https://www.mercerisland.gov/",
    "98012": "https://www.cityofmillcreek.com/",
    "98354": "https://www.cityofmilton.net/",
    "98272": "https://www.monroewa.gov/",
    "98273": "https://www.mountvernonwa.gov/",
    "98043": "https://www.cityofmlt.com/",
    "98275": "https://mukilteowa.gov/",
    "98056": "https://www.newcastlewa.gov/",
    "98045": "https://northbendwa.gov/",
    "98360": "https://www.cityoforting.org/",
    "98047": "https://www.pacificwa.gov/",
    "98371": "https://www.cityofpuyallup.org/",
    "98848": "https://www.quincywashington.us/",
    "98576": "https://www.cityofrainierwa.org/",
    "98057": "https://www.rentonwa.gov/",
    "98580": "https://cityofroywa.us/",
    "98407": "https://www.rustonwa.org/",
    "98075": "https://www.sammamish.us/",
    "98188": "https://www.tukwilawa.gov/",
    "98104": "https://www.seattle.gov/",
    "98133": "https://www.shorelinewa.gov/",
    "98290": "https://www.snohomishwa.gov/",
    "98065": "https://www.snoqualmiewa.gov/",
    "98385": "https://www.townofsp.com/",
    "98292": "https://stanwoodwa.org/",
    "98388": "https://townofsteilacoom.org/",
    "98294": "https://www.ci.sultan.wa.us/",
    "98390": "https://sumnerwa.gov/",
    "98402": "https://www.cityoftacoma.org/",
    "98589": "https://www.cityoftenino.us/",
    "98501": "https://www.ci.tumwater.wa.us/",
    "98396": "https://www.townofwilkeson.com/",
    "98072": "https://www.ci.woodinville.wa.us/",
    "98597": "https://www.yelmwa.gov/"
};

const zipToUrlPartial = {
    "98221": "https://www.anacorteswa.gov/",
    "98230": "https://www.ci.blaine.wa.us/",
    "98531": "https://www.cityofcentralia.com/",
    "98248": "https://www.cityofferndale.org/",
    "98264": "https://www.lyndenwa.org/",
    "98284": "https://www.sedro-woolley.gov/"
};

// for business follow up questions
const businessTypeFollowUp = {
    "Restaurant": "Does your restaurant have at least 3 full-time employees or serve 188 meals per week?",
    "Grocery, Speciality Foods, and/or Convenience Store": "Does your store have at least 4 full time employees?",
    "Food Wholesaler, Distributor, or Manufacturer": "Does your business have at least 1 part time employee?",
    "Lodging or Hotel": "Does your hotel or lodging have at least 34 rooms or 6 full time employees?",
    "Hospital": "Does your hospital have at least 10 beds or serve over 500 meals per week?",
    "Sports or Event Venue": "Does your venue have at least 50 seats or 500 visitors or 225 meals per week?",
    "Supercenter": "Does your supercenter have at least 12 employees?",
    "Nursing or Residential Care Facility": "Does your facility have at least 18 beds?",
    "Office Building with Dining Service": "Does your office building serve over 360 meals per week?",
    "College or University (Residential)": "Does your residential college have at least 135 students or serve over 1,000 meals per week?",
    "College or University (Non-Residential)": "Does your non-residential college have at least 500 students or serve over 1,000 meals per week?",
    "Correctional Facility": "Does your correctional facility have over 50 incarcerated individuals?"
}

// function to validate zip code and show questions 2 and 3
// Function to validate zip code and show/hide questions based on the zip code input
function validateZipCode() {
    const zipInput = document.getElementById('zip').value;
    const zipError = document.getElementById('zipError');
    const partialMessage = document.getElementById('partialMessage');
    const noComplianceMessage = document.getElementById('noComplianceMessage');
    const partialLink = document.getElementById('partialLink');
    
    // Define questions
    const question2 = document.getElementById('question2');
    const question3 = document.getElementById('question3');
    
    // Hide all messages and questions initially
    zipError.classList.add('hidden');
    noComplianceMessage.classList.add('hidden');
    partialMessage.classList.add('hidden');
    question2.classList.add('hidden');
    question3.classList.add('hidden');

    // Check if zip code is valid
    if (zipYes.includes(zipInput) || zipNo.includes(zipInput) || zipPartial.includes(zipInput)) {
        // Determine visibility of messages and questions based on zip code input
        if (zipYes.includes(zipInput)) {
            question2.classList.remove('hidden');
            question3.classList.remove('hidden');
        } else if (zipNo.includes(zipInput)) {
            noComplianceMessage.classList.remove('hidden');
        } else if (zipPartial.includes(zipInput)) {
            partialMessage.classList.remove('hidden');
            partialLink.href = zipToUrlPartial[zipInput] || '#'; // Set the URL if available
        }
    } else {
        // Show error message if zip code is invalid
        zipError.classList.remove('hidden');
    }
}


// function to handle Question 3 responses
function handleWasteVolumeSelection(value) {
    const zipInput = document.getElementById('zip').value;
    const question4 = document.getElementById('question4');
    const complianceDeadlineMessageLarge = document.getElementById('complianceDeadlineMessageLarge');
    const complianceDeadlineMessageMedium = document.getElementById('complianceDeadlineMessageMedium');
    const complianceDeadlineMessageSmall = document.getElementById('complianceDeadlineMessageSmall');
    const complianceUrl = document.getElementById('complianceUrl')

    complianceDeadlineMessageLarge.classList.add('hidden');
    complianceDeadlineMessageMedium.classList.add('hidden');
    complianceDeadlineMessageSmall.classList.add('hidden');
    complianceUrl.href = '#'


    if (value === 'IDK') {
        // show Question 4 if user selects "I don't know."
        question4.classList.remove('hidden');
    } else {
        // hide Question 4 and show compliance deadline message
        question4.classList.add('hidden');
        // show relevant deadline message
        switch(value) {
            case 'large':
                complianceDeadlineMessageLarge.classList.remove('hidden');
                complianceUrl.href = zipToUrlYes[zipInput] || '#';
                break;
            case 'medium':
                complianceDeadlineMessageMedium.classList.remove('hidden');
                complianceUrl.href = zipToUrlYes[zipInput] || '#';
                break;
            case 'small':
                complianceDeadlineMessageSmall.classList.remove('hidden');
                complianceUrl.href = zipToUrlYes[zipInput] || '#';
                break;
            default:
                break;
        }
    }
}

// function to update business-specific follow-up questions based on business type
function updateBusinessFollowUpQuestion(businessType) {
    const businessTypeFollowUpElement = document.getElementById('businessTypeFollowUp');

    if (businessTypeFollowUp[businessType]) {
        businessTypeFollowUpElement.textContent = businessTypeFollowUp[businessType];
    }
}

// function to handle Question 4 responses
function handleCartCount(value) {
    const cartOne = document.getElementById('cartOne');
    const cartMore = document.getElementById('cartMore');
    const businessFollowUp = document.getElementById('businessFollowUp');
    const nonComplianceMessage = document.getElementById('nonComplianceMessage');

    cartOne.classList.add('hidden');
    cartMore.classList.add('hidden');
    businessFollowUp.classList.add('hidden');
    nonComplianceMessage.classList.add('hidden');

    if (value === 'IDK') {
        // show the business follow up question if user selects "I don't know."
        businessFollowUp.classList.remove('hidden');
        const selectedBusinessType = document.querySelector('input[name="businessType"]:checked').value;
        updateBusinessFollowUpQuestion(selectedBusinessType);

    } else if (value === 'one') {
        cartOne.classList.remove('hidden');
    } else if (value === 'more') {
        cartMore.classList.remove('hidden');
    }
}

// function to handle compliance messages for cartOne and cartMore
function handleCarts(value) {
    const zipInput = document.getElementById('zip').value;
    const complianceDeadlineMessageMedium = document.getElementById('complianceDeadlineMessageMedium');
    const nonComplianceMessage = document.getElementById('nonComplianceMessage');
    const complianceUrl = document.getElementById('complianceUrl');
    
    complianceUrl.href = '#'
    complianceDeadlineMessageMedium.classList.add('hidden');
    nonComplianceMessage.classList.add('hidden');

    if (value === '100') {
        complianceDeadlineMessageMedium.classList.remove('hidden');
        complianceUrl.href = zipToUrlYes[zipInput] || '#';
    } else if (value === '75') {
        nonComplianceMessage.classList.remove('hidden');
    } else if (value === '50') {
        complianceDeadlineMessageMedium.classList.remove('hidden');
        complianceUrl.href = zipToUrlYes[zipInput] || '#';
    } else if (value === '25') {
        nonComplianceMessage.classList.remove('hidden');
    }
}

// function to handle business-specific follow up questions
function handleBusinesses(value) {
    const zipInput = document.getElementById('zip').value;
    const complianceDeadlineMessageMedium = document.getElementById('complianceDeadlineMessageMedium');
    const nonComplianceMessage = document.getElementById('nonComplianceMessage');
    const complianceUrl = document.getElementById('complianceUrl');

    complianceUrl.href = '#'
    complianceDeadlineMessageMedium.classList.add('hidden');
    nonComplianceMessage.classList.add('hidden');

    if (value === 'yes') {
        complianceDeadlineMessageMedium.classList.remove('hidden');
        complianceUrl.href = zipToUrlYes[zipInput] || '#';
    } else if (value === 'no') {
        nonComplianceMessage.classList.remove('hidden');
    }
}