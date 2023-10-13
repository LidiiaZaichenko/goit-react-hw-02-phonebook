export const Contacts = ({name ,number}) => {
    
    console.log(name);

    return <ul>
        <li>{name}:{number}</li>
    </ul>
}