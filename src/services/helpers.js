function isValid(payload) {
  if (Array.isArray(payload)) {
    return !!(payload.length && !payload.some(isEmpty));
  }

  return isEmpty(payload);
}

function isEmpty(value) {
  return value === undefined || value === null || value === '';
}

module.exports = {
  isValid,
  isEmpty,
};
