
interface capital {
    id: number;
    name: string;
}

interface DropCapitalsProps {
    capitals: capital[];
    onCapitalChange: (id: any) => void;
}

const DropCapitals: React.FC<DropCapitalsProps> = ({ capitals, onCapitalChange }) => {

    return (
        <div>
            <select name="capitals" onChange={(e) => onCapitalChange(e.target.value)}>
            <option value="">All</option>
                {
                    capitals.map((cap) =>
                    (
                        <option key={cap.id}>{cap.name}</option>
                    )
                    )}
            </select>
        </div>

    )
}

export default DropCapitals;