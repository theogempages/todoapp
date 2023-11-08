import React from "react";
import { useState } from 'react';

function NewToDo(props: { backToMain: any, newTodo: any; }) {
    const {backToMain, newTodo} = props;
    const [titleTodo, setTitleTodo] = useState<string>("");
    const [ datetime, setDatetime ] = useState<any>('');
    const [enddate, setEnddate] = useState<string>('');
    const [formstate, setFormstate] = useState<boolean>(true);
    const changeDate = (val: string) => {
        // const newTime: number = new Date(val).getTime() || 0
        setEnddate(val);
    }
    const addNewTodo = (e: any) => {
        console.log(enddate)
        e.preventDefault();
        if (!titleTodo && !enddate) {
            setFormstate(!formstate);
        }else {
            newTodo({title: titleTodo, enddate, status: false});
        }
    }
    
    function handleChange(e:any) {
        console.log(e.target['value'])
        if (!e.target['validity'].valid) return;
        const dt= e.target['value'] + ':00Z';
        setDatetime(dt);
      }

    return (
        <>
            {!formstate && <div className="block mb-1 rounded-lg bg-danger-100 py-2 text-base text-danger-700"  role="alert">Please fill all fields</div>}
            <div className="flex">
                <div className="block max-w-sm rounded-lg bg-white">
                <form onSubmit={e => { addNewTodo(e)}} className="flex mb-4">
                    <div className="relative mr-6" data-te-input-wrapper-init>
                    <label
                        className="pointer-events-nonemax-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                        >Title
                    </label>
                    <input
                        type="text" value={titleTodo} onChange={(e) => {setTitleTodo(e.target.value)}} 
                        className="peer block min-h-[auto] rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="titleInput"
                        placeholder="Title todo" />
                    </div>

                    <div className="relative mr-6" data-te-input-wrapper-init>
                    <label
                        className="pointer-events-none max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
                        >Date
                    </label>
                    <input
                        type="date" value={enddate} onChange={(e) => {changeDate(e.target.value)}}
                        className="peer block min-h-[auto] rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="dateInput"
                        placeholder="" />
                    {/* <input
                        type="datetime-local" value={(datetime || '').toString().substring(0, 16)} onChange={handleChange}
                        className="peer block min-h-[auto] rounded border-2 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none  dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="datetimeInput"
                        placeholder="" /> */}
                    </div>
                    <button
                        type="submit"
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Submit
                    </button>
                    <button
                        type="button" onClick={backToMain}
                        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                        Cancel
                    </button>
                </form>
                </div>
            </div>
        </>
    )
}

export default NewToDo;