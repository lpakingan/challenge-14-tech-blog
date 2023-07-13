module.exports = {
  // format_date takes in the given date of the request and makes it into MM/DD/YYYY format
  format_date: (date) => {
    return `${new Date(date).getMonth() + 1}/${new Date(
      date
    ).getDate()}/${new Date(date).getFullYear()}`;
  },
};
