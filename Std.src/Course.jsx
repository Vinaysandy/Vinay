import React from 'react'

const Course = (props) => {
    let data = Course.data
  return (
    <div>
        <table>
            <tr>
                <th>{props.data}</th>
            </tr>
        </table>
    </div>
  )
}

export default Course