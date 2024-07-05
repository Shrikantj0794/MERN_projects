import { Button, Card, CardFooter, CardHeader, Input } from "@nextui-org/react"
import { useForm} from "react-hook-form"
import { Link } from "react-router-dom";
import { auth } from "../../lib/firebase";
import { createUserWithEmailAndPassword} from "firebase/auth";

interface RegisterFormInterface {
    email: string,
    password: string
    confirmpassword: string
  }

function Register() {

    const {register, handleSubmit} = useForm<RegisterFormInterface>();

    async function onSubmit(values: RegisterFormInterface){
        if(values.password === values.confirmpassword){
            createUserWithEmailAndPassword(auth, values.email, values.password)
        }else{
            alert("Your Password do not match!")
        }
    }

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96 p-8 flex flex-col gap-4">
        <CardHeader>
            <h1 className="text-2xl text-secondary font-bold">Register Here</h1>
        </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 ">
      <Input
      isRequired
      type="email"
      label="Email"
      defaultValue="junior@nextui.org"
      className="max-w-xs"
      {...register("email")}
    />
    <Input
      isRequired
      type="password"
      label="password"
      defaultValue=""
      className="max-w-xs"
      {...register("password")}
    />
    <Input
      isRequired
      type="password"
      label="Confirm password"
      defaultValue=""
      className="max-w-xs"
      {...register("confirmpassword")}
    />
    <Button type="submit" color="secondary" className="w-full">Register</Button>
    </form>
    <CardFooter>
        <Link to='/login'>Already registered? <u className="text-blue-400">Login Here</u></Link>
    </CardFooter>
      </Card>
    </div>
  )
}

export default Register
