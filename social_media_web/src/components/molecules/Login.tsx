import { Button, Card, CardHeader, Input, CardFooter } from "@nextui-org/react"
import { useForm} from "react-hook-form"
import { Link } from "react-router-dom"
import { auth } from "../../lib/firebase"
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useNavigate } from "react-router-dom"

interface LoginFormInterface {
    email: string,
    password: string
  }
//   Google Authanatication
  const provider = new GoogleAuthProvider();

function Login() {
    const navigate = useNavigate()

    const {register, handleSubmit} = useForm<LoginFormInterface>();

    async function onSubmit(values: LoginFormInterface){
        signInWithEmailAndPassword(auth, values.email, values.password).then(
            ()=>{
                navigate('/')
            }
        )
    }
//   Google Authanatication
    async function signInWithGoogle(){
       signInWithPopup(auth, provider).then(()=>{
        navigate('/')
       })
    }

  return (
    <div className="flex h-screen justify-center items-center">
      <Card className="w-96 p-8 flex flex-col gap-4">
        <CardHeader>
            <h1 className="text-2xl text-secondary font-bold">Login Here</h1>
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
    <Button type="submit" color="secondary" className="w-full">Login</Button>
    //   Google Authanatication
    <Button  color="secondary" className="w-full" onClick={signInWithGoogle}>Login With Google</Button>
    </form>
    <CardFooter>
        <Link to='/signup'>New here? <u className="text-blue-400">Register Now</u></Link>
    </CardFooter>
      </Card>
    </div>
  )
}

export default Login
