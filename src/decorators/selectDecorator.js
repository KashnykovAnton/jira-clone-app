const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    marginTop: "8px",
    fontWeight: 400,
    color: "gray",
    border: "solid 2px gray",
    borderRadius: "4px",
    outline: "none",
    boxShadow: state.isFocused ? "0 0 0 1px gray" : provided.boxShadow,
    "&:hover": {
      boxShadow: "2px 8px 4px -6px hsla(0, 0%, 0%, 0.3)",
    },
  }),
};

const withCommonStyles = (WrappedComponent) => {
  return ({ styles, ...props }) => (
    <label>
      {props.label} <WrappedComponent styles={{ ...selectStyles, ...styles }} {...props} />
    </label>
  );
};

export default withCommonStyles;
