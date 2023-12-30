// Helper function to update state
const updateValue = (setter) => {
  return (event) => {
    setter(event.target.value);
  };
};

export default updateValue;
