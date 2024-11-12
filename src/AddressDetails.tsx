type TAddressDetails = {
    street: string;
    pincode: string;
    state: string;
}
type PropsAdressDetails = TAddressDetails & {
    modifyUserData: (fields: Partial<TAddressDetails>) => void;
}

const AddressDetails = ({ street, state, pincode, modifyUserData }: PropsAdressDetails) => {
    return <>
        <label htmlFor="street">Street</label>
        <input type="text" required name="" id="street" value={street} onChange={(e) => modifyUserData({ street: e.target.value })} />
        <label htmlFor="pincode">Pincode</label>
        <input type="text" required name="pincode" id="" value={pincode} onChange={(e) => modifyUserData({ pincode: e.target.value })} />
        <label htmlFor="state">State</label>
        <input type="text" required name="" id="state" value={state} onChange={(e) => modifyUserData({ state: e.target.value })} />
    </>
}

export default AddressDetails;