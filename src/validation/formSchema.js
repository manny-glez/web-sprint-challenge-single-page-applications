import * as yup from 'yup'

const formSchema = yup.object().shape({
  name: yup.string().required('Name is required').min(2, "name must be at least 2 characters"),
  sauce: yup.string().oneOf(['originalRed', 'garlicRanch', 'BBQ', 'spinachAlfredo'], "You must select a sauce"),
  size: yup.string().oneOf(['small', 'medium', 'large'], " You must select a size"),
  pepperoni: yup.boolean().oneOf([true, false], ''),
  sausage: yup.boolean().oneOf([true, false], ''),
  bacon: yup.boolean().oneOf([true, false], ''),
  chicken: yup.boolean().oneOf([true, false], ''),
  specialInstruction: yup.string().required('For a better experience please add a speacial instruction').min(1, "For a better experience please add a speacial instruction")
})

export default formSchema