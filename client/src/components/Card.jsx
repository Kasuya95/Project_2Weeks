import React from 'react'
import swal from 'sweetalert2'

export const Card = (props) => {

    const deleted = async (id) => {
        
    }
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={props.imageUrl}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {props.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{props.brand}</div>
    </div>
  </div>
</div>
  )
}
