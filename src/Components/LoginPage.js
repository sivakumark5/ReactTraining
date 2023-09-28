import { useForm } from "react-hook-form";
import styles from "./Style.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function LoginPage(){
    const {register, handleSubmit, formState: { errors } } = useForm();
    const[errorMessage,setErrorMessage]= useState("");
    const onSubmit = (data) =>{
        debugger;
        if(data.emailId === 'abc@gmail.com' && data.password==='Welcome*123')
        {
        console.log('Submit happened');
        navigate('tilescart');
        }
        else
        {
            console.log('Error page');
            navigate('errorpage');

        }
    };

    const validatePassword   = (value) => {

        if(value.length === 0){
            return "Password is required";
        }
        else if (value.length < 8) {
            return "Password must be at least 8 characters long";
        } else if (!/\d/.test(value)) {
            return "Password must contain at least one number";
        } else if (!/[!@#$%^&*]/.test(value)) {
            return "Password must contain at least one special character";
        }
    };
    const navigate = useNavigate();

    return(
        <div className={styles.container}>
            <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <br></br><br></br>
        <div className={styles.formgroupe}>
        <label className={styles.label}>Email</label>
        
        <input type="email" {...register("emailId",{required:{value:true, message:'Email is required'}, 
        pattern: {value:/^\S+@\S+$/i,message:'Email format is not valid'}})}></input>

        {errors.emailId && <p style={{color:"red"}}>{errors.emailId.message}</p>}
        </div>
        <div className={styles.formgroupp}>
        <label className={styles.label}>Password</label>
        <input type="password" {...register("password",{validate: validatePassword})}/>
            {errors.password && <p style={{color:"red",paddingLeft:"60px"}}>{errors.password.message}</p>}
            </div>
        
        <br/>
        <button type="Submit" className={styles.button}>Login</button>
        <p>{errorMessage}</p>
        <Outlet/>
        </form>
        </div>
        </div>
    )
}