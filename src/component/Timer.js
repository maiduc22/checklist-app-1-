import React, {useState, useEffect, useRef} from 'react'
import './Timer.css'
  
const Timer = ({index, intervalRef, setTodos, todos}) => {
  
    
    const [h, setH] = useState(0);
    const [m ,setM] = useState(0);
    const [s, setS] = useState(0);

    const [timer, setTimer] = useState('00:00:00');

    function getTimeremain(endtime){
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total/1000) % 60);
        const minutes = Math.floor((total/1000/60) % 60);
        const hours = Math.floor(total/(1000*60*60))
        return {
            total, hours, minutes, seconds
        };
    };
    function startTimer(endtime){
        let {total, hours, minutes, seconds} = getTimeremain(endtime);
        if (todos[index].isTime == true){
            if (total >= 0){
                setTimer(
                    (hours>9 ? hours : '0'+hours) + ':' +
                    (minutes>9 ? minutes: '0'+minutes) + ':' +
                    (seconds>9 ? seconds: '0'+seconds) 
                )
                document.getElementsByClassName('todo-list')[index].style.border = '#c89666 1px solid';
                document.getElementsByClassName('todo')[index].style.color = 'white';
                document.getElementsByClassName('btn-complete')[index].style.color = '#c89666';
                document.getElementsByClassName('btn-edit')[index].style.color = '#c89666';
                document.getElementsByClassName('btn-delete')[index].style.color = '#c89666';
                document.getElementsByClassName('btn-timer')[index].style.color = '#c89666';
            }
            else {
                clearInterval(intervalRef.current);
                alert('Time out!!!')
                document.getElementsByClassName('todo-list')[index].style.border = 'red 1px solid';
                document.getElementsByClassName('todo')[index].style.color = 'red';
                document.getElementsByClassName('btn-complete')[index].style.color = 'red';
                document.getElementsByClassName('btn-edit')[index].style.color = 'red';
                document.getElementsByClassName('btn-delete')[index].style.color = 'red';
                document.getElementsByClassName('btn-timer')[index].style.color = 'red';
            }
        }
        
    };
    function clearTimer(endtime){
        if (todos[index].isTime == true){
            // if (m >= 60){
            //     setH(h => h+1);
            //     setM(m => m-60);
            // }
            // if (s >= 60){
            //     setH(m => m+1);
            //     setM(s => s-60);
            // }
            setTimer(
                (h>9 ? h : '0'+h) + ':' +
                (m>9 ? m: '0'+m) + ':' +
                (s>9 ? s: '0'+s) 
            );
            if (intervalRef.current) clearInterval(intervalRef.current);
            const id = setInterval(() => {
                startTimer(endtime);
                console.log('tick');
            }, 1000)
            intervalRef.current = id;
        }
        
    };
    function getEndtime(){
        let endtime = new Date();
        var add = parseInt(h)*3600 + parseInt(m)*60 + parseInt(s);
        endtime.setSeconds(endtime.getSeconds() + add);
        return endtime;
    };

    useEffect(()=>{
        clearTimer(getEndtime());
    }, []);

    function handleClick(){
        clearTimer(getEndtime());
        setTodos([...todos], todos[index].isTime = true);
        document.getElementsByClassName('todo-list')[index].style.border = '#c89666 1px solid';
        document.getElementsByClassName('todo')[index].style.color = 'white';
        document.getElementsByClassName('btn-complete')[index].style.color = '#c89666';
        document.getElementsByClassName('btn-edit')[index].style.color = '#c89666';            document.getElementsByClassName('btn-delete')[index].style.color = '#c89666';
        document.getElementsByClassName('btn-timer')[index].style.color = '#c89666';
    };

    return (
        <div className="timer">
            <form>
                <input className='input-hour' value={h} onChange={(e) => setH(e.target.value)}></input>
                : <input className='input-min' value={m} onChange={(e) => setM(e.target.value)}></input>
                : <input className='input-sec' value={s} onChange={(e) => setS(e.target.value)}></input>
            </form>
            <div className='timer-wrapper'>
                <h4>{timer}</h4>
            </div>
            
            <button className="btn-repeat" onClick={() => handleClick()}>
                <i className='fa fa-repeat' />
            </button>
        </div>
    )
}
export default Timer;



