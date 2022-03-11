import * as yup from "yup";

const registerPortfolioForm = yup.object({
  name: yup.string()
  .required('* Name is required.')
  .max(32)
});

export default registerPortfolioForm;
