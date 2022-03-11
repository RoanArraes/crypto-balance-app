import * as yup from "yup";

export interface RegisterBuyAndSellForm {
  date: string
  time: string
  quantity: string
  price: string
  fees: string
}

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const registerBuyAndSell = yup.object({
  date: yup.date()
    .required('* Date is a required field.')
    .min(new Date(2000, 0, 0), '* Minimun date is 01/01/2000.')
    .max(new Date(year, month, day), '* Maximum date is today.')
    .typeError('* Invalid date format.'),
  time: yup.string()
    .required('* Time is a required field.')
    .min(5, '* Time is invalid(HH:mm)')
    .trim()
    .matches(/^[0-9:]+$/i, '* Time is invalid.')
    .test("time-invalid", "* Time is invalid.", function(value) {
      const time = value?.split(':')
      const time0 = time && parseInt(time[0]);
      const time1 = time && parseInt(time[1]);
      const validationHours = (!time0 && time0 !== 0);
      const validationMinutes = (!time1 && time1 !== 0);

      if(validationHours || validationMinutes) {
        return false;
      }

      if(((time0 < 0 || time0 >= 24) || (time1 < 0 || time1 > 59))) {
        return false;
      } else {
        return true;
      }
    }),
  quantity: yup.number()
    .required('* Quantity is a required field.')
    .positive()
    .moreThan(0, '* Quantity must be greater than 0'),
  price: yup.number()
    .required('* Price is a required field.')
    .positive()
    .moreThan(0, '* Price must be greater than 0'),
  fees: yup.number()
    .required('* Fees is a required field.')
    .moreThan(-1, '* Fees equal or must be greater than 0.')
});

export default registerBuyAndSell;