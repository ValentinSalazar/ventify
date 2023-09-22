import Input from "../components/Input";
import Submit from "../components/Submit";

function LoginPage () {
    return(
        <>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Contraseña"/>
            <Submit value="INICIAR"/>
        </>
    )
}
export default LoginPage;