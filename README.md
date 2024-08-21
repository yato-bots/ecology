<img width="291" alt="Washington State Department of Ecology Logo" src="https://github.com/user-attachments/assets/e03373b0-e29c-4beb-9eea-37ce7700e8de">

# EcoNavigator: Empowering Washington Businesses to Navigate New Organics Compliance with Ease
University of Washington MSIM Practicum Project Summer 2024

**Sponsor**: Washington State Department of Ecology

**Team Members**: Aishwarya Rangarajan, Ayato Hisanaga, Wamika Kapur, Yawen Guo

**Developers**: Ayato Hisanaga, Yawen Guo

## Information Problem Description
Recent changes in Washington State's organics waste disposal law created an information gap for businesses and the Department of Ecology. Businesses struggled with compliance, leading to a flood of inquiries to the Department, which found the process of assessing each case time-consuming and resource-intensive.

To address this, the EcoNavigator tool was developed. This user-friendly tool helps businesses determine their compliance status through a series of guided questions, reducing the need for direct assistance from the Department. By providing immediate clarity, the tool improves efficiency, allowing the Department to focus on other critical tasks while supporting businesses in meeting environmental regulations.

## Approach Overview
### Form Development
The tool was built using HTML, CSS, and JavaScript to create a responsive and dynamic interface. The form adapts based on user inputs like zip codes and business type, ensuring relevant questions and compliance messages are displayed.

### Web Scraping & Data Collection
A JSON resource was created using web scraping to gather city names, zip codes, and relevant URLs. This resource helps cross-reference zip codes with city websites, though direct links are only provided for non-ambiguous zip codes.

### User Interaction & Experience
The tool dynamically manages user input, revealing or hiding questions as needed. It also generates compliance messages, including city-specific links where applicable, enhancing user experience.

## Project Output
The tool underwent three iterations before reaching its final version, which is showcased in the screenshots below. It asks up to five questions to provide a compliance recommendation. The initial question collects the user's zip code to filter out businesses not located within the blue area of the BOMA map, as those outside this area are exempt from compliance. Additionally, the tool offers contact information for the Department of Ecology for further assistance. Color-coded text is used for clarity: green indicates the estimated compliance date, blue provides links to external compliance resources, and red warns of invalid zip codes.

<img width="840" alt="compliance estimator interface overview" src="https://github.com/user-attachments/assets/41374256-3a0e-4b63-842c-25456ed5c7c2">

(a screenshot of the compliance estimator)

<img width="832" alt="compliance estimator interface showing a warning message" src="https://github.com/user-attachments/assets/c8417e00-ebac-4c8b-a058-8dac74985bdc">

(a screenshot showing a warning message)

<img width="831" alt="compliance estimator interface showing a message" src="https://github.com/user-attachments/assets/cc7c0ecd-2319-419e-8c8c-9db8a81cef40">

(a screenshot showing the message about the partially affected location and links)

## Project Limitations
Due to time constraints, some solution requirements were not fully met. The third and fourth questions, which include options like "8 cubic yards" and "96-gallon garbage cart," lack detail, making it challenging for users to understand waste measurements. Adding visual aids would enhance user comprehension.

Another limitation is that the tool's estimated compliance dates may not be accurate. To improve precision, additional questions could be included to gather more specific information about users and their businesses. However, increasing the number of questions may compromise the tool's simplicity and ease of use. Further research and discussion are necessary to find the right balance and enhance the tool's accuracy.
