// Empty inputs validation
export const inputValidator = (data) => {
  for (const [key, value] of Object.entries(data)) {
    if (key === "email" && !value.includes("@")) return "Invalid email format";
    if (!value) return "All fields are required";
  }
};
