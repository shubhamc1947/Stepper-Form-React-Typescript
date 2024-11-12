type TLoginDetails = {
    email: string;
    password: string;
}
type PropsLoginDetails = TLoginDetails & {
    modifyUserData: (fields: Partial<TLoginDetails>) => void;
}
const LoginDetails = ({ email, password, modifyUserData }: PropsLoginDetails) => {
    return <>
        <label htmlFor="email">Email</label>
        <input required type="email" name="" id="email" value={email} onChange={(e) => modifyUserData({ email: e.target.value })} />
        <label htmlFor="password">Password</label>
        <input required type="password" name="" id="password" value={password} onChange={(e) => modifyUserData({ password: e.target.value })} />
    </>
}

export default LoginDetails;