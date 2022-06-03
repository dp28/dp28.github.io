module.exports = (date) =>
  new Date(date).toLocaleDateString("en-UK", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
