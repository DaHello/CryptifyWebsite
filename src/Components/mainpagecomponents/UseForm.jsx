import { useForm } from "react-hook-form"; // use a useForm component from react as loginForm

export function UseForm() {
  // used by both the signup and login forms
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "username",
      email: "email",
      password: "password",
    },
  });

  function LoginForm() {
    return (
      <>
        <label>Username</label>
        <input {...register("username", {required: true})} placeholder="username" />
        <label>Password(Required)</label>
        <input {...register("password", { required: true, maxLength: 10 })} placeholder="password"/>
        {errors.exampleRequired && <p>Password is required.</p>}
        <input type="submit" />
      </>
    );
  }

  function SignUpForm() {
    return (
      <>
        <label>Username</label>
        <input {...register("username")} placeholder="username" />
        <label>Password(Required)</label>
        <input {...register("password", { required: true, maxLength: 10 })} placeholder="password"/>
        {errors.exampleRequired && <p>Password is required.</p>}
        <input type="submit" />
      </>
    );
  }

  console.log(watch("example")); // you can watch individual input by pass the name of the input

  if (LoginForm) {
    return (
      <form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
      >
        <LoginForm />
      </form>
    );
  } else {
    return (
      <form
        onSubmit={handleSubmit((data) => {
          alert(JSON.stringify(data));
        })}
      >
        <SignUpForm />
      </form>
    );
  }

  // code from source:
  //   return (
  //     <form
  //       onSubmit={handleSubmit((data) => {
  //         alert(JSON.stringify(data));
  //       })}
  //     >
  //       <label>Username</label>
  //       <input {...register("username")} defaultValue="test" />
  //       <label>Password(Required)</label>
  //       <input
  //         {...register("password", { required: true, maxLength: 10 })}
  //       />
  //       {errors.exampleRequired && <p>This field is required</p>}
  //       <input type="submit" />
  //     </form>
  //   );
}
