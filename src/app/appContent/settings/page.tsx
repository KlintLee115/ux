export default function Page() {
    return (
        <div className="w-2/3 mx-auto">
            <div className="flex justify-evenly">
                <div className="flex flex-col gap-4">
                    <div>
                        <h5>Name</h5>

                        <input className="border border-black" />
                    </div>
                    <div>

                        <h5>Age</h5>


                        <input className="border border-black" type="number" />
                    </div>

                    <div>

                        <h5>Email</h5>
                        <input className="border border-black" type="email" />
                    </div>

                    <div>

                        <h5>Phone Number</h5>

                        <input className="border border-black" type="number" />
                    </div>
                    <div>

                        <h5>Biography</h5>
                        <input className="border border-black" />
                    </div>
                    <div>

                        <h5>Hobbies</h5>
                        <input className="border border-black" />

                    </div>
                </div>
                <div>
                    <h5>Remind me to pay debt every</h5>
                    <div className="flex gap-8">
                        <div className="flex gap-2">
                            <label htmlFor="">week</label>
                            <input type="checkbox" />
                        </div>
                        <div className="flex gap-2">

                            <label htmlFor="">2 weeks</label>
                            <input type="checkbox" />
                        </div>
                        <div className="flex gap-2">

                            <label htmlFor="">month</label>
                            <input type="checkbox" />
                        </div>

                    </div>
                </div>
            </div>
            <button className="block mx-auto mt-16 px-3 py-2 rounded-xl bg-black text-white">Save</button>
        </div>
    )
}