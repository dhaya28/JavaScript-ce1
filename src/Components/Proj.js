import React from 'react'

export default function Proj() {
    return (
        <div style={{padding:"200px"}}>
            <div style={{
                display: "flex",
                textAlign: "center",
                width: "700px",
                borderRadius: "10px",
                backgroundColor: "blueviolet",
                justifyContent: "space-between",
                padding: "1.2vh"
            }}>
                <div>
                    <img style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }} src='data:image/jpeg;base64,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'></img>
                </div>
                <div>
                    <h2>Login</h2>
                    <br />
                    <form>
                        <label>username</label>
                        <br />
                        <input type='text'></input>
                        <br /><br />
                        <label>password</label>
                        <br />
                        <input type='password'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
