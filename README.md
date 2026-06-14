# Expense Tracker – Personal Finance Dashboard Application

## About the Project

The Expense Tracker Application is a simple web-based application that helps users manage and monitor their daily financial transactions.

The application provides:

* Straightforward transaction logging
* Real-time spending calculations
* Dynamic categorization of expenses
* Interactive history logs
* Visual cost tracking analysis

Future enhancements will include breaking down spending by specific days of the week, generating custom budget alerts, and integrating currency conversion metrics.

## Features

* Dynamic expense item entry
* Automatic total expenditure calculation
* Categorized logging system (Food, Transport, Entertainment, Bills, Other)
* Individual entry removal capabilities
* Data persistence using Local Storage
* Clean, responsive, and modern user interface
* Full automated logic testing suite using Jest

## Built With

* HTML5
* JavaScript (ES6 Modules)
* Tailwind CSS (via CDN)
* Jest (for unit testing)

## Getting Started

### Installation

1. Clone the repository:
git clone https://github.com/jblue254/calorie_counter.git
2. Navigate to the project directory:
cd calorie_counter
3. Open the project in your preferred code editor.
4. Launch `index.html` in your browser.

### Running Unit Tests

To verify the core transaction logic using Jest, run the following commands in your terminal:
npm install
npm test
## Usage

1. Select an expense **Category** from the dropdown.
2. Enter the **Amount Spent**.
3. Type in a brief **Description** of the transaction.
4. Click the **Add Entry** button to log it.
5. Review your total balance and click **✕** to remove specific entries or **Clear All** to reset the ledger.

## Example Output

> **Category**: Food | **Amount**: $15.75 | **Description**: Lunch at the cafeteria
> **Total Spent**: $15.75
> **History Feed**: `[Food] Lunch at the cafeteria - $15.75 ✕`

## Project Structure

```text
expense-tracker/
│
├── index.html
├── tracker.js
├── tracker.test.js
├── assets/
│   └── tracker-preview.png
└── README.md
```

## Live Demo

Visit the live application:

https://jblue254.github.io/calorie_counter/

## Future Enhancements

* Integrated Chart.js doughnut graphs for visual spend distributions
* Custom daily and monthly budgeting threshold reminders
* Dark mode theme toggle support
* Multi-currency support with live API conversion rates
* Advanced export features (Download ledger records as CSV or PDF files)

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to fork the project and submit a pull request.

## License

This project is licensed under the MIT License.

## Author

**Japheth Kiprono**
*Software Developer*

* **GitHub:** https://github.com/jblue254
* **Email:** [japhethkiprono2020@gmail.com](mailto:japhethkiprono2020@gmail.com)
