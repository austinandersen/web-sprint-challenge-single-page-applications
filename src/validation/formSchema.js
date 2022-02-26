import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name is required!')
    .min(2, "name must be at least 2 characters"),
    size: yup
    .string()
    .oneOf(['Large', 'Medium', 'Small'], 'Size is required!!'),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    bacon: yup.boolean(),
    jalapeno: yup.boolean()

})

export default formSchema;