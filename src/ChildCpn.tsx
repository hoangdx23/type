interface  ChildProps {
    prop1: string;
    prop2: boolean;
}
const ChildCpn: React.FC<ChildProps> = ({ prop1, prop2 }) => {
    return (
        <div>
            <p>prop1 :{prop1}</p>
            <p> prop2:{prop2? "true":"false"}</p>
        </div>
    )
}
export default ChildCpn;