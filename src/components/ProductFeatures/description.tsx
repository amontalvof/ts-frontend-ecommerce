interface IDescriptionProps {
    descripcion: string;
}

const Description = ({ descripcion }: IDescriptionProps) => {
    return <p>{descripcion}</p>;
};

export default Description;
