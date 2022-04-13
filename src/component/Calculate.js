import React from 'react'

function Calculate({dateString}) {
    console.log(dateString);
    let deadline = new Date(dateString);
    let a = new Date();
    console.log(a.toLocaleDateString());
    let today = new Date(a.toLocaleDateString());
    let diff_time = -today.getTime() + deadline.getTime();
    let diff_day = Math.ceil(diff_time / (1000 * 60 * 60 * 24));
    console.log(diff_day);
    return (
    {diff_day}
  )
}

export default Calculate