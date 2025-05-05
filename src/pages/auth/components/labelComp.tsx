
interface labelProps{
    content:string;
}

const LabelComp : React.FC<labelProps> = ({content=''}) =>{

    return(
        <label>
            {content}
        </label>
    )
}
export default LabelComp;