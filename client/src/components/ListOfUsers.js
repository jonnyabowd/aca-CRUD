import React from 'react';
import { Link } from 'react-router-dom';

function ListOfUsers(props) {

    return (
        <div>
            {props.users.map(user => {
                return <div>
                    <h2>{user.firstName} {user.lastName}</h2>
                    <h3>{user.city}</h3>
                    {/* <Link id='detailLink' to='/:id'> details </Link> */}
                    <a href="#">View Details</a> 
                    <button type="button">Delete</button>
                    <hr></hr>
                </div>
            })}
        </div>
    )



    // return ( 
    //     <div>
    //         <div>
    //             <div>
    //                 <div>ID:</div>
    //                 <div>{props.id}</div>
    //             </div>
    //             <div>
    //                 <div>Make:</div>
    //                 <div>{props.firstName}</div>
    //             </div>
    //             <div>
    //                 <div>Model:</div>
    //                 <div>{props.lastName}</div>
    //             </div>
    //             <div>
    //                 <div>Year:</div>
    //                 <div>{props.location}</div>
    //             </div>


    //         </div>
    //         <a href="#">View Details</a>
    //         <button type="button">Delete</button>
    //     </div>
    // )
  }
  
  
export default ListOfUsers;
