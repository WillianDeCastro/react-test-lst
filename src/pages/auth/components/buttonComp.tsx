interface ButtonCompProps {
    btnName: string;
    onClickBtn: () => void;
}

const ButtonComp: React.FC<ButtonCompProps> = ({ btnName, onClickBtn }) => {

    return (
        <button onClick={() => onClickBtn()} >{btnName}</button>
    )
}

export default ButtonComp;