//*
// * @param {string} message - The message to display
// * @returns {number} The duration in milliseconds
// */
export const calculateToastDuration = (message) => {
  const messageLength = message.length;
  return Math.max(messageLength * 40, 2000);
};
