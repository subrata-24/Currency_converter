import React from "react";

function InputBox() {
    
    return (
        <div className={`bg-white text-sm flex p-3 rounded-lg`}>
            <div className="w-1/2">
                <label className="text-black/40 mb-2 inline-block">
                    label
                </label>
                <input
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="amount"
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>

                <select className="rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none">
                    <option value="usd">usd</option>
                </select>
            </div>
        </div>
    );
}

export default InputBox;