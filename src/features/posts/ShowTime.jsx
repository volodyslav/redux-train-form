import { formatDistanceToNow, parseISO } from "date-fns"


const ShowTime = ({time}) => {
    let showTime =''
    if (time){
        const timeParse = parseISO(time)
        const timePeriod = formatDistanceToNow(timeParse)
        showTime = ` ${timePeriod} ago`
    }
  
    return (
        <span title={time}>{showTime}</span>
  )
}

export default ShowTime