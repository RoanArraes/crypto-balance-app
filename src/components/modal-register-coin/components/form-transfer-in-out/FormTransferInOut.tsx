import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import RegisterTransferInOut from '../../../../utils/form-validation/schemas/registerTransferInOutForm';

import {
  Wrapper,
  Label,
  GroupForm,
  WrapperInputs,
  ErrorMessagesArea,
  ErrorMessage
} from './styles';

import {
  ButtonRounded,
  FormInputs
} from '../../../';

import { 
  RegisterTransactionInOutInterface 
} from '../../../../utils/interfaces';

interface InputProps {
  date: string
  time: string
  quantity: string
  price: string
  fees: string
}

type FormProps = {
  onSubmitForm: (formBuyAndSell: RegisterTransactionInOutInterface) => void
}

const initialFormState: RegisterTransactionInOutInterface = {
  date: '0' + new Date().toLocaleDateString(),
  time: "",
  quantity: "0",
  fees: "0",
  notes: ""
}

export default function FormTransferInOut({
  onSubmitForm
}: FormProps) {

  const [form, setForm] = useState(initialFormState);

  const { register, handleSubmit, formState: { errors } } = useForm<InputProps>({
    resolver: yupResolver(RegisterTransferInOut)
  });

  const onSubmit: SubmitHandler<InputProps> = (data, event?) => {
    event && event.preventDefault();

    const objectToSend = {
      ...form,
      ...data
    }

    onSubmitForm(objectToSend);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({...form,[e.target.name]: e.target.value});
  }

  function handleChangeDate(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    if(value.length === 2 || value.length === 5) {
      value = value + '/';
    }
    
    setForm({...form,[e.target.name]: value});
  }

  function handleChangeTime(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;

    if(value.length === 2 && value[3] !== ':' ) {
      value = value + ':';
    }
    
    setForm({...form,[e.target.name]: value});
  }


  return (
    <GroupForm
      onSubmit={(handleSubmit(onSubmit))}
      onKeyDown={e => e.code === 'Enter' && e.preventDefault()}
    >
      <Wrapper
        flexDirection='row'
        alignItems='center'
        justifyContent='space-between'
        maxWidth='500px'
        flexWrap="nowrap"
      >
        <WrapperInputs
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='center'
          maxWidth='250px'
          flexWrap="nowrap"
          margin='0px 10px 0px 0px'
        >
          <Label fontSize='micro'>Date ( mm/dd/yyyy ) </Label>
          <FormInputs 
            type='text' 
            name="date" 
            placeholder={'0' + new Date().toLocaleDateString()}
            autoComplete="off"
            maxLength="10"
            value={form.date}
            register={register}
            registerProps={{
              "onChange": handleChangeDate
            }}
            onKeyDown={e => e.code === 'Backspace' && setForm({...form, date: ""})}
          />
        </WrapperInputs>
        <WrapperInputs
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='center'
          maxWidth='250px'
          flexWrap="nowrap"
        >
          <Label fontSize='micro'>Time ( 24 hrs )</Label>
          <FormInputs 
            type='text' 
            name="time" 
            placeholder='22:00'
            autoComplete="off"
            maxLength="5"
            value={form.time}
            register={register}
            registerProps={{
              "onChange": handleChangeTime
            }}
            onKeyDown={e => e.code === 'Backspace' && setForm({...form, time: ""})}
          />
        </WrapperInputs>
      </Wrapper>
      <WrapperInputs
        flexDirection='column'
        alignItems='flex-start'
        justifyContent='center'
        maxWidth='500px'
        flexWrap="nowrap"
        margin="0 0 10px 0"
      >
        <Label fontSize='micro'>Quantity</Label>
        <FormInputs 
          type='number' 
          name="quantity" 
          placeholder='0.1'
          autoComplete="off"
          value={Number(form.quantity)}
          register={register}
          registerProps={{
            "onChange": handleChange
          }}
        />
        <Label fontSize='micro'>Fees ( $ )</Label>
        <FormInputs 
          type='number' 
          name="fees" 
          placeholder='0.1'
          autoComplete="off"
          value={Number(form.fees)}
          register={register}
          registerProps={{
            "onChange": handleChange
          }}
        />
      </WrapperInputs>
      {(errors && Object.values(errors).length > 0) &&
        <ErrorMessagesArea
          flexDirection='column'
          alignItems='center'
          maxWidth='500px'
          flexWrap="wrap"
        >
          {errors.date && 
            <ErrorMessage>
              {errors.date.message}
            </ErrorMessage>
          }
          {errors.time &&
            <ErrorMessage>
            {errors.time.message}
            </ErrorMessage>
          }
          {errors.quantity && 
            <ErrorMessage>
              {errors.quantity.message}
            </ErrorMessage>
          }
          {errors.fees && 
            <ErrorMessage>
            {errors.fees?.message}
            </ErrorMessage>
          }
        </ErrorMessagesArea>
      }
      <ButtonRounded 
        label='Register' 
        type='submit' 
        marginTop='10px' 
        maxWidth='500px'
      />
    </GroupForm>
  );
}
