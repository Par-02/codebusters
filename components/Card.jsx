import React from "react";

export default function Card(props) {
    return (
        <main>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg" src={props.image} alt="" />
                </a>
                <div className="p-5">
                    
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{props.name}</p>
                    
                </div>
            </div>
        </main>
    );
}
