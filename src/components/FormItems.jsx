import React from "react";

export default function FormItems(props) {

    let item = props.type;
    
    switch(item) {
        case 'DFS':
            return (
                <label id="formSecondPart">
                    Select all the options that your project might include <br />
                    <div>
                        <input type="checkbox" name="dfs_option" id="MultiplePages" value="MultiplePages"/>
                        <label for="MultiplePages">Multiple Pages</label><br />

                        <input type="checkbox" name="dfs_option" id="MultipleUsers" value="MultipleUsers"/>
                        <label for="MultipleUsers">Multiple Users</label><br />

                        <input type="checkbox" name="dfs_option" id="RegisterLogin" value="RegisterLogin"/>
                        <label for="RegisterLogin">Register and Login</label><br />

                        <input type="checkbox" name="dfs_option" id="Database" value="Database"/>
                        <label for="Database">Keep data</label><br />

                        <input type="checkbox" name="dfs_option" id="FilesStorage" value="FilesStorage"/>
                        <label for="FilesStorage">Manage Files</label><br />
                        
                        <input type="checkbox" name="dfs_option" id="paymentOpt" value="paymentOpt"/>
                        <label for="paymentOpt">Online Payment</label><br />
                    </div>
                </label>
            )
        case 'NFEP':
            return (
                <div>NFEP</div>
            )
        case 'SEP':
            return (
                <div>SEP</div>
            )
        default:
            break;
    }
}