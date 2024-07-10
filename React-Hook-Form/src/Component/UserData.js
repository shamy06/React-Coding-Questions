import { useForm } from "react-hook-form";

const UserData = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data)
    }
    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {console.log(errors)}
                <input placeholder="name" {...register("firstname",{required:true,minLength:5,maxLength:8, pattern: /^[A-Za-z]+$/i })} /><br/>
                {errors.firstname?.type=="required" && <p role="alert"> Firstname is required</p>}<br/>
                {errors.firstname?.type=="pattern" && <p role="alert"> Only Alphabets allowed</p>}<br/>
                {errors.firstname?.type=="maxLength" && <p role="alert"> Enter name min 5 letters max 8 letters</p>}<br/>
                <input placeholder="age" {...register("age",{required:true,maxLength:2})}/><br/>
                {errors.age?.type=="required" && <p role="alert"> Age is required</p>}<br/>
                {errors.age?.type=="maxLength" && <p role="alert"> Enter age min 1 digits</p>}<br/>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default UserData;