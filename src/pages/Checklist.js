import { useEffect, useState } from "react";

function CheckList() {

    let [step, setStep] = useState(1)

    function setStepToTwo() {
        setStep(2)
    }
    function setStepToOne() {
        setStep(1)
    }

    function setStepToThree() {
        setStep(3)
    }

    function handleSubmit() {
        console.log(step)
    }


    return (<>
        <section className="">
            <div className="container-fluid">
                <div className="row justify-content-md-center">

                    <div className="col-lg-6 vh-100 bg-light">
                        <div className="container mt-5">
                            <h1>Get start checklist</h1>
                            <h6>To get the best experience, we recommend completing these onboarding steps.</h6>
                            <div class="progress my-3" style={{ height: "12px" }}>
                                <div class="progress-bar bg-custom" role="progressbar" style={{ width: "33%", height: "20px" }}></div>
                            </div>
                            <div class="card mt-3" style={{ backgroundColor: "#fffcfc", paddingBottom: "10px", cursor:"pointer"}} onClick={setStepToOne}>
                                <div class="p-2 my-1">
                                    <div>
                                        <h6>Supply checklist</h6>
                                        <p>
                                            Make sure your supplies are ready for testing
                                        </p>
                                    </div>
                                    {
                                        step === 1 ?
                                            <div className="text-end" style={{ marginTop: "-30px" }}></div>
                                            :
                                            <div className="text-end" style={{ marginTop: "-50px" }}>
                                                <img src="/images/img4.png" alt="logo" width="20" />
                                            </div>
                                    }

                                </div>
                            </div>
                            <div class="card mt-3" style={{ backgroundColor: "#fffcfc", paddingBottom: "10px", cursor:"pointer" }} onClick={setStepToTwo}>
                                <div class="p-2 my-1">
                                    <div>
                                        <h6>Setup a trainer</h6>
                                        <p>Before activating the Twist device we must show you how to use it</p>
                                    </div>
                                    {
                                        step === 1 ?
                                            <div className="text-end" style={{ marginTop: "-30px" }}></div>
                                            :
                                            <div className="text-end" style={{ marginTop: "-50px" }}>
                                                <img src="/images/img4.png" alt="logo" width="20" />
                                            </div>
                                    }
                                </div>
                            </div>
                            <div class="card mt-3" style={{ backgroundColor: "#fffcfc", paddingBottom: "10px" }}>
                                <div class="p-2 my-1">
                                    <div>
                                        <h6>Download control center app</h6>
                                        <p>Get the direct download to the controller app</p>
                                    </div>
                                    {
                                        step === 1 ?
                                            <div className="text-end" style={{ marginTop: "-30px" }}></div>
                                            :
                                            step == 3 ?
                                                <div className="text-end" style={{ marginTop: "-50px" }}>
                                                    <img src="/images/img4.png" alt="logo" width="20" />
                                                </div> : <div className="text-end" style={{ marginTop: "-30px" }}></div>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 vh-100">
                        {
                            step === 1 ? <div className="container mt-5">
                                <h1>Get start checklist</h1>

                                <div class="">
                                    <div class="p-2">
                                        <div class="form-check">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="border mt-1">
                                                        <input class="form-check-input mt-4 m-1" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label class="form-check-label" for="flexCheckChecked">
                                                            <div className="px-3 mt-2">
                                                                <h6>AED battery</h6>
                                                                <p>Make sure your supplies are ready for testing</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="border mt-3">
                                                        <input class="form-check-input mt-4 m-1" type="checkbox" value="" id="d" />
                                                        <label class="form-check-label" for="d">
                                                            <div className="px-3 mt-2">
                                                                <h6>Twiist system</h6>
                                                                <p>Make sure you  have all supplies for your system</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="border mt-3">
                                                        <input class="form-check-input mt-4 m-1" type="checkbox" value="" id="d" />
                                                        <label class="form-check-label" for="d">
                                                            <div className="px-3 mt-2">
                                                                <h6>Infusion set</h6>
                                                                <p>IV line</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                    <div className="border mt-3">
                                                        <input class="form-check-input mt-4 m-1" type="checkbox" value="" id="d" />
                                                        <label class="form-check-label" for="d">
                                                            <div className="px-3 mt-2">
                                                                <h6>Infustion set incertion device</h6>
                                                                <p>Quick incertion</p>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="d-grid mt-4">
                                                <button type="submit" className="btn btn-custom" onClick={setStepToTwo}>Continue</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div> : step === 2 ? <div>
                                <div className="container mt-5">
                                    <h1>Setup trainer</h1>
                                    <div className="border mt-4">
                                        <label class="form-check-label" for="flexCheckChecked">
                                            <div className="px-3 mt-2">
                                                <h6>A trainer will reach out to you within 24 hours</h6>
                                                <p>we want you to easily and effictively learn how to use your new insulin device</p>
                                                <h6>
                                                    <div className="mt-1">Or call us to setup a training session: <span className="text-primary">1 (800) ###-###</span></div>
                                                </h6>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="d-grid mt-4">
                                        <button type="submit" className="btn btn-custom" onClick={setStepToThree}>Continue</button>
                                    </div>
                                </div>
                            </div> : <div className="container mt-5 text-center">
                                <h1>Download controller app</h1>
                                <h6>Start by downloading controller app for your Twiist device</h6>
                                
                                <img src="/images/img5.png" alt="logo" width="500" />
                                <div className="d-grid mt-4">
                                    <button type="submit" className="btn btn-custom" onClick={handleSubmit}>Go to dashboard</button>
                                </div>
                            </div>
                        }
                    </div>

                </div>
            </div>
        </section>
    </>);
}

export default CheckList;