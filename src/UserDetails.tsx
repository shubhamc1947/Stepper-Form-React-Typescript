type TUserDetils = {
    firstname: string;
    lastname: string;
    age: string;
}
type PropsUserDetailsType = TUserDetils & {
    modifyUserData: (fields: Partial<TUserDetils>) => void;
}
const UserDetails = ({ firstname, lastname, age, modifyUserData }: PropsUserDetailsType) => {
    return <>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" required name="" id="firstname" value={firstname} onChange={(e) => modifyUserData({ firstname: e.target.value })} />
        <label htmlFor="lastname">Lastname</label>
        <input type="text" required name="" id="lastname" value={lastname} onChange={(e) => modifyUserData({ lastname: e.target.value })} />
        <label htmlFor="age">Age</label>
        <input type="text" required name="" id="age" value={age} onChange={(e) => modifyUserData({ age: e.target.value })} />
    </>
}
export default UserDetails;