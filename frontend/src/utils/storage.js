// Function to create or update data in localStorage
export function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// Function to read data from localStorage
export function getItem(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

// Function to remove data from localStorage
export function removeItem(key) {
  localStorage.removeItem(key);
}
