import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup
    .string()
    .trim()
    .required('name is required!')
    .min(3, 'name has to be more than three characters!'),
    size: yup
    .string()
    .oneOf(['Large', 'Medium', 'Small'], 'Size is required!!'),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    bacon: yup.boolean(),
    jalapeno: yup.boolean()

})

export default formSchema;