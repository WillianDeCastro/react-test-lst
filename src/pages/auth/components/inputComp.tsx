interface InputCompProps {
    onChangeValue: (valueChanged: string) => void;
}

const InputComp: React.FC<InputCompProps> = ({ onChangeValue }) => {

    return (
        <>
            <input onChange={(e) => onChangeValue(e.target.value)} />
        </>
    )
}
export default InputComp;