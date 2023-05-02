import React, { useState } from "react";
import { Password } from 'primereact/password';
import { Divider } from 'primereact/divider';

function SideBar() {
    const [value, setValue] = useState<string>('');
    const header = <div className="font-bold mb-3">Pick a password</div>;
    const footer = (
        <>
            <Divider />
            <p className="mt-2">Suggestions</p>
            <ul className="pl-2 ml-2 mt-0 line-height-3">
                <li>At least one lowercase</li>
                <li>At least one uppercase</li>
                <li>At least one numeric</li>
                <li>Minimum 8 characters</li>
            </ul>
        </>
    );

    return (
        <div className="card flex justify-content-center">
            <Password value={value}  header={header} footer={footer} />
        </div>
    )
}
export default SideBar
