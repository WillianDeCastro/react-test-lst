import { useState } from "react";
import InputComp from "./components/inputComp";
import LabelComp from "./components/labelComp";
import ButtonComp from "./components/buttonComp";
import { useNavigate } from "react-router";

const SignIn: React.FC = () => {
    const [nameCli, setNameCli] = useState('');
    const [passCli, setPassCli] = useState('');

    const navigate = useNavigate();

    const GoToNextPage = () => {
        console.log(nameCli);
        console.log(passCli);
        navigate(`/countries`);
    }

    return (
        <>
            <h1>Login Page</h1>

            <div>
                <LabelComp content='Name' />
                <InputComp onChangeValue={setNameCli} />

                <LabelComp content='Password' />
                <InputComp onChangeValue={setPassCli} />

                <ButtonComp btnName='Signin' onClickBtn={GoToNextPage} />
            </div>

        </>
    )
}

export default SignIn;