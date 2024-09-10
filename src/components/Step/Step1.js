import { useForm } from "react-hook-form";
import css from './Step.css';

export default function Step1() {

    const { register, handleSubmit, setFocus, formState: { errors } } = useForm();

    const onValid = (data) => {
        console.log(data);
    };

    const onInvalid = (errors) => {
        if (errors.name) {
            setFocus("name"); // 이름 필드에 포커스 설정
        } else if (errors.email) {
            setFocus("email"); // 이메일 필드에 포커스 설정
        } else if (errors.phoneNumber) {
            setFocus("phone-number");
        }
    };

    const labelDiv = (inputName, placeholder) => (
        <div>
            <div className="label-div">
                <label htmlFor={inputName}>{placeholder}</label>
                {errors[inputName] && <span className="error">{placeholder} is required.</span>}
            </div>
            <input {...register(inputName, { required: true })} placeholder={placeholder} id={inputName}/>
        </div>
    );

    return (
    <form onSubmit={handleSubmit(onValid, onInvalid)} className="form-group">
        <div> 
            <h1>Personal Info</h1>
            <span>Please provide your name, email address, and phone number.</span>
        </div>

        {labelDiv("name","Name")}
        {labelDiv("email","Email")}
        {labelDiv("phoneNumber","Phone number")}
 
        <button type="submit">Submit</button>
    </form>
    );
}