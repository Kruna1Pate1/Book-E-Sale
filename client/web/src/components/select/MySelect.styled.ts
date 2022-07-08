const SelectStyle = {
  control: (provided: any, state: any) => ({
    ...provided,
    border: `1px solid #cacaca`,
    boxShadow: 'none',

    width: '130px',
    paddingLeft: '16px',

    ":not([class*='sort'])": {
      width: '60%'
    },

    '&:hover': {
      border: '1.5px solid #80bf32'
    }
  }),

  option: (provided: any, state: any) => ({
    ...provided,

    // width: '130px',
    height: '40px',
    paddingLeft: '24px',
    backgroundColor: state.isSelected ? '#f14d54' : '',

    // ":not([class*='sort'])": {
    //   width: '60%'
    // },

    '&:hover': {
      backgroundColor: '#f14d54aa',
      color: 'white'
    }
  })
};

export { SelectStyle };
