// src/api/kanbanApi.js
export const fetchKanbanData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      if (!response.ok) throw new Error('Failed to fetch data');
      const data = await response.json();
      console.log("Full API response:", data); // Log the full response object
      return data; // Return the entire response to handle both tickets and users
    } catch (error) {
      console.error(error);
      return { tickets: [], users: [] }; // Return default structure on error
    }
  };
  