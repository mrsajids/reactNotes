import React, { useState } from 'react'
import "./todo.css"

const Todo = () => {
    const [inputData, setInputData] = useState("")
    const [item, setItem] = useState([])

    const addItem = () => {
        if (!inputData) {

        } else {

            setItem([...item, inputData])
        }
    }
    const deletItem = (id) => {
        const updatedItem = item.filter((elem, ind) => {
            return ind !== id
        })
        setItem(updatedItem)
    }
    return (
        <div className="my-5">
            <center>
                <img style={{ height: "10rem" }} src="https://www.pngitem.com/pimgs/m/25-255518_notes-icon-notes-app-icon-png-transparent-png.png" className="rounded mx-auto d-block" alt="..."></img>
                <h3 className="text-center">Add your list here</h3>
                <br />
                <hr />
                <div className='addItems'>
                    <input className="p-1 col-6" type="text" placeholder='Add Items ' value={inputData} onChange={(e) => setInputData(e.target.value)} />
                    <i className="fa-solid fa-plus plusicon" onClick={addItem}></i>
                </div>
            </center>
            <br />
            <div className="showItems bg-#fd7e14">{
                item.map((elem, ind) => {
                    return (
                        <div className="eachItem" key={ind} style={{
                            backgroundColor: "orange", border: "2px solid grey",
                            padding: "0rem 1.5rem", margin: "0.2rem 0"
                        }}>
                            <h5 style={{ display: "inline", lineHeight: "3rem" }}>{elem}</h5>
                            <div className="icons">
                                <i className="fa-solid fa-trash" onClick={() => deletItem(ind)} style={{ fontStyle: "normal" }}></i>
                            </div>

                        </div>

                    )
                })
            }

            </div>
            {/* <button type="button" className=" my-2 btn btn-primary">Middle</button> */}
            <center>
                <div className="showItems">
                    <button type="button" className=" my-2 btn btn-primary" onClick={() => setItem([])}>Delete All</button>

                </div>
            </center>
        </div>


    )
}

export default Todo
