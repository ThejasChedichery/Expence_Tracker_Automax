# Personal Expense Tracker

A full-stack MERN application to track daily expenses and view spending summaries.

## Features

- Add, view, update, and delete expenses
- Filter expenses by category
- View total expenses amount
- Category-wise spending summary
- Clean and responsive UI with Bootstrap

## Technology Stack

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose

**Frontend:**
- React (Vite)
- Bootstrap 5
- Axios

## Project Structure

```
expense-tracker/
├── Backend/
│   ├── App/
│   │   ├── Controller/
│   │   │   └── ExpenseController.js
│   │   ├── Model/
│   │   │   └── ExpenseModel.js
│   │   └── Router/
│   │       └── ExpenseRouter.js
│   ├── Utils/
│   │   └── DataBase.js
│   ├── server.js
│   ├── package.json
│   └── .env
├── Frontend
    │   src/
    │   ├── components/
    │   │   ├── ExpenseForm/
    │   │   ├── ExpenseList/
    │   │   ├── ExpenseSummary/
    │   │   └── FilterBar/
    │   ├── services/
    │   │   └── expenseService.js
    │   ├── App.tsx
    │   └── main.tsx
    └── package.json
```

## Environment Variables

### Backend (.env)
Create a `.env` file in the `Backend` folder:

```
PORT=3001
MONGO_URL=mongodb://localhost:27017/expense-tracker
```

### Frontend (.env)
Create a `.env` file in the root folder:

```
VITE_API_URL=http://localhost:3001
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB installed and running locally

### Backend Setup

1. Navigate to Backend folder:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:3001`

### Frontend Setup

1. Navigate to root folder:
```bash
cd ..
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file with the required environment variables (see above)

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/expenses | Add a new expense |
| GET | /api/expenses | Get all expenses |
| GET | /api/expenses/:id | Get a single expense |
| PUT | /api/expenses/:id | Update an expense |
| DELETE | /api/expenses/:id | Delete an expense |
| GET | /api/expenses/summary | Get spending summary by category |

## Usage

1. Make sure MongoDB is running
2. Start the backend server (runs on port 3001)
3. Start the frontend development server (runs on port 5173)
4. Open your browser and navigate to `http://localhost:5173`
5. Start adding your expenses!

## Features Implementation

### Add Expense
- Fill in the form with title, amount, category, date, and optional notes
- Click "Add Expense" button
- The expense will be added and displayed in the list

### View Expenses
- All expenses are displayed in a table format
- Shows title, amount, category, date, and notes
- Expenses are sorted by date (newest first)

### Filter by Category
- Use the dropdown filter to view expenses by specific category
- Select "All Categories" to view all expenses

### Delete Expense
- Click the "Delete" button next to any expense
- Confirm the deletion in the popup
- The expense will be removed

### View Summary
- Total expenses amount is displayed at the top
- Category-wise breakdown shows spending per category
- Shows count of expenses in each category

## Built With

- **Express.js** - Backend framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **React** - Frontend library
- **Vite** - Build tool
- **Bootstrap** - CSS framework
- **Axios** - HTTP client

## Author

[Your Name]

## License

This project is created for educational purposes.
