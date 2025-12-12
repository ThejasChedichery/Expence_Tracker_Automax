import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const getAllExpenses = async (category = '') => {
    try {
        const url = category ? `${API_URL}/api/expenses?category=${category}` : `${API_URL}/api/expenses`
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getExpenseById = async (id) => {
    try {
        const response = await axios.get(`${API_URL}/api/expenses/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const createExpense = async (expenseData) => {
    try {
        const response = await axios.post(`${API_URL}/api/expenses`, expenseData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const updateExpense = async (id, expenseData) => {
    try {
        const response = await axios.put(`${API_URL}/api/expenses/${id}`, expenseData)
        return response.data
    } catch (error) {
        throw error
    }
}

export const deleteExpense = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/api/expenses/${id}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getExpenseSummary = async () => {
    try {
        const response = await axios.get(`${API_URL}/api/expenses/summary`)
        return response.data
    } catch (error) {
        throw error
    }
}
