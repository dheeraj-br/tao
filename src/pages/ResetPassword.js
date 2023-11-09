import { useState } from "react";

function ResetPassword() {
    const [confirmPassword, setConfirmPassword] = useState("");
    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState('eyeoff');
    const [confirmType, setConfirmType] = useState('password');
    const [confirmIcon, setConfirmIcon] = useState('eyeoff');
    const handleToggle = () => {
        if (type === 'password') {
            setIcon("eye");
            setType('text')
        } else {
            setIcon("eyeoff")
            setType('password')
        }
    }
    const handleConfirmToggle = () => {
        if (confirmType === 'password') {
            setConfirmIcon("eye");
            setConfirmType('text')
        } else {
            setConfirmIcon("eyeoff")
            setConfirmType('password')
        }
    }
    return (<>
        <section className="bg-light">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <nav className="navbar navbar-light bg-light border-bottom px-3 py-3">
                        <img src="/images/logo.png" alt="logo" width="130" />
                    </nav>
                    <div className="w-75">
                        <form className="pt-5">
                            <h2>Reset Password?</h2>
                            <div className="row mt-2 mb-3">
                                <div className="col-sm-6">
                                    <div className="input-group mb-3 mt-3">
                                        <span className="has-float-label">
                                            <input
                                                className="form-control"
                                                id="password"
                                                type={type}
                                                name="password"
                                                placeholder=""
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                autoComplete="current-password"
                                            />
                                            <label htmlFor="password">Password *</label>
                                        </span>
                                        <div className="input-group-append">
                                            <button style={{ borderTop: "solid #dee2e6 1px", borderLeft: "solid #dee2e6 1px", borderRight: "solid #dee2e6 1px", borderBottom: "solid #dee2e6 1px", padding: "6px", background: 'white', borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }} type="button"><span onClick={handleToggle}>
                                                {
                                                    icon === 'eye' ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>
                                                }
                                            </span></button>
                                        </div>
                                    </div>
                                    <div className="input-group">
                                        <span className="has-float-label">
                                            <input
                                                className="form-control"
                                                id="confirmPassword"
                                                type={confirmType}
                                                name="confirmPassword"
                                                placeholder=""
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                autoComplete="current-password"
                                            />
                                            <label htmlFor="confirmPassword">Confirm Password *</label>
                                        </span>
                                        <div className="input-group-append">
                                            <button style={{ borderTop: "solid #dee2e6 1px", borderLeft: "solid #dee2e6 1px", borderRight: "solid #dee2e6 1px", borderBottom: "solid #dee2e6 1px", padding: "6px", background: 'white', borderTopRightRadius: '6px', borderBottomRightRadius: '6px' }} type="button"><span onClick={handleConfirmToggle}>
                                                {
                                                    confirmIcon === 'eye' ? <i className="bi bi-eye"></i> : <i className="bi bi-eye-slash"></i>
                                                }
                                            </span></button>
                                        </div>
                                    </div>
                                    
                                <div className="d-grid mt-4">
                                    <button type="button" className="btn btn-custom" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Change password</button>
                                </div>
                                </div>
                                <div className="col-sm-6">
                                    <strong className="">Password requirements</strong>
                                    <div className="form-check mt-2">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Characters from (Uppercase, lowercase, numbers, special Characters)
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            Atlease 8 Characterslong
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked/>
                                        <label className="form-check-label" htmlFor="flexCheckDefault">
                                            cannot include parts of first name, last name or username
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className="modal fade" style={{ marginTop: "-100px" }} id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog text-center modal-dialog-centered">
                                    <div className="modal-content">
                                        <div class="modal-body">
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-lg-1"></div>
                                                    <div class="col-lg-10"><div className="modal-body w-100">

                                                        <img src="/images/img6.png" style={{ marginTop: "-90px" }} alt="logo" width="130" />
                                                        <h2>You've reset your password!</h2>
                                                        <div> You can now access the patient portal.</div>
                                                        <div className="d-grid">
                                                            <button type="button" className="btn btn-custom mt-3" data-bs-dismiss="modal">Login</button>
                                                        </div>
                                                    </div></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-3">Go to  <span className="text-primary">Sign In</span></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>);
}

export default ResetPassword;