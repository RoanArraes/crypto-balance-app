import { useState } from 'react';
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import { 
  ButtonRounded,
  ModalBase,
  FormInputs
} from '../../components';

import {
  Wrapper,
  Label,
  GroupForm,
  ErrorMessagesArea,
  ErrorMessage
} from './styles';

import { 
  CreatePortfolioInterface
} from '../../utils/interfaces/FormPortfolio.interface';

import RegisterPortfolioForm from '../../utils/form-validation/schemas/registerPortfolioForrm';

const initialFormState: CreatePortfolioInterface = {
  idUser: "",
  name: "",
};

interface InputProps {
  name: "",
}

interface Props {
  onCloseModal: () => void
}

export default function ModalCreatePortfolio({
  onCloseModal
}: Props) {

  const [form, setForm] = useState(initialFormState);

  const { register, handleSubmit, formState: { errors } } = useForm<InputProps>({
    resolver: yupResolver(RegisterPortfolioForm)
  });

  const onSubmit: SubmitHandler<InputProps> = (data, event?) => {
    event && event.preventDefault();

    const formEdited = {
      ...form,
      ...data
    }

    console.log("form-portfolio-name", formEdited);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({...form,[e.target.name]: e.target.value});
  }
  
  return(
    <ModalBase 
    labelTitle="Create Portfolio"
    onCloseModal={onCloseModal}
    children={
      <GroupForm
        onSubmit={(handleSubmit(onSubmit))}
        onKeyDown={e => e.code === 'Enter' && e.preventDefault()}
      >
        <Wrapper
          flexDirection='column'
          alignItems='flex-start'
          justifyContent='center'
          maxWidth='500px'
          flexWrap="wrap"
        >
          <Label fontSize='micro'>Portfolio Name</Label>
          <FormInputs 
            type='text'
            name="name"
            maxWidth="500px"
            maxLength="32"
            autoComplete="off"
            margin="10px 0px"
            value={form.name}
            register={register}
            registerProps={{
              "onChange": handleChange
            }}
          />
          <Label
            fontSize='micro'
          >
            {form.name.length}/32 caracteres
          </Label>
        </Wrapper>
          {(errors && Object.values(errors).length > 0) &&
            <ErrorMessagesArea
              flexDirection='column'
              alignItems='center'
              maxWidth='500px'
              flexWrap="wrap"
              margin="10px 0px 0px 0px"
            >
              {errors.name && 
                <ErrorMessage>
                  {errors.name.message}
                </ErrorMessage>
              }
            </ErrorMessagesArea>
          }
        <ButtonRounded 
          type='submit' 
          label='create'
          maxWidth='500px'
          marginTop='10px'
        />
      </GroupForm>
    }
  />

  )
}