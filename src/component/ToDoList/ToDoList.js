import React from "react";
import "./ToDoList.css"

/*
component ToDoList nhận vào 3 props:
    list: là 1 mảng lưu trữ các task đc thêm vào
    remove: là 1 function lấy từ component App để xóa đi task dựa trên id của nó trong list[]
    update: cập nhật giá trị mới của task cũ
*/ 
function ToDoList({list, remove, update}){
    function handleClick(id){
        remove(id);
    }
    
    return (
        <div className="list-task">
                {
                    /* map method nhận 2 đối số: item là từng phần tử trong mảng list và id là index của phần tử.
                        Kqua trả ra là 1 div gồm 1 form và 1 button (button có chức năng remove)
                    */
                    list.map( (item, id) =>                 
                        <div className="each-task" key={id}>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <input    //input hiển thị task đã dc add, có thể trực tiếp chỉnh sửa luôn task cũ trong input này
                                    value={item} 
                                    onChange={(e)=> update(e.target.value, id)}>
                                </input> 
                                <input 
                                    className="check-box" 
                                    type="checkbox">  
                                </input>
                            </form>   
                            <button //gọi tới hàm handleClick, hàm này lại gọi tới prop remove.
                                onClick={handleClick}>
                                    Remove
                            </button> 
                        </div>
                        )
                }
        </div>
    )
}
export default ToDoList;